<?php

require_once '../../const/const.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
// header('Access-Control-Allow-Headers: token, Content-Type');

session_start();
$answer = [];


function online() {

    

    global $DBNAME;
    global $DBPASS;
    global $DBHOST;
    global $USERSDBPASS;

    global $answer;

    


    if(isset($_SESSION['id'])) {
        $answer['status'] = '$_SESSION id is set';
        return true;
    }
    elseif(isset($_POST['login'], $_POST['password']) || isset($_COOKIE['login'], $_COOKIE['password'])){
        if(isset($_POST['login']) && isset($_POST['password'])) {
            $login = $_POST['login'];
            $password = md5(md5($_POST['password']));
            $answer['status'] = '$_POST login and passwrd';
        }
        else {
            $login = $_COOKIE['login'];
            $password = $_COOKIE['password'];
            $answer['status'] = '$_COOKIE login and password';
        }

        $pdo = new PDO(
            'mysql:host=' . $DBHOST . ':3306;dbname=lysovanton_users',
            'lysovanton_users',
            $USERSDBPASS
        );

        $sqlStr = 'SELECT user_password, user_id FROM users WHERE user_login = :login';
        
        $stmt = $pdo->prepare($sqlStr);
        $state = $stmt->execute(array('login' => $login));
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($res['user_password'] === $password) {
            $id = $res['user_id'];
            $_SESSION['id'] = $id;
            setcookie('login', $login, time() + 60);
            setcookie('password', ($password), time() + 60);
            $answer['succ'] = 'success login by passwrd';
            return true;
        } else {
            $answer['err'] = 'incorrect password';
            return false;
        }
    }
    else {
        $answer['status'] = 'no id no login and password';
        return false;
    }
}



if (isset($_POST['auth'])) {
    if(online()) {        
        $answer['login'] = 'success';
        echo json_encode($answer);
    }
    else  {
        $answer['login'] = 'failed';
        echo json_encode($answer);
    }
}
