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

function secondLevelNesting($item) {
    return array_filter($item, "firstLevelNesting");
}

function thirdLevelNestingArr($item) {
    return $item["dayDesc"];
}

if (online()) {


    $data = json_decode(file_get_contents("php://input"), true);

    $tourArr = array_filter($data, "firstLevelNesting");
    $tourArr["programTitle"] = $data["tourProgram"]["programTitle"];
    $tourArr["programSubtitle"] = $data["tourProgram"]["programSubtitle"];
    $tourArr["programPreface"] = $data["tourProgram"]["programPreface"];

    $descriptionArr = $data["description"];

    $aboutArr = $data["about"];

    $tourPhotoArr = $data["tourPhoto"];

    $programDays = array_map("secondLevelNesting", $data["tourProgram"]["days"]);

    $daysDescriptionsArr = array_map("thirdLevelNestingArr", $data["tourProgram"]["days"]);



    try 
    {
        $pdo = new PDO(
            'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
            $DBNAME,
            $DBPASS
        );



        $sqlMain = 'INSERT tours(tour_id, title, price, var_price, season, time, reference, var_reference, included, var_included, big_img, small_img, href, details, var_details, details_title, var_detailstitle, about_title, program_title, program_subtitle, program_preface)
                        VALUES(:tourId, :title, :price, :varPrice, :season, :time, :reference, :varReference, :included, :varIncluded, :bigImg, :smallImg, :href, :details, :varDetails, :detailsTitle, :varDetailsTitle, :aboutTitle, :programTitle, :programSubtitle, :programPreface);';

        $stmt = $pdo->prepare($sqlMain);
        $state = $stmt->execute($tourArr);

        if($state) {
            $answer['dbTableCreate'] = 'main table ' . $tourArr['tourId'] . ' created';
        }
        else $answer['dbTableCreate'] = 'main table ' . $tourArr['tourId'] . ' creation FAILED';



        

    }
    catch(Exception $e)
    {
        echo 'pdo error ' . $e;
    }




    

    // $sqlStr = 'UPDATE days_descriptions SET 
    //                 title = :title,
                    
    //             WHERE id = :id;';

    // $stmt = $pdo->prepare($sqlStr);
    // $state = $stmt->execute($main);


    // if($state)
    // {
    //     $answer['main tour data'] = 'updated successfully';
    // } else $answer['main tour data'] = 'update failed';

    // $descriptionsSqlStr = 'INSERT days_descriptions(tour_id, id, day_id, paragraph) VALUES(:tourId, :id, :dayId, :paragraph);';

    // $descStmp = $pdo-> prepare($descriptionsSqlStr);
    
    // if(is_array($daysDescriptionsArr)){
    //     foreach($daysDescriptionsArr as $dayIndex => $dayArr){
    //         foreach($dayArr as $index => $p)
    //         {
    //             $descState = $descStmp->execute(array('tour_id' => '1', 'id' => $index, 'dayId' => $dayIndex, 'paragraph' => $p));
    //         }
    //     }    
    // }
    

    // $res = $stmt->fetchAll(PDO::FETCH_ASSOC);


    echo json_encode($answer);
    
}


// else echo json_encode(array('login' => 'failed'));