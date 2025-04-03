<?php
session_start();
include('database.php');

$response = array();

if ($con && isset($_GET['name']) && isset($_GET['sow']) && isset($_GET['boar']) && isset($_GET['fattener']) && isset($_GET['piglet']) && isset($_GET['native']) && isset($_GET['latitude']) && isset($_GET['longitude']) && isset($_GET['sanitation']) && isset($_GET['municipality_code']) && isset($_GET['barangay']) && isset($_GET['municipality']) && isset($_GET['discharge'])) {

    $name = mysqli_real_escape_string($con, $_GET['name']);
    $sow = intval($_GET['sow']);
    $boar = intval($_GET['boar']);
    $fattener = intval($_GET['fattener']);
    $piglet = intval($_GET['piglet']);
    $native = intval($_GET['native']);
    $latitude = floatval($_GET['latitude']);
    $longitude = floatval($_GET['longitude']);
    $sanitation = mysqli_real_escape_string($con, $_GET['sanitation']);
    $municipality_code = mysqli_real_escape_string($con, $_GET['municipality_code']);
    $barangay = mysqli_real_escape_string($con, $_GET['barangay']);
    $municipality = mysqli_real_escape_string($con, $_GET['municipality']);
    $discharge = intval($_GET['discharge']);

    // 🔹 Step 1: Get the Last `resident_id`
    $query = "SELECT resident_id FROM piggeries WHERE resident_id LIKE 'Resident %' ORDER BY CAST(SUBSTRING(resident_id, 9) AS UNSIGNED) DESC LIMIT 1";
    $result = mysqli_query($con, $query);
    $row = mysqli_fetch_assoc($result);

    if ($row) {
        $last_id = intval(substr($row['resident_id'], 9)); // Extract number from "Resident XXX"
        $new_id = "Resident " . str_pad($last_id + 1, 3, "0", STR_PAD_LEFT); // Increment & format
    } else {
        $new_id = "Resident 255"; // First entry
    }

    // 🔹 Step 2: Insert the Data, Including `resident_id`
    $sql = "INSERT INTO piggeries (resident_id, farm_name, sow_count, boar_count, fattener_count, piglet_count, native_count, latitude, longitude, sanitation, municipality_code, barangay, municipality, discharge)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, "ssiiiiiddssssi", $new_id, $name, $sow, $boar, $fattener, $piglet, $native, $latitude, $longitude, $sanitation,  $municipality_code, $barangay, $municipality, $discharge);

    if (mysqli_stmt_execute($stmt)) {
        $response['status'] = 'success';
        $response['message'] = 'Data inserted successfully';
        $response['resident_id'] = $new_id; // Return new ID
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Error inserting data: ' . mysqli_error($con);
    }

    mysqli_stmt_close($stmt);
} else {
    $response['status'] = 'error';
    $response['message'] = 'Invalid or missing parameters';
}

header("Content-Type: application/json");
echo json_encode($response);
?>
