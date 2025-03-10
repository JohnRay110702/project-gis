from flask import Flask, jsonify
import pickle
import pandas as pd
from prophet import Prophet
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from PHP frontend

PICKLE_FILE_PATH = "prophet_model.pkl"

def load_model():
    try:
        with open(PICKLE_FILE_PATH, 'rb') as f:
            model = pickle.load(f)
            print("✅ Model loaded successfully!")
            return model
    except FileNotFoundError:
        print(f"❌ Error: The pickle file was not found at {PICKLE_FILE_PATH}.")
    return None

model = load_model()

@app.route('/api/forecast', methods=['GET'])
def get_forecast():
    if model is None:
        return jsonify({"error": "Model not loaded"}), 500

    future_dates = pd.date_range(start=pd.Timestamp.today(), periods=30, freq='D')
    future = pd.DataFrame({'ds': future_dates})

    # Set regressors (dummy values)
    regressors = ['precip', 'windspeed', 'winddir', 'winddir_sin', 'winddir_cos',
                  'rel_angle', 'rel_angle_sin', 'rel_angle_cos', 'effluentVolume']
    for reg in regressors:
        future[reg] = 0.8

    forecast = model.predict(future)

    response = forecast[['ds', 'yhat']].to_dict(orient='records')
    return jsonify({"forecast": response})

if __name__ == "__main__":
    app.run(debug=True)
