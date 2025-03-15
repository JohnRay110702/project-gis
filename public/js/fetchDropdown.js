document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.getElementById("municipality__select"); // ✅ Correct ID
    const filterButton = document.getElementById("municipalityFilter"); // ✅ Matches HTML
    

    filterButton.addEventListener("click", function () {
        const selectedTributary = selectElement.value;

        if (selectedTributary === "-") {
            alert("Please select a tributary.");
            return;
        }

        fetch("http://localhost:5000/api/get_rain_data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tributary: selectedTributary })  // ✅ Using "tributary"
        })
        .then(response => response.json())
        .then(data => {
            console.log("Rain Data:", data);
            // Handle the response data (e.g., update the chart)
        })
        .catch(error => console.error("Error fetching data:", error));
    });
});
