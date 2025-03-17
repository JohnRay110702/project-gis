<?php
session_start();
include('database.php'); 

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (!isset($_GET['tributary'])) {
        $response['error'] = "Missing tributary parameter.";
        echo json_encode($response);
        exit;
    }

    $tributary = $_GET['tributary'];

    // Fetch rain data for the selected tributary
    $sql = "SELECT timestamp, volume FROM rain_g WHERE tributary = ? ORDER BY timestamp ASC";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("s", $tributary);
    $stmt->execute();
    $result = $stmt->get_result();

    $rain_data = array();
    while ($row = $result->fetch_assoc()) {
        $rain_data[] = $row;
    }

    // Return the fetched data as JSON
    $response['rain_data'] = $rain_data;
    echo json_encode($response);
}
?>
