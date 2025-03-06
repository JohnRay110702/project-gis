<?php
// Include database connection
include('database.php');

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Fetch data from the pig_farms table
    $sql = "SELECT * FROM piggeries WHERE municipality_code = 'ADMI'";
    $stmt = $con->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if there are no markers
    if ($result->num_rows == 0) {
        echo json_encode(array('error' => 'No markers found'));
        exit;
    }

    // Process marker data
    $response = array();
    while ($row = $result->fetch_assoc()) {
        $response[] = array(
            'resident_id' => $row['resident_id'],
            'sow_count' => $row['sow_count'],
            'boar_count' => $row['boar_count'],
            'fattener_count' => $row['fattener_count'],
            'piglet_count' => $row['piglet_count'],
            'native_count' => $row['native_count'],
            'sanitation' => $row['sanitation'], // Include sanitation field
            'latitude' => $row['latitude'],
            'longitude' => $row['longitude'],
            'municipality_code' => $row['municipality_code'],
            'discharge' => $row['discharge']
        );
    }

    // Output marker data
    header("Content-Type: application/json");
    echo json_encode($response, JSON_PRETTY_PRINT);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') { // Check if the request method is DELETE
    // Get the farm name from the request body
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['resident_id'])) {
        // Prepare and execute the SQL DELETE statement
        $farmName = $data['resident_id'];
        $stmt = $con->prepare("DELETE FROM piggeries WHERE resident_id=?");
        $stmt->bind_param('s', $resident_id);
        if ($stmt->execute()) {
            // Return success message
            echo json_encode(array('message' => 'Data deleted successfully'));
        } else {
            // Return error message
            echo json_encode(array('error' => 'Failed to delete data: ' . $con->error));
        }
    } else {
        // Return error if farm name is not provided
        echo json_encode(array('error' => 'Resident id not provided'));
    }
} else {
    // Return error if method is not GET or DELETE
    echo json_encode(array('error' => 'Invalid request method'));
}
?>
