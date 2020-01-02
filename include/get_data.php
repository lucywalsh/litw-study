<?php

require_once("config.php");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
mysqli_set_charset($conn, "utf8");

if ( !$conn ) {
    print "Failed to connect to Database: " . mysqli_error();
    die('connect() failed: ');
}
//echo "Connected successfully";

$key = '$.'.$_GET['key'];
if(isset($_GET['date'])) {
    $date = $_GET['date'];
	$stmt = $conn->prepare("SELECT data FROM study_data WHERE timestamp > ?");
	$rc = $stmt->bind_param('ss', $date);
} else {
	$stmt = $conn->prepare("SELECT data FROM study_data");
}

if ( false===$rc ) {
    echo "Failed: " . mysqli_error($conn);
    die('bind_param() failed: ' . htmlspecialchars($stmt->error));
}

$rc = $stmt->execute();
if ( false===$rc ) {
    echo "Failed: " . mysqli_error($conn);
    die('execute() failed: ' . htmlspecialchars($stmt->error));
}

$stmt->store_result();
$stmt->bind_result($json_line);

$result = array();
while ($stmt->fetch()) {
    array_push($result, $json_line);
}

$stmt->close();

//$encoded = json_encode($result);
//header('Content-type: application/json');
//exit($encoded);
$dir = "data";
if(!file_exists($dir)){
  mkdir($dir, 0744);
  //print_r(error_get_last());
}

$f_data = file_put_contents($dir.'/db_data.json', $result);
if(false===$f_data){
  //echo "can't open file";
  //print_r(error_get_last());
}

?>
