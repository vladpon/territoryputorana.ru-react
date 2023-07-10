<?php

require_once '../../const/const.php';


if(isset($_GET['getTour']))
    {
        echo 'getTour';
    }
    else
    {
        echo 'other request';
    }



// $sqlStr = $_POST['sqlStr'];
// //var_dump($_POST);

// global $DBNAME;
// global $DBPASS;

// $pdo = new PDO(
//     'mysql:host=lysovanton.beget.tech:3306;dbname=' . $DBNAME,
//     $DBNAME,
//     $DBPASS);


//     $stmt = $pdo->prepare($sqlStr);
//     $state = $stmt->execute();
//     $req = $stmt->fetchAll(PDO::FETCH_ASSOC);


//     var_dump($req);