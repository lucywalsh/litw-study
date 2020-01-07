<?php

require_once("config.php");

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
mysqli_set_charset($conn, "utf8");

if ( !$conn ) {
    print "Failed to connect to Database: " . mysqli_error();
    die('connect() failed: ');
}
//echo "Connected successfully";
$stmt = $conn->prepare("SELECT data FROM study_data");

/*
if ( false===$stmt ) {
    echo "Failed: " . mysqli_error($conn);
}
*/
$rc = $stmt->execute();

/*
if ( false===$rc ) {
    echo "Failed: " . mysqli_error($conn);
    die('execute() failed: ' . htmlspecialchars($stmt->error));
}
*/
$stmt->store_result();

$stmt->bind_result($json_line);

$result = array();
while ($stmt->fetch()) {
    array_push($result, $json_line);
}
$stmt->close();

$f_data = fopen('db_data.json', 'w');

if(false===$f_data){
  echo "can't open file";
  print_r(error_get_last());
}

fwrite($f_data,'[');
$i = 0;
$arrayLength=count($result)-1;
while($i<$arrayLength){
  fwrite($f_data, $result[$i].',');
  $i++;
}
fwrite($f_data,$result[$arrayLength]);
fwrite($f_data,']');
fclose($f_data);

?>
