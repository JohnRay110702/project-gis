// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDFuVu4AKkU-yw-vEdHwSBYQGK2gSWiM-M",
    authDomain: "rainfall-web-1e47f.firebaseapp.com",
    projectId: "rainfall-web-1e47f",
    storageBucket: "rainfall-web-1e47f.appspot.com",
    messagingSenderId: "11042584123",
    appId: "1:11042584123:web:647afdd8a739d014144e1e"
  };


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);



// Function to handle logout
function logoutUser() {
    // Sign out the user from Firebase Authentication
    signOut(auth).then(() => {
      // Clear the user token from session storage
      sessionStorage.removeItem('userToken');
  
      // Redirect to login page
      window.location.href = "login.html";
  
      // Replace the current URL in history with the login page URL
      history.replaceState(null, '', 'login.html');
    }).catch((error) => {
      console.error("Logout error:", error.message);
      // Handle logout errors here
    });
  }
  

  document.getElementById("logoutBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    logoutUser();
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Initialize Flatpickr with current date as placeholder
    flatpickr("#PickerDate", {
        dateFormat: "Y-m-d", // Set date format
        altInput: true,
        altFormat: "F j, Y", // Set the format of the alternate input field
        defaultDate: "Select Date", // Set default date to today
        onChange: function(selectedDates, dateStr, instance) {
            // Handle date change event here
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Flatpickr for time input field
    flatpickr("#timeInput", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        time_24hr: false,
        theme: "material_blue",
        onReady: function (selectedDates, dateStr, instance) {
            instance.set("defaultDate", new Date());
        }
    });
});