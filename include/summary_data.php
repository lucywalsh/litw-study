<?php

function summary($json_data) {
	$data = json_decode($json_data,true);
	$countries = array();
	foreach ($data as $arr) {
		foreach($arr as $key => $value){
			// change this to get data about other participants for use in the results page
			if($key == 'country0'){
				$countries[$value] = true;
			}
		}
	}
	$summary = array('country_number'=>sizeof($countries),'countries'=>array_keys($countries));
	return json_encode($summary);
}

//READ db_data.json
$json_data = file_get_contents("db_data.json");

//PROCESS DATA
$json_summary = summary($json_data);

//SAVE summary.json
$f_summary = fopen('../summary.json', 'w');
fwrite($f_summary, $json_summary);
fclose($f_summary);
?>
