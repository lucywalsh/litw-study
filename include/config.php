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
    print "Failed to connect to Database: " . mysqli_error();
    die('connect() failed: ');
}
//echo "Connected successfully";

/**
 * LITW: Related to LOAD and prepare SUMMARY data.
 **/

/* How many seconds old should SUMMARY.JSON be to trigger an update */
/* ALERT: Avoid making this too low to avoid too many DB operations */
define('LITW_SUMMARY_DEADLINE', 300); //86400 every day; 3600 every hour
/* What JSON key should be searched to retrieve DB data to produce the summary*/
define('LITW_SUMMARY_JSONKEY', 'country');
?>
