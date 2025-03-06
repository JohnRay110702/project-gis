<?php 
session_start();
include('database.php');

$response = [];

if ($con) {
    // Modified SQL query to join piggeries and get total pig counts
    $sql = "SELECT 
                c.municipality, 
                c.barangay, 
                c.latitude, 
                c.longitude, 
                c.municipality_code,
                COALESCE(SUM(p.sow_count), 0) AS total_sow,
                COALESCE(SUM(p.boar_count), 0) AS total_boar,
                COALESCE(SUM(p.fattener_count), 0) AS total_fattener,
                COALESCE(SUM(p.piglet_count), 0) AS total_piglet,
                COALESCE(SUM(p.native_count), 0) AS total_native
            FROM coordinates_barangay_halls c
            LEFT JOIN piggeries p 
            ON c.municipality = p.municipality AND c.barangay = p.barangay
            GROUP BY c.municipality, c.barangay, c.latitude, c.longitude, c.municipality_code";

    $result = mysqli_query($con, $sql);

    if ($result) {
        header("Content-Type: application/json");
        
        while ($row = mysqli_fetch_assoc($result)) {
            $response[] = [
                'municipality' => $row['municipality'],
                'barangay' => $row['barangay'],
                'latitude' => $row['latitude'],
                'longitude' => $row['longitude'],
                'municipality_code' => $row['municipality_code'],
                'total_sow' => $row['total_sow'],
                'total_boar' => $row['total_boar'],
                'total_fattener' => $row['total_fattener'],
                'total_piglet' => $row['total_piglet'],
                'total_native' => $row['total_native']
            ];
        }
        
        echo json_encode($response, JSON_PRETTY_PRINT);
    } else {
        echo json_encode(["error" => "Query failed"]);
    }
} else {
    echo json_encode(["error" => "Database connection failed"]);
}
?>
