from flask import Flask, request, jsonify
import pickle
import pandas as pd
from prophet import Prophet
from flask_cors import CORS
import mysql.connector
from datetime import datetime

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

# Path to the trained model
PICKLE_FILE_PATH = "prophet_model.pkl"

# Load the trained Prophet model
def load_model():
    try:
        with open(PICKLE_FILE_PATH, 'rb') as f:
            model = pickle.load(f)
            print("✅ Model loaded successfully!")
            return model
    except FileNotFoundError:
        print(f"❌ Error: Model file not found at {PICKLE_FILE_PATH}.")
    except Exception as e:
        print(f"❌ Error loading model: {str(e)}")
    return None

model = load_model()

# Database connection function
def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host="localhost",  
            user="root",
            password="",
            database="pagdaloy"
        )
        print("✅ MySQL connected successfully!")  # Debugging
        return conn
    except mysql.connector.Error as e:
        print(f"❌ Database connection error: {str(e)}")
        return None

# 📌 API: Fetch Rain Data
@app.route("/api/get_rain_data", methods=["POST"])
def get_rain_data():
    data = request.get_json()
    print("Raw request data:", request.data)
    print("Parsed JSON:", data)

    selected_tributary = data.get("tributary")
    print("Extracted tributary:", selected_tributary)

    
    if not selected_tributary:
        return jsonify({"error": "No tributary selected"}), 400

    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        cursor = conn.cursor(dictionary=True)
        query = """
            SELECT volume AS precip, timestamp 
            FROM rain_g 
            WHERE tributary = %s 
            ORDER BY timestamp DESC
        """
        cursor.execute(query, (selected_tributary,))
        results = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(results)
    except mysql.connector.Error as e:
        return jsonify({"error": f"Database query failed: {str(e)}"}), 500
    
    

@app.route('/api/forecast', methods=['POST'])
def get_forecast():
    """API Endpoint to get forecast data using the trained Prophet model."""
    
    if model is None:
        return jsonify({"error": "Model not loaded"}), 500

    # Ensure the request contains JSON data
    if not request.is_json:
        return jsonify({"error": "Invalid request. JSON data required."}), 400

    data = request.get_json()
    print("Raw request data:", request.data)
    print("Parsed JSON:", data)

    selected_tributary = data.get("tributary")
    print("Extracted tributary:", selected_tributary)

    periods = data.get("periods", 30)

    if not isinstance(periods, int) or periods <= 0:
        return jsonify({"error": "Number of periods must be a positive integer"}), 400

    # 📌 Generate future dates
    future_dates = pd.date_range(start=datetime.today(), periods=periods, freq='D')
    future = pd.DataFrame({'ds': future_dates})

    # 📌 Fetch `precip` from database
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor(dictionary=True)
        query = """
            SELECT timestamp AS ds, volume AS precip  
            FROM rain_g 
            WHERE tributary = %s
            ORDER BY timestamp DESC
            LIMIT %s
        """

        print("Executing query with parameters:", selected_tributary, periods)


        cursor.execute(query, (selected_tributary, int(periods)))
        db_results = cursor.fetchall()
        cursor.close()
        conn.close()

        print("db_results: ", db_results)

        # 📌 Convert fetched data to DataFrame
        if db_results:
            regressor_df = pd.DataFrame(db_results)
            regressor_df["ds"] = pd.to_datetime(regressor_df["ds"])

            # print("db result: ", db_results)

            if db_results:
                print("data fetched: ", db_results)
            else:
                print("no data returned from database.")

            # 📌 Merge with future dates and handle missing values
            future = future.merge(regressor_df, on="ds", how="left")
            future["precip"] = future["precip"].ffill()  # Forward fill missing values
            future["precip"] = future["precip"].fillna(0.8)  # Fill any remaining NaN with default value

        else:
            print("⚠ No historical data found. Using default fallback for `precip`.")
            future["precip"] = 0.8  # Default fallback value

    else:
        print("⚠ No database connection. Using default fallback for `precip`.")
        future["precip"] = 0.8  # Default fallback value

    # 📌 Assign fallback values for other regressors
    for reg in ['windspeed', 'winddir', 'winddir_sin', 'winddir_cos',
                'rel_angle', 'rel_angle_sin', 'rel_angle_cos', 'effluentVolume']:
        future[reg] = 0.8  # Default fallback value

    # 📌 Generate forecast
    forecast = model.predict(future)
    response = forecast[['ds', 'yhat']].to_dict(orient='records')

    return jsonify({"forecast": response})


if __name__ == "__main__":
    app.run(debug=True)
