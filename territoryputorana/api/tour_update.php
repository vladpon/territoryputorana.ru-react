<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require_once '../../const/const.php';
require_once 'auth.php';


global $DBNAME;
global $DBPASS;
global $DBHOST;
global $USERSDBPASS;

global $answer;

if (online()) {
    $data = json_decode(file_get_contents("php://input"), true);

    $main = array(
        'title' => $data['title'],
        'season' => $data['season'],
        'yearTime' => $data['yearTime'],
        'time' => $data['time'],
        'groupSize' => $data['groupSize'],
        'accmdtnShort' => $data['accmdtnShort'],
        'difficultyLevel' => $data['difficultyLevel'],
        'price' => $data['price'],
        'bigImg' => $data['bigImg'],
        'smallImg' => $data['smallImg'],
        'optImg' => $data['optImg'],
        'href' => $data['href'],
        'aboutH3' => $data['aboutH3'],
        'tourId' => $data['tourId'],
        'reference' => $data['reference'],
        'id' => $data['id']
    );

    $descriptions = $data['descriptions'];



    $pdo = new PDO(
        'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
        $DBNAME,
        $DBPASS
    );

    $sqlStr = 'UPDATE tours SET 
                    title = :title,
                    season = :season,
                    year_time = :yearTime,
                    time = :time,
                    group_size = :groupSize, 
                    accmdtn_short = :accmdtnShort, 
                    difficulty_level = :difficultyLevel,
                    price = :price,
                    big_img = :bigImg,
                    small_img = :smallImg,
                    opt_img = :optImg,
                    href = :href,
                    about_h3 = :aboutH3,
                    tour_id = :tourId,
                    reference = :reference 
                WHERE id = :id;';

    $stmt = $pdo->prepare($sqlStr);
    $state = $stmt->execute($main);


    var_dump($descriptions);

    if($state)
    {
        $answer['main tour data'] = 'updated successfully';
    } else $answer['main tour data'] = 'update failed';

    $descriptionsSqlStr = 'UPDATE descriptions SET paragraph = :p WHERE tour_id = :tourId AND id = :index;';
    $descStmp = $pdo-> prepare($descriptionsSqlStr);

    if(is_array($descriptions)){
        foreach($descriptions as $index => $desc){
            $descState = $descStmp->execute(array('p' => $desc, 'tourId' => $data['id'], 'index' => $index + 1));
            if($descState)
                {
                    $answer['description ' . $index] = 'updated successfully';
                } else $answer['description ' . $index] = 'update failed';
        }    
    }
    


    // $res = $stmt->fetchAll(PDO::FETCH_ASSOC);


    echo json_encode($answer);
    
}

else echo json_encode(array('login' => 'failed'));