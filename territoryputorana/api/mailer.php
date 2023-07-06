<?php

// Файлы phpmailer
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';
require './phpmailer/Exception.php';

$clientName = $_POST['name'];
$clientEmail = $_POST['email'];

// Формирование самого письма
$title = "Ответ на заявку со страницы «палаточный кемпинг»";
$body = '<p style="color: #454545; font-family: Arial, sans-serif; font-size: 22px;">Добрый день, ' . $clientName . '!</p></br><p style="color: #454545; font-family: Arial, sans-serif; font-size: 22px;">Мы получили Вашу заявку на на тур «Палаточный кемпинг на озере Лама» с сайта <a href="https://territoryputorana.ru">https://territoryputorana.ru</a><br>
	Обращаем Ваше внимание, что мы предлагаем туры для организованных групп от 8 человек. Индивидуальные туристы могут обратиться в <a href="https://vk.me/join/AJQ1dzHUWyd6n3fVNDLZEhKW"><b>чат</b></a> в ВК на станице наших партнеров «Лама-Тур» для поиска попутчиков. <br></p>
	<i style="color: #757575; font-family: Arial, sans-serif; font-size: 20px;">С уважением, Территория Путорана</i> <br>
	<img src="https://territoryputorana.ru/img/main_logo.jpg" width="160px" height="140px">';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.com'; // SMTP сервера вашей почты
    $mail->Username   = 'putoranatours@ya.ru'; // Логин на почте
    $mail->Password   = 'bcquaowopyftzabw'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('putoranatours@ya.ru', 'Территория Путорана'); // Адрес самой почты и имя отправителя

    // Получатель письма

    $mail->addAddress($clientEmail);

$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
//echo $mail->ErrorInfo;
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status, 'confirm'=>'success']);
// echo $answer;