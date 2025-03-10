document.addEventListener("DOMContentLoaded", function () {
    fetchForecastData();
});

function fetchForecastData() {
    fetch("http://127.0.0.1:5000/api/forecast")  // Ensure Flask API is running
        .then(response => response.json())
        .then(data => {
            console.log("Received data:", data); // Debugging

            if (!data.forecast || data.forecast.length === 0) {
                console.error("API returned no forecast data");
                return;
            }

            updateForecastChart(data.forecast);
        })
        .catch(error => console.error("Error fetching data:", error));
}

function updateForecastChart(forecastData) {
    const ctx = document.getElementById("forecastChart").getContext("2d");

    // Clear existing chart if present
    if (window.myChart) {
        window.myChart.destroy();
    }

    const labels = forecastData.map(entry => entry.ds); // Dates
    const predictions = forecastData.map(entry => entry.yhat); // Predictions

    window.myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Forecasted Values",
                data: predictions,
                borderColor: "blue",
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: "Date" } },
                y: { title: { display: true, text: "Distance of Effluence travelled in meters" } }
            }
        }
    });
}
