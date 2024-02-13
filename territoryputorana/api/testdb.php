<?php
require_once '../../const/const.php';
require_once 'auth.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

global $DBNAME;
global $DBPASS;
global $DBHOST;
global $USERSDBPASS;

global $answer;

phpinfo();

function arrCB($item) {
    return !is_array($item);
}



$data = json_decode(file_get_contents("php://input"), true);

$toursArr = array_filter($data, "arrCB"); 

$descriptionsArr = $data["description"];

var_dump($descriptionsArr);


// var_dump($data);

// echo json_encode($data);