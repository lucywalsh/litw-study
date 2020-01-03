<?php
/*************************************************************
 * config.php
 *
 * Contains PHP configuration variables for the experiment.
 *
 * Author: LITW Core Team
 * © Copyright 2018 LabintheWild
 *
 * For questions about this file and permission to use
 * the code, contact us at info@labinthewild.org
 *************************************************************/

define('DB_NAME', 'lwalsh');

define('DB_USER', 'lwalsh');

define('DB_PASS', 'L2019w');

define('DB_HOST', 'localhost');

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
mysqli_set_charset($conn, "utf8");

if ( !$conn ) {
    print "Failed to connect to Database: " . mysqli_connect_error();
    die('connect() failed: ');
}
else{
  //echo "Connected successfully";
}
/*
$sql = "CREATE TABLE `study_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` longtext DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1";

$sql = "SELECT data FROM study_data";
if($result = mysqli_query($conn, $sql)){
  echo "query successful";
  while ($row = mysqli_fetch_row($result)) {
    printf ("%s (%s)\n", $row[0], $row[1]);
  }
  mysqli_free_result($result);
}
else{
  echo "error" . mysqli_error($conn);
}
/**
 * LITW: Related to LOAD and prepare SUMMARY data.
 **/

/* How many seconds old should SUMMARY.JSON be to trigger an update */
/* ALERT: Avoid making this too low to avoid too many DB operations */
define('LITW_SUMMARY_DEADLINE', 0); //86400 every day; 3600 every hour

?>
