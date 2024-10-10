<?php
require_once '../../const/const.php';
require_once 'auth.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
// header('Access-Control-Allow-Headers: token, Content-Type');

global $DBNAME;
global $DBPASS;
global $DBHOST;
// global $USERSDBPASS;

global $answer;

// var_dump($_SESSION);
// // var_dump($_COOKIE);
// var_dump($_GET);

// function descriptionsFilter($item) {
//     return $item;
// }


//////// GET TOUR BY ID ///////////////

if(isset($_GET['tour_id']) && $_GET['tour_id'] != NULL)
    {
        $tourId = $_GET['tour_id'];
        $tour = [];

        $sqlMain =          'SELECT 
                                tour_id AS tourId,
                                title AS title,
                                price AS price,
                                var_price AS varPrice,
                                season AS season,
                                time AS time,
                                reference AS reference,
                                var_reference AS varReference,
                                included AS included,
                                var_included AS varIncluded,
                                big_img AS bigImg,
                                small_img AS smallImg,
                                href AS href,
                                details AS details,
                                var_details AS varDetails,
                                details_title AS detailsTitle,
                                var_detailstitle AS varDetailstitle,
                                about_title AS aboutTitle,
                                clothes AS clothes
                                FROM tours WHERE tour_id = :id;';

        $sqlProgramTitles = 'SELECT                                
                                program_title AS programTitle,
                                program_subtitle AS programSubtitle,
                                program_preface AS programPreface                                
                                FROM tours WHERE tour_id = :id;';

        $sqlDescriptions =  'SELECT 
                                id AS descriptionIndex,
                                paragraph AS paragraph
                                FROM descriptions WHERE tour_id = :id;';
        
        $sqlAbouts =        'SELECT
                                id AS aboutIndex,
                                paragraph AS paragraph
                                FROM abouts WHERE tour_id = :id;';

        $sqlPhotos =        'SELECT
                                -- id AS photoId,
                                path AS path,
                                alt AS alt
                                FROM tours_photos WHERE tour_id = :id;';

        $sqlPrograms =      'SELECT
                                id AS programIndex,
                                day_img AS dayImg,
                                day_title AS dayTitle
                                FROM programs_days WHERE tour_id = :id;';

        $sqlDaysDescriptions = 'SELECT
                                id AS paragraphId,
                                day_id AS dayId,
                                paragraph AS paragraph
                                FROM days_descriptions WHERE tour_id = :id';


        /// PDO ///
        
        try {

            ///// PDO construct /////
            $pdo = new PDO(
                'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
                $DBNAME,
                $DBPASS
            );

        
            //// MAIN TABLE FETCH ////

            $stmt = $pdo->prepare($sqlMain);
            $state = $stmt->execute(array('id' => $tourId));
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $tour = $res[0];

            if($res) { 

            //// DESCRIPTION TABLE FETCH ////

            $stmt = $pdo->prepare($sqlDescriptions, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
            $state = $stmt->execute(array('id' => $tourId));

            
            while($res = $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_NEXT)) {
                $tour['description'][$res[0]] = $res[1];
            }

            //// ABOUTS TABLE FETCH ////

            $stmt = $pdo->prepare($sqlAbouts, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
            $state = $stmt->execute(array('id' => $tourId));
            
            while($res = $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_NEXT)) {
                $tour['about'][$res[0]] = $res[1];
            }

            //// TOURS_PHOTOS TABLE FETCH 

            $stmt = $pdo->prepare($sqlPhotos, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
            $state = $stmt->execute(array('id' => $tourId));
            
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $tour['tourPhoto'] = $res;
            

            //// MAIN TABLE FOR TOUR PROGRAM FETCH ////

            $stmt = $pdo->prepare($sqlProgramTitles);
            $state = $stmt->execute(array('id' => $tourId));
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $tour['tourProgram'] = $res[0];


            /// PROGRAMS_DAYS TABLES FETCH ////
            $stmt = $pdo->prepare($sqlPrograms, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
            $state = $stmt->execute(array('id' => $tourId));

            while($res = $stmt->fetch(PDO::FETCH_ASSOC)){
                $tour['tourProgram']['days'][$res['programIndex']]['dayImg'] = $res['dayImg'];
                $tour['tourProgram']['days'][$res['programIndex']]['dayTitle'] = $res['dayTitle'];
                
            }


            /// DAYS_DESCRITPIONS TABLE FETCH ////

            $stmt = $pdo->prepare($sqlDaysDescriptions, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
            $state = $stmt->execute(array('id' => $tourId));

            while($res = $stmt->fetch(PDO::FETCH_ASSOC)){
                $tour['tourProgram']['days'][$res['dayId']]['dayDesc'][$res['paragraphId']] = $res['paragraph'];                
            }

        }

    }
    catch (Exception $e) {
        echo $e->getMessage();
    }

    echo json_encode($tour, JSON_UNESCAPED_UNICODE);
}
else $answer['gettourbyid'] = 'failed: no tour id';
