<head>
<link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>

<style>
html {
    background-image: linear-gradient(to right, rgba(229, 231, 235, 0.384), rgba(100, 133, 100, 0.363)), url("../img/home-cover.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.custom-popup{
    background: transparent;
}
</style>
</head>

<?php
session_start();
include('database.php');

if(isset($_POST['login'])) {
    $user_unsafe = $_POST['username'];
    $pass_unsafe = $_POST['password'];

    $user = mysqli_real_escape_string($con, $user_unsafe);
    $pass = mysqli_real_escape_string($con, $pass_unsafe);

    //VERIFY DATA FROM TWO DIFFERENT TABLES UNDER THE SAME DATABASE
    $query = mysqli_query($con, "SELECT * FROM login WHERE username='$user' AND BINARY password='$pass'") or die(mysqli_error($con));
    $row = mysqli_fetch_array($query);

    $counter = mysqli_num_rows($query);

    if ($counter == 0) {
        // Handle invalid login
        echo "<script type='text/javascript'>
            $(document).ready(function(){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Invalid Username or Password!',
                showConfirmButton: false,
                timer: 1000,
                customClass: {
                popup: 'custom-popup'
            }
            }).then(function() {
               // Redirect to login page after popup closes
                document.location = '../login.html';
            });
            });
            </script>";
    } else {
        // Retrieve user data
        $name = $row['username'];
        $id = $row['id'];
        $user_type = $row['user_type'];
        $municipality_code = $row['municipality_code'];

        // Store the user's information in session variables
        $_SESSION['id'] = $id;
        $_SESSION['username'] = $name;
        $_SESSION['user_type'] = $user_type;
        $_SESSION['municipality_code'] = $municipality_code;

        // Output user data as JSON
        $userData = array(
            'username' => $name,
            'user_type' => $user_type,
            'municipality_code' => $municipality_code
        );

        // Echo JavaScript to handle user data
        echo "<script type='text/javascript'>
            $(document).ready(function(){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome to PROJECT GIS!',
                showConfirmButton: false,
                timer: 1000,
                customClass: {
                popup: 'custom-popup'
            }
            }).then(function() {
                sessionStorage.setItem('loggedIn', 'true');
                document.location = '../index.html';
            });
            });

            // Define user data
            var userData = " . json_encode($userData) . ";
            
            // Call the function to show buttons based on user type and municipality code
            showButtonsBasedOnUserTypeAndMunicipality(userData.user_type, userData.municipality_code);

            // Your additional JavaScript code here
            if (userData && userData.user_type && userData.municipality_code) {
                showButtonsBasedOnUserTypeAndMunicipality(userData.user_type, userData.municipality_code);
            } else {
                console.error('User type or municipality code is not defined.');
            }
            </script>";
    }
}
?>
