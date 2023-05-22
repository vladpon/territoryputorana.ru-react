<?php

// require_once '../../const/const.php';

$sqlStr = $_POST['sqlStr'];
var_dump($_POST);

$pdo = new PDO(
    'mysql:host=lysovanton.beget.tech:3306;dbname=lysovanton_tours',
    'lysovanton_tours',
    'pjoe6qU&');


    $stmt = $pdo->prepare($sqlStr);
    $state = $stmt->execute();
    $req = $stmt->fetchAll(PDO::FETCH_ASSOC);


    var_dump($req);