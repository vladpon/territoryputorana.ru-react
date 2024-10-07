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

function firstLevelNesting($item) {
    return !is_array($item);
}


if (online()) {
 
    // TOTAL 6 TABLES
    //
    //  tours; descriptions; abouts; tours_photos; programs_days; days_descriptions;
    // 



    $data = json_decode(file_get_contents("php://input"), true);

    // $toursArr = array_filter($data, "firstLevelNesting");
    // var_dump($toursArr);
    // $descriptionsArr = $data["description"];

    $tour_id = $data['tourId'];

    $main = [];
    $main['tour_id'] = $data['tourId'];
    $main['title'] = $data['title'];
    $main['price'] = $data['price'];
    $main['var_price'] = $data['varPrice'];
    $main['season'] = $data['season'];
    $main['time'] = $data['time'];
    $main['reference'] = $data['reference'];
    $main['var_reference'] = $data['varReference'];
    $main['included'] = $data['included'];
    $main['var_included'] = $data['varIncluded'];
    $main['big_img'] = $data['bigImg'];
    $main['small_img'] = $data['smallImg'];
    $main['href'] = $data['href'];
    $main['details'] = $data['details'];
    $main['var_details'] = $data['varDetails'];
    $main['details_title'] = $data['detailsTitle'];
    $main['var_detailstitle'] = $data['varDetailsTitle'];
    $main['about_title'] = $data['aboutTitle'];
    $main['clothes'] = $data['clothes'];
    $main['program_title'] = $data['tourProgram']['programTitle'];
    $main['program_subtitle'] = $data['tourProgram']['programSubtitle'];
    $main['program_preface'] = $data['tourProgram']['programPreface'];

    

    $descriptions = $data['description'];

    $abouts = $data['about'];

    $toursPhotos = $data['tourPhoto'];

    $programDays = [];
    $daysDescriptions = [];
    foreach($data['tourProgram']['days'] as $index => $day){
        $programDays[$index]['day_title'] = $day['dayTitle'];
        $programDays[$index]['day_img'] = $day['dayImg'];

        $daysDescriptions[$index] = $day['dayDesc'];
    }







    $pdo = new PDO(
        'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
        $DBNAME,
        $DBPASS
    );


    //////////SQL STRINGS///////////
    $sqlMainStr = 'UPDATE tours SET 
                    title = :title,
                    price = :price,
                    var_price = :var_price,
                    season = :season,
                    time = :time,
                    reference = :reference,
                    var_reference = :var_reference,
                    included = :included,
                    var_included = :var_included,
                    big_img = :big_img,
                    small_img = :small_img,
                    href = :href,
                    details = :details,
                    var_details = :var_details,
                    details_title = :details_title,
                    var_detailstitle = :var_detailstitle,
                    about_title = :about_title,
                    clothes = :clothes,
                    program_title = :program_title,
                    program_subtitle = :program_subtitle,
                    program_preface = :program_preface
                WHERE tour_id = :tour_id;';





    $sqlDescriptionStr = 'UPDATE descriptions SET
                            paragraph = ?
                            WHERE tour_id = ? AND id = ?;';

    $stmt = $pdo->prepare($sqlDescriptionStr);

    foreach($descriptions as $id => $p){
        $state = $stmt->execute(array($p, $tour_id, $id));
    }
        




    // $stmt = $pdo->prepare($sqlMainStr);
    // $state = $stmt->execute($main);








/*
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

*/
    
}

else echo json_encode(array('login' => 'failed'));