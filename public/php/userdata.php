<?php 
session_start();
include('database.php');

// Check if user is logged in
if(isset($_SESSION['username'])) {
    // Get user data from session
    $userData = array(
        'username' => $_SESSION['username'],
        'user_type' => $_SESSION['user_type'],
        'municipality_code' => $_SESSION['municipality_code']
    );

    // Set content type to JSON
    header('Content-Type: application/json');

    // Return user data as JSON
    echo json_encode($userData);
} else {
    // If user is not logged in, return an error message or handle it accordingly
    echo json_encode(array('error' => 'User not logged in'));
}
?>

