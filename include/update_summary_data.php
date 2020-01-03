<?php

function update_summary() {
	//get all data from the database and store it in db_data.json
	include 'get_data.php';
	//find the relevant info from db_data.json and store it in summary.json
	include 'summary_data.php';
}

require_once("config.php");

$filename = 'summary.json';

//if summary.json is older than 1 day, update it
if (file_exists($filename)) {
	//How long ago was this file created?
	$sec_of_change = (time() - filemtime($filename));
    if ($sec_of_change > LITW_SUMMARY_DEADLINE) {
    	update_summary();
    }
} else {
	update_summary();
}

?>
