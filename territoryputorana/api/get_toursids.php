<?php
require_once '../../const/const.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');


global $DBNAME;
global $DBPASS;
global $DBHOST;
global $USERSDBPASS;

global $answer;



    $sqlStr = 'SELECT tour_id AS tourId FROM tours;';

        try 
        {
            ///PDO CONSTRUCT
            $pdo = new PDO(
                'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
                $DBNAME,
                $DBPASS
            );


            //TOUR TABLE
            $stmt = $pdo->prepare($sqlStr);
            $state = $stmt->execute();
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if($state) {
                $answer['toursIds'] = json_encode($res);
                $answer['dbFetch'] = 'sucess';
            }
            else $answer['dbFetch'] = 'FAILED';

            echo json_encode($res, JSON_UNESCAPED_UNICODE);
        }



          
        
        catch(Exception $e)
            {
                echo 'pdo error ' . $e;
            }

