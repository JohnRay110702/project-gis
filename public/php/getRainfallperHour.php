<?php
session_start();
include('database.php');

header("Content-Type: application/json");

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['tributary'])) { 
    $tributary = $_GET['tributary'];

    // Fetch volume data and compute the total sum within the last 3 days
    $sql = "SELECT SUM(volume) AS total_volume 
            FROM rain_g 
            WHERE tributary = ? 
            AND timestamp >= NOW() - INTERVAL 1 HOUR";

    $stmt = $con->prepare($sql);
    $stmt->bind_param("s", $tributary);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    $response['total_volume'] = $row['total_volume'] !== null ? floatval($row['total_volume']) : 0;

    echo json_encode($response);
} else {
    $response['error'] = "Invalid request or missing tributary name";
    echo json_encode($response);
}

$con->close();
?>
