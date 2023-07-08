<?php

if (isset($_POST['new-request'])) {
    if(isset($_POST['request-page'])) $requestPage = $_POST['request-page'];
    if(isset($_POST['client-name'])) $clientName = $_POST['client-name'];
    if(isset($_POST['client-email'])) $clientEmail = $_POST['client-email'];
    if(isset($_POST['client-tel'])) $clientTel = $_POST['client-tel'];
    if(isset($_POST['select-value'])) $selectValue = $_POST['select-value'];
    if(isset($_POST['members-count'])) $membersCount = $_POST['members-count'];
    if(isset($_POST['aux-text'])) $auxText = $_POST['aux-text'];


    // var_dump($_POST);
    echo $requestPage . PHP_EOL;
    echo $clientName . PHP_EOL;
    echo $clientEmail . PHP_EOL;
    echo $clientTel . PHP_EOL;
    echo $selectValue . PHP_EOL;
    echo $membersCount . PHP_EOL;
    echo $auxText . PHP_EOL;
}