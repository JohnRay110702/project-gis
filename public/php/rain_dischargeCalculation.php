<?php
session_start();
include('database.php');

header("Content-Type: application/json");

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['tributary'])) { 
    $tributary = $_GET['tributary'];

    // Fetch the latest timestamp for the given tributary
    $sql = "SELECT volume, timestamp 
            FROM rain_g 
            WHERE tributary = ? 
            ORDER BY timestamp DESC 
            LIMIT 1";

    $stmt = $con->prepare($sql);
    $stmt->bind_param("s", $tributary);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $row = $result->fetch_assoc()) {
        $latestTimestamp = strtotime($row['timestamp']);
        $today = strtotime(date('Y-m-d'));

        if ($latestTimestamp >= $today) {
            $response['volume'] = floatval($row['volume']);

        } else {
            $response['volume'] = 0; // No recent rainfall data
        }
    } else {
        $response['volume'] = 0;
    }

    echo json_encode($response);
} else {
    $response['error'] = "Invalid request or missing tributary name";
    echo json_encode($response);
}

$con->close();
?>
