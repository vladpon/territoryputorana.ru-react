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


    /// PARSE JSON
    $data = json_decode(file_get_contents("php://input"), true);

    $tourId = $data['tourId'];

    //CREATE ARRAYS
    $tourArr = array_filter($data, "firstLevelNesting");
    $tourArr["programTitle"] = $data["tourProgram"]["programTitle"];
    $tourArr["programSubtitle"] = $data["tourProgram"]["programSubtitle"];
    $tourArr["programPreface"] = $data["tourProgram"]["programPreface"];

    $descriptionArr = $data["description"];

    $aboutArr = $data["about"];

    $tourPhotoArr = $data["tourPhoto"];

    $programDays = array_map("secondLevelNesting", $data["tourProgram"]["days"]);

    $daysDescriptionsArr = array_map("thirdLevelNestingArr", $data["tourProgram"]["days"]);//???


    ///CREATE SQL STRINGS
    $sqlMain = 'INSERT tours(tour_id, title, price, var_price, season, time, reference, var_reference, included, var_included, big_img, small_img, href, details, var_details, details_title, var_detailstitle, about_title, program_title, program_subtitle, program_preface)
    VALUES(:tourId, :title, :price, :varPrice, :season, :time, :reference, :varReference, :included, :varIncluded, :bigImg, :smallImg, :href, :details, :varDetails, :detailsTitle, :varDetailsTitle, :aboutTitle, :programTitle, :programSubtitle, :programPreface);';


    $sqlDescription = 'INSERT descriptions(tour_id, id, paragraph) VALUES(:tourId, :id, :paragraph);';

    $sqlAbouts = 'INSERT abouts(tour_id, id, paragraph) VALUES(:tourId, :id, :paragraph);';

    $sqlPhotos = 'INSERT tours_photos(tour_id, id, path, alt) VALUES(:tourId, :id, :path, :alt);';

    $sqlProgram = 'INSERT programs_days(tour_id, id, day_img, day_title) VALUES(:tourId, :id, :dayImg, :dayTitle);';

    $sqlDaysDescriptions = 'INSERT days_descriptions(tour_id, day_id, id, paragraph) VALUES(:tourId, :dayId, :id, :paragraph);';




    try 
    {
        ///PDO CONSTRUCT
        $pdo = new PDO(
            'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
            $DBNAME,
            $DBPASS
        );


        //TOUR TABLE
        $stmt = $pdo->prepare($sqlMain);
        $state = $stmt->execute($tourArr);

        if($state) {
            $answer['dbMainTableCreate'] = 'success';
        }
        else $answer['dbMainTableCreate'] = 'FAILED';


        //DESCRIPTION TABLE
        $stmt = $pdo->prepare($sqlDescription);
        foreach($descriptionArr as $index => $item)
        {
            $state = $stmt->execute(array( 'tourId'=>$tourId, 'id'=>$index, 'paragraph'=>$item ));
            if(!$state) {
                $answer['dbDescTableCreate'] = 'FAILED';
                break;
            }
        }

        if($state) $answer['dbDescTableCreate'] = 'success';


         //ABOUTS TABLE
         $stmt = $pdo->prepare($sqlAbouts);
         foreach($aboutArr as $index => $item)
         {
             $state = $stmt->execute(array( 'tourId'=>$tourId, 'id'=>$index, 'paragraph'=>$item ));
             if(!$state) {
                 $answer['dbAboutTableCreate'] = 'FAILED';
                 break;
             }
         }
 
         if($state) $answer['dbAboutTableCreate'] = 'success';


         //TOURS_PHOTOS TABLE
         $stmt = $pdo->prepare($sqlPhotos);
         foreach($tourPhotoArr as $index => $item)
         {
             $state = $stmt->execute(array( 'tourId'=>$tourId, 'id'=>$index, 'path'=>$item['path'], 'alt'=>$item['alt']));
             if(!$state) {
                 $answer['dbPhotoTableCreate'] = 'FAILED';
                 break;
             }
         }
 
         if($state) $answer['dbPhotoTableCreate'] = 'success';



         //_DAYS TABLES
         
         foreach($programDays as $dayId => $item)
         {
            $stmt = $pdo->prepare($sqlProgram);
            $state = $stmt->execute(array( 'tourId'=>$tourId, 'id'=>$dayId, 'dayImg'=>$item['dayImg'], 'dayTitle'=>$item['dayTitle']));
            if(!$state) {
                $answer['dbProgramTableCreate'] = 'FAILED';
                break;
            }
            foreach($data['tourProgram']['days'][$dayId]['dayDesc'] as $index => $desc)
            {
                $stmt = $pdo->prepare($sqlDaysDescriptions);
                $state = $stmt->execute(array('tourId'=>$tourId, 'dayId'=> $dayId, 'id'=>$index, 'paragraph'=>$desc ));
                if(!$state) {
                    $answer['dbProgramTableCreate'] = 'FAILED';
                    break;
                }
            }

         }
 
         if($state) $answer['dbProgramTableCreate'] = 'success';





        

    }
    catch(Exception $e)
    {
        echo 'pdo error ' . $e;
    }





    echo json_encode($answer);
    
}


else echo json_encode(array('login' => 'failed'));