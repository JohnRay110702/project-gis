<?php
header("Content-Type: application/json"); // Return JSON format

$apiKey = "73e7b15a19439a739559b0bf8a3aff43"; // Replace with your actual API key

// Latitude & Longitude of municipalities around Taal Lake
$municipalities = [
    "San Nicolas" => ["lat" => 13.929224, "lon" => 120.952112],
    "Agoncillo" => ["lat" => 13.934862, "lon" => 120.928213],
    "Laurel" => ["lat" => 14.050762, "lon" => 120.933062],
    "Tanauan" => ["lat" => 14.113703, "lon" => 121.088483],
    "MataasNaKahoy" => ["lat" => 13.959730, "lon" => 121.114523],
    "Balete" => ["lat" => 14.017839, "lon" => 121.096734],
    "Talisay" => ["lat" => 14.092808, "lon" => 121.021273],
    "Cuenca" => ["lat" => 13.864640, "lon" => 121.055662],
    "Santa Teresita" => ["lat" => 13.870274, "lon" => 120.976334]
];

$cacheFile = "weather_cache.json";
$cacheTime = 1800; // 30 minutes (1800 seconds)


$weatherData = [];
foreach ($municipalities as $municipality => $coords) {
    // OpenWeatherMap API request using lat/lon
    $apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={$coords['lat']}&lon={$coords['lon']}&appid={$apiKey}&units=metric";
    
    $response = @file_get_contents($apiUrl); // Fetch data
    if ($response === false) {
        $weatherData[$municipality] = ["error" => "API request failed"];
        continue;
    }

    $data = json_decode($response, true);
    if (!isset($data["main"]["temp"])) {
        $weatherData[$municipality] = ["error" => "No temperature data"];
        continue;
    }

    // Store weather details
    $weatherData[$municipality] = [
        "temperature" => number_format($data["main"]["temp"], 2) . "°C",
        "wind_speed" => isset($data["wind"]["speed"]) ? number_format($data["wind"]["speed"], 2) . " m/s" : "N/A",
        "wind_direction" => isset($data["wind"]["deg"]) ? $data["wind"]["deg"] . "°" : "N/A",
        "weather_text" => ucfirst($data["weather"][0]["description"])
    ];
}

    // // Save to cache
    // file_put_contents($cacheFile, json_encode($weatherData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));


// Return JSON response
echo json_encode($weatherData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

?>
