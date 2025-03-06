<?php
session_start();
include('database.php');

$response = array();

if ($con && isset($_GET['name']) && isset($_GET['sow']) && isset($_GET['boar']) && isset($_GET['fattener']) && isset($_GET['piglet']) && isset($_GET['native']) && isset($_GET['latitude']) && isset($_GET['longitude']) && isset($_GET['sanitation']) && isset($_GET['municipality_code']) && isset($_GET['barangay']) && isset($_GET['municipality']) && isset($_GET['discharge'])) {
    // Assuming the table name is 'pig_farms'
    $name = mysqli_real_escape_string($con, $_GET['name']);
    $sow = intval($_GET['sow']);
    $boar = intval($_GET['boar']);
    $fattener = intval($_GET['fattener']);
    $piglet = intval($_GET['piglet']);
    $native = intval($_GET['native']);
    $latitude = floatval($_GET['latitude']);
    $longitude = floatval($_GET['longitude']);
    $sanitation = mysqli_real_escape_string($con, $_GET['sanitation']); // Sanitation is varchar, so we escape it as string
    $municipality_code = mysqli_real_escape_string($con, $_GET['municipality_code']); 
    $barangay = mysqli_real_escape_string($con, $_GET['barangay']);
    $municipality = mysqli_real_escape_string($con, $_GET['municipality']);
    $discharge = intval($_GET['discharge']); 

    // Prepare and bind parameters for the query
    $sql = "INSERT INTO piggeries (farm_name, sow_count, boar_count, fattener_count, piglet_count, native_count, latitude, longitude, sanitation, municipality_code, barangay, municipality, discharge)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, "siiiiiddssssi", $name, $sow, $boar, $fattener, $piglet, $native, $latitude, $longitude, $sanitation,  $municipality_code, $barangay, $municipality, $discharge); // Use 's' for sanitation as it's a varchar

    // Execute the query
    if (mysqli_stmt_execute($stmt)) {
        $response['status'] = 'success';
        $response['message'] = 'Data inserted successfully';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Error inserting data: ' . mysqli_error($con);
    }

    // Close the statement
    mysqli_stmt_close($stmt);
} else {
    $response['status'] = 'error';
    $response['message'] = 'Invalid or missing parameters';
}

header("Content-Type: application/json");
echo json_encode($response);
?>
