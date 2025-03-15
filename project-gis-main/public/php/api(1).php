<?php 
  session_start();
  include('database.php');

  $response=array();
  if ($con) {
    $sql = "SELECT * from coordinates_barangay_halls";
    $result = mysqli_query($con, $sql);
    if ($result){
        header("Content-Type: JSON");
        $i = 0; // Make sure to initialize $i before you use it
        while ($row = mysqli_fetch_assoc($result)) {
            $response[$i]['municipality'] = $row['municipality'];
            $response[$i]['barangay'] = $row['barangay'];
            $response[$i]['latitude'] = $row['latitude'];
            $response[$i]['longitude'] = $row['longitude'];
            $response[$i]['municipality_code'] = $row['municipality_code'];

            $i++;
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}

else{
    echo "Database connection failed";
}

