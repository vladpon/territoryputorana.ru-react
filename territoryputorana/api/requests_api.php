<?php

require_once '../../const/const.php';



if(isset($_POST['new-request'])){
    if(isset($_POST['request-page'])){
        $requestPage = $_POST['request-page'];
    }
    else{
        echo json_encode(array('err' => 'no req_page arg'));
        return;
    }

    if(isset($_POST['client-name'])){
        $clientName = $_POST['client-name'];
    }
    else{
        echo json_encode(array('err' => 'no client_name arg'));
        return;
    }

    if(isset($_POST['client-email'])){
        $clientEmail = $_POST['client-email'];
    }else{
        echo json_encode(array('err' => 'no client_email arg'));
        return;
    }

    if(isset($_POST['client-tel'])){
        $clientTel = $_POST['client-tel'];
    }else{
        echo json_encode(array('err' => 'no client_tel arg'));
        return;
    }

    if(isset($_POST['select-value'])){
        $selectValue = $_POST['select-value'];
    }else{
        echo json_encode(array('err' => 'no select_value arg'));
        return;
    }

    if(isset($_POST['members-count'])){
        $membersCount = $_POST['members-count'];
    }else{
        echo json_encode(array('err' => 'no members_count arg'));
        return;
    }

    if(isset($_POST['aux-text'])){
        $auxText = $_POST['aux-text'];
    }else{
        echo json_encode(array('err' => 'no aux_text arg'));
        return;
    }

    $clientIp = $_SERVER['REMOTE_ADDR'];
    $clientUserAgent = $_SERVER['HTTP_USER_AGENT'];


    $sqlStr = 'INSERT requests(request_page, client_name, client_email, client_tel, select_value, members_count, aux_text, client_ip, client_user_agent) 
                VALUES("' . $requestPage . '", "' . $clientName . '", "' . $clientEmail . '", "' . $clientTel . '", "' . $selectValue . '", ' . $membersCount . ', "' . $auxText  
                . '", "' . $clientIp . '", "' . $clientUserAgent . '");';

    global $DBNAME;
    global $DBPASS;

	try {
    		$pdo = new PDO(
        		'mysql:host=localhost:3306;dbname=' . $DBNAME,
        		$DBNAME,
        		$DBPASS
		);
		
		$stmt = $pdo->prepare($sqlStr);
    	$state = $stmt->execute();
    	$res = $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	catch (Exception $e) {
		echo $e->getMessage();
	}


    echo json_encode($res);
    }