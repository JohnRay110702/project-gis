<?php
session_start();
header('Content-Type: application/json');
include('database.php'); 

$response = array();

// Check database connection
if ($con->connect_error) {
    echo json_encode(["error" => "Database connection failed: " . $con->connect_error]);
    exit;
}

// Check if municipality is received
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['municipality'])) {
    $municipality = $_GET['municipality'];

    // Debugging output
    error_log("Received municipality: " . $municipality);

    $sql = "SELECT tributary FROM tributaries WHERE municipality = ?";
    $stmt = $con->prepare($sql);

    if (!$stmt) {
        echo json_encode(["error" => "SQL Prepare failed: " . $con->error]);
        exit;
    }

    $stmt->bind_param("s", $municipality);
    $stmt->execute();
    $result = $stmt->get_result();

    if (!$result) {
        echo json_encode(["error" => "SQL Query failed: " . $stmt->error]);
        exit;
    }

    $tributaries = [];
    while ($row = $result->fetch_assoc()) {
        $tributaries[] = $row['tributary'];
    }

    // Return as JSON
    echo json_encode($tributaries);
} else {
    echo json_encode(["error" => "No municipality provided"]);
}

$con->close();
?>
