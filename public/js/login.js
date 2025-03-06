// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDFuVu4AKkU-yw-vEdHwSBYQGK2gSWiM-M",
//   authDomain: "rainfall-web-1e47f.firebaseapp.com",
//   projectId: "rainfall-web-1e47f",
//   storageBucket: "rainfall-web-1e47f.appspot.com",
//   messagingSenderId: "11042584123",
//   appId: "1:11042584123:web:647afdd8a739d014144e1e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Function to handle login
// function loginUser(email, password) {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       var user = userCredential.user;
     
//       // Get the user's ID token
//       user.getIdToken()
//         .then((idToken) => {
//           // Store the token in sessionStorage
//           sessionStorage.setItem('userToken', idToken);
//           // Display success message without a confirm button
//           Swal.fire({
//             icon: 'success',
//             title: 'Login successful!',
//             showConfirmButton: false,
//             timer: 1500 // Auto-close the success message after 1.5 seconds
//           });
        
//           setTimeout(() => {
//             // Redirect to login_content.html after the delay
//             window.location.href = "crud.html";
//           }, 3000);
        
//       })
//         .catch((error) => {
//         });
//     })
//     .catch((error) => {
//       // Handle login errors here
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid email or password.',
//         text: 'Please try again.',
//         confirmButtonText: 'OK'
//       });
//     });
// }

// // Add event listener to the login form
// document.getElementById("login-form").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent default form submission

//   // Get user input
//   var email = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   // Call loginUser function with user input
//   loginUser(email, password);
// });




// const sign_in_btn = document.querySelector("#sign-in-btn");
// const about_btn = document.querySelector("#about-btn");
// const container = document.querySelector(".container");

// about_btn.addEventListener("click",()=>{
//     container.classList.add("about-mode");
// });

// sign_in_btn.addEventListener("click",()=>{
//   container.classList.remove("about-mode");
// });

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
