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

    

    // $daysDescriptions = [];
    // foreach($data['tourProgram']['days'] as $index => $day){
    //     $programDays[$index]['day_title'] = $day['dayTitle'];
    //     $programDays[$index]['day_img'] = $day['dayImg'];

    //     $daysDescriptions[$index] = $day['dayDesc'];
    // }







    $pdo = new PDO(
        'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
        $DBNAME,
        $DBPASS
    );


    ///////////MAIN SQL STRING///////////
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

    ////////MAIN TABLE PUSH//////////
    $stmt = $pdo->prepare($sqlMainStr);
    $state = $stmt->execute($main);
    if($state) {
        $answer['dbMainTableUpdate'] = 'success';
    }
    else $answer['dbMainTableUpdate'] = 'FAILED';



    ////////DESCRIPTION TABLE UPDATE///////////
    $sqlDescriptionStr = 'INSERT INTO descriptions(tour_id, id, paragraph) VALUES (:tour_id, :id, :p) ON DUPLICATE KEY UPDATE paragraph = :p;';
    
    $stmt = $pdo->prepare('DELETE FROM descriptions WHERE tour_id = ?');
    $stmt->execute(array($tour_id));
    if($state) {
        $answer['dbDescriptionsTableDelete'] = 'success';
        $stmt = $pdo->prepare($sqlDescriptionStr);
        foreach($descriptions as $id => $p){
            $state = $stmt->execute(array('tour_id' => $tour_id,
                                            'id' => $id,
                                            'p' => $p));
        }
        if($state) {
            $answer['dbDescriptionTableCreate'] = 'success';
        }
        else $answer['dbDescriptionTableCreate'] = 'FAILED';
    }
    else $answer['dbDescriptionsTableDelete'] = 'FAILED';

    
    //////////////ABOUTS TABLE UPDATE//////////////
    $sqlAboutStr = 'INSERT INTO abouts(tour_id, id, paragraph) VALUES (:tour_id, :id, :p) ON DUPLICATE KEY UPDATE paragraph = :p;';
    
    $stmt = $pdo->prepare('DELETE FROM abouts WHERE tour_id = ?');
    $stmt->execute(array($tour_id));
    if($state) {
        $answer['dbAboutsTableDelete'] = 'success';
        $stmt = $pdo->prepare($sqlAboutStr);
        foreach($abouts as $id => $p){
            $state = $stmt->execute(array('tour_id' => $tour_id,
                                            'id' => $id,
                                            'p' => $p));
        }
        if($state) {
            $answer['dbAboutTableCreate'] = 'success';
        }
        else $answer['dbAboutTableCreate'] = 'FAILED';
    }
    else $answer['dbAboutTableDelete'] = 'FAILED';



    ///////////TOURS_PHOTOS TABLE UPDATE////////////
    $sqlPhotoStr = 'INSERT INTO tours_photos(tour_id, id, path, alt) VALUES (:tour_id, :id, :path, :alt)';
    
    $stmt = $pdo->prepare('DELETE FROM tours_photos WHERE tour_id = ?');
    $stmt->execute(array($tour_id));
    if($state) {
        $answer['dbPhotoTableDelete'] = 'success';
        $stmt = $pdo->prepare($sqlPhotoStr);
        foreach($toursPhotos as $id => $photo){
            $state = $stmt->execute(array('tour_id' => $tour_id,
                                            'id' => $id,
                                            'path' => $photo['path'],
                                            'alt' => $photo['alt']));
        }
        if($state) {
            $answer['dbPhotoTableCreate'] = 'success';
        }
        else $answer['dbPhotoTableCreate'] = 'FAILED';
    }
    else $answer['dbPhotoTableDelete'] = 'FAILED';






    //////////PROGRAMS_DAYS  DAYS_DESCRIPTIONS TABLES UPDATE//////////
    
    if(isset($data['tourProgram']['days']))
    {
        $programDays = $data['tourProgram']['days'];
        $sqlProgramStr = 'INSERT INTO programs_days(tour_id, id, day_title, day_img) VALUES (:tour_id, :id, :dayTitle, :dayImg)';
        $sqlDayDescStr = 'INSERT INTO days_descriptions(tour_id, day_id, id, paragraph) VALUES (:tour_id, :day_id, :id, :p)';
        
        $stmt = $pdo->prepare('DELETE FROM days_descriptions WHERE tour_id = ?');
        $stmt->execute(array($tour_id));
        if($state) {
            $answer['dbDaysDescriptionsTableDelete'] = 'success';
            $stmt = $pdo->prepare('DELETE FROM programs_days WHERE tour_id = ?');
            $stmt->execute(array($tour_id));
            if($state) {
                $answer['dbProgramTableDelete'] = 'success';
                $stmt = $pdo->prepare($sqlProgramStr);
                foreach($programDays as $day => $program){
                    $state = $stmt->execute(array('tour_id' => $tour_id,
                                                    'id' => $day,
                                                    'dayTitle' => $program['dayTitle'],
                                                    'dayImg' => $program['dayImg']));
                    foreach($program['dayDesc'] as $id => $desc){
                        $dstmt = $pdo->prepare($sqlDayDescStr);
                        $dstate = $dstmt->execute(array('tour_id' => $tour_id,
                                                            'day_id' => $day,
                                                            'id' => $id,
                                                            'p' => $desc));
                    }
                }
                if($state) {
                    $answer['dbProgramTableCreate'] = 'success';
                }
                else $answer['dbProgramTableCreate'] = 'FAILED';
            } 
            else $answer['dbProgramTableCreate'] = 'FAILED';
        }
        else $answer['dbDaysDescriptionsTableDelete'] = 'FAILED';
    }

    echo json_encode($answer);


    
}

else echo json_encode(array('login' => 'failed'));