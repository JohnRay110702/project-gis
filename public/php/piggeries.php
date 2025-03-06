<?php 
  session_start();
  include('database.php');

  $response=array();
  if ($con) {
    $sql = "SELECT * from piggeries";
    $result = mysqli_query($con, $sql);
    if ($result){
        header("Content-Type: JSON");
        $i = 0; // Make sure to initialize $i before you use it
        while ($row = mysqli_fetch_assoc($result)) {
            $response[$i]['resident_id'] = $row['resident_id'];
            $response[$i]['municipality'] = $row['municipality'];
            $response[$i]['barangay'] = $row['barangay'];
            $response[$i]['municipality_code'] = $row['municipality_code'];
            $response[$i]['farm_name'] = $row['farm_name'];
            $response[$i]['sow_count'] = $row['sow_count'];
            $response[$i]['boar_count'] = $row['boar_count'];
            $response[$i]['fattener_count'] = $row['fattener_count'];
            $response[$i]['piglet_count'] = $row['piglet_count'];
            $response[$i]['native_count'] = $row['native_count'];
            $response[$i]['latitude'] = $row['latitude'];
            $response[$i]['longitude'] = $row['longitude'];
            $response[$i]['sanitation'] = $row['sanitation'];
            $response[$i]['discharge'] = $row['discharge'];

            $i++;
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}

else{
    echo "Database connection failed";
}



