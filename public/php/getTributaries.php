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

// Check if user is provided
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['user'])) {
    $user = $_GET['user'];

    // Debugging output
    error_log("Received user: " . $user);

    // Fetch tributary and municipality_name for the given user
    $sql = "SELECT tributary, municipality_name FROM tributaries WHERE user = ?";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("s", $user);
    $stmt->execute();
    $result = $stmt->get_result();

    if (!$result) {
        echo json_encode(["error" => "SQL Query failed: " . $stmt->error]);
        exit;
    }

    $tributaryList = [];
    while ($row = $result->fetch_assoc()) {
        $tributaryList[] = [
            "tributary" => $row['tributary'],
            "municipality" => $row['municipality_name']
        ];
    }

    // Return as JSON
    echo json_encode($tributaryList);
} else {
    echo json_encode(["error" => "No user provided"]);
}

$con->close();
?>