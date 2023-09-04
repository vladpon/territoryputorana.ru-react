<?php


require_once '../../const/const.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

global $DBNAME;
global $DBPASS;
global $DBHOST;

// global $answer;




$pdo = new PDO(
        'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
        $DBNAME,
        $DBPASS
    );
		
    $sqlStr = 'SELECT id, cat_name AS catName FROM gallery_categories';
    $stmt = $pdo->prepare($sqlStr);
    $state = $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            
 echo json_encode($res, JSON_UNESCAPED_UNICODE);
