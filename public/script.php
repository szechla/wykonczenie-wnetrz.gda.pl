<?php
// -------------------------------------
// GET EVERY SERVICE IMAGE ELEMENT ARRAY
// -------------------------------------
$dir1 = '/images/services';
$services = array_slice(scandir($dir1), 2);

$dir2 = '/images/portfolio/';
$portfolio = array_slice(scandir($dir2), 2);


$portfolio = array_map(function($e){
    return pathinfo($e, PATHINFO_FILENAME);
}, $portfolio);

$services = array_map(function($e){
    return pathinfo($e, PATHINFO_FILENAME);
}, $services);


for ($x = 0; $x <= 5; $x++) {        
    // echo "Element: ".$portfolio[$x]."<br>";
    // $dir = '/images/portfolio/'.$portfolio[$x];
    // $portfolio[$x] = array_slice(scandir($dir), 2);
    // echo $portfolio[$x]."<br>";
  };


$servicesJSON = json_encode($services);
$portfolioJSON = json_encode($portfolio);

echo $servicesJSON;
// echo $portfolioJSON;


?>