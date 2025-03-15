document.addEventListener("DOMContentLoaded", function () {
    fetchForecastData(30); // Default forecast for 30 days on page load

    // Ensure the button exists before attaching an event listener
    const forecastButton = document.getElementById("forecastButton");
    if (forecastButton) {
        forecastButton.addEventListener("click", function () {
            const periodsInput = document.getElementById("forecastPeriod");
            const periods = parseInt(periodsInput.value, 10);

            // Validate user input
            if (isNaN(periods) || periods <= 0) {
                alert("⚠️ Please enter a valid positive number for the forecast period.");
                return;
            }

            fetchForecastData(periods);
        });
    } else {
        console.error("❌ Error: 'forecastButton' not found in the DOM.");
    }
});

function fetchForecastData(periods) {
    console.log(`📡 Sending POST request with periods: ${periods}`);

    fetch("http://127.0.0.1:5000/api/forecast", {  // Ensure URL is correct
        method: "POST",  // ✅ Make sure it's POST
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ periods: periods })  // ✅ Send JSON data
    })
    .then(response => {
        console.log(`🔹 Response status: ${response.status}`);

        if (!response.ok) {
            throw new Error(`❌ API request failed with status: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        console.log("✅ Received API response:", data);

        if (!data.forecast || data.forecast.length === 0) {
            console.error("❌ API returned no forecast data.");
            alert("⚠️ No forecast data available.");
            return;
        }

        updateForecastChart(data.forecast);
    })
    .catch(error => {
        console.error("❌ Error fetching data:", error);
        alert("⚠️ Failed to fetch forecast. Check console for details.");
    });
}


function updateForecastChart(forecastData) {
    const canvas = document.getElementById("forecastChart");

    if (!canvas) {
        console.error("❌ Error: 'forecastChart' not found in the DOM.");
        return;
    }

    const ctx = canvas.getContext("2d");

    // Destroy previous chart if it exists
    if (window.myChart) {
        window.myChart.destroy();
    }

    const labels = forecastData.map(entry => entry.ds);
    const predictions = forecastData.map(entry => entry.yhat);

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
