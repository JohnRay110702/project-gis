<?php
session_start();
include('database.php');

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tributary = $_POST['tributary'];
    $gauge_id = $_POST['gauge_id']; 
    $volume = $_POST['volume'];

    // Insert new record
    $sql = "INSERT INTO rain_g (tributary, gauge_id, volume) 
            VALUES ('$tributary','$gauge_id', '$volume')";

    if ($con->query($sql) === TRUE) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }
}else {
    echo "Database connection failed";
}

$con->close();
?>
