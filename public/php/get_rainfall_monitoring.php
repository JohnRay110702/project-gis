<?php
session_start();
include('database.php'); 

header("Content-Type: application/json");

// Fetch all rainfall data ordered by timestamp (latest first)
$sql = "SELECT tributary, timestamp, volume AS rainfall_value FROM rain_g ORDER BY timestamp DESC";
$result = $con->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = [
            'tributary' => $row['tributary'],
            'timestamp' => $row['timestamp'],
            'rainfall_value' => $row['rainfall_value']
        ];
    }
    echo json_encode($data);
} else {
    echo json_encode([]);
}

$con->close();
?>
