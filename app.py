from flask import Flask, request, jsonify
import pickle
import pandas as pd
from prophet import Prophet
from flask_cors import CORS

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

@app.route('/api/forecast', methods=['POST'])
def get_forecast():
    """API Endpoint to get forecast data using the trained Prophet model."""
    
    if model is None:
        return jsonify({"error": "Model not loaded"}), 500

    # Ensure the request contains JSON data
    if not request.is_json:
        return jsonify({"error": "Invalid request. JSON data required."}), 400

    try:
        data = request.get_json()
        print(f"🔹 Received JSON request: {data}")  # Debugging

        # Extract and validate periods from request
        periods = data.get('periods', 30)  # Default to 30 if not provided
        if not isinstance(periods, int) or periods <= 0:
            return jsonify({"error": "Number of periods must be a positive integer"}), 400

    except Exception as e:
        print(f"❌ Error parsing request: {str(e)}")
        return jsonify({"error": "Invalid input. Please provide a valid JSON payload."}), 400

    # Generate future dates
    future_dates = pd.date_range(start=pd.Timestamp.today(), periods=periods, freq='D')
    future = pd.DataFrame({'ds': future_dates})

    # Set dummy values for regressors (Modify this based on your dataset)
    regressors = ['precip', 'windspeed', 'winddir', 'winddir_sin', 'winddir_cos',
                  'rel_angle', 'rel_angle_sin', 'rel_angle_cos', 'effluentVolume']
    
    for reg in regressors:
        future[reg] = 0.8  # Assigning dummy values (modify based on actual data)

    # Make predictions using the loaded model
    forecast = model.predict(future)
    
    # Extract relevant forecasted values
    response = forecast[['ds', 'yhat']].to_dict(orient='records')

    return jsonify({"forecast": response})


if __name__ == "__main__":
    app.run(debug=True)
