

document.addEventListener("DOMContentLoaded", function() {
    let loaderWrapper = document.getElementById("loaderWrapper");
    let getStartedBtn = document.getElementById("getStartedBtn");

    // Set a timeout based on the animation duration
    setTimeout(function() {
        loaderWrapper.style.display = "none"; // Hide loader
        getStartedBtn.style.display = "block"; // Show button
    }, 5000); // Adjust time (5s) to match your animation duration
});

// Redirect to login page when button is clicked
document.getElementById("getStartedBtn").addEventListener("click", function() {
    window.location.href = "public/login.html"; // Redirect to login page
});
