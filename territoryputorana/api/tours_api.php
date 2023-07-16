<?php
require_once '../../const/const.php';

header('Content-Type: application/json');

global $DBNAME;
global $DBPASS;
global $DBHOST;


if(isset($_GET['gettourbyid']))
{
    if(isset($_GET['id']) && $_GET['id'] != NULL)
    {
        $tourId = $_GET['id'];
        $sqlStr = 'SELECT * FROM tours WHERE id = :id;';


        try {
    		$pdo = new PDO(
        		'mysql:host=localhost:3306;dbname=' . $DBNAME,
        		$DBNAME,
        		$DBPASS
		    );
		
		    $stmt = $pdo->prepare($sqlStr);
    		$state = $stmt->execute(array('id' => $tourId));
    		$res = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            catch (Exception $e) {
                echo $e->getMessage();
            }

        echo json_encode($res, JSON_UNESCAPED_UNICODE);
    }
    else echo 'no tour ID';
}


elseif(isset($_GET['gettourbytourid']))
{
    if(isset($_GET['tour_id']) && $_GET['tour_id'] != NULL)
    {
        $tourId = $_GET['tour_id'];
        $sqlStr = 'SELECT group_size AS groupSize, year_time AS yearTime, accmdtn_short AS accmdtnShort, difficulty_level AS difficultyLevel, big_img AS bigImg, small_img AS smallImg, id AS tourId, title, season, time, price, reference, href  FROM tours WHERE tour_id = :tour_id;';
        $sqlStrDesc = 'SELECT paragraph FROM descriptions WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id);';
        $sqlStrAbouts = 'SELECT paragraph FROM abouts WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id);';
        $sqlStrDays = 'SELECT day_img AS dayImg, day_title AS dayTitle, id FROM programs_days  WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id);';
        $sqlStrTourProg = 'SELECT text_h4 AS textH4, begin FROM tours_programs WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id);';

        
    	$pdo = new PDO(
            'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
            $DBNAME,
            $DBPASS
        );
		
		$stmt = $pdo->prepare($sqlStr);
    	$state = $stmt->execute(array('tour_id' => $tourId));
    	$res = $stmt->fetchAll(PDO::FETCH_ASSOC)[0];
        
        $stmt = $pdo->prepare($sqlStrDesc);
    	$state = $stmt->execute(array('tour_id' => $tourId));
    	$res['descriptions'] = $stmt->fetchAll(PDO::FETCH_COLUMN);

        $stmt = $pdo->prepare($sqlStrAbouts);
    	$state = $stmt->execute(array('tour_id' => $tourId));
    	$res['about'] = $stmt->fetchAll(PDO::FETCH_COLUMN);


        $stmt = $pdo->prepare($sqlStrTourProg);
    	$state = $stmt->execute(array('tour_id' => $tourId));
    	$res['tourProgram'] = $stmt->fetch(PDO::FETCH_ASSOC);
        if(!is_array($res['tourProgram'])) $res['tourProgram'] = [];

        $stmt = $pdo->prepare($sqlStrDays);
    	$state = $stmt->execute(array('tour_id' => $tourId));
        while($day = $stmt->fetch(PDO::FETCH_ASSOC))
        {            
            $sqlDayProgram = 'SELECT paragraph FROM days_descriptions WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id) AND day_id = :day_id;)';
            $st = $pdo->prepare($sqlDayProgram);
            $ste = $st->execute(array('tour_id' => $tourId, 'day_id' => $day['id']));
            while($dayProgram = $st->fetch(PDO::FETCH_COLUMN)){
                $day['dayDesc'][] = $dayProgram;
            }    
            $res['tourProgram']['days'][] = $day;
        }

        

        echo json_encode($res, JSON_UNESCAPED_UNICODE);
    }
    else echo 'no tour id';
}

elseif(isset($_GET['gettours']))
{   
        
    $pdo = new PDO(
        'mysql:host=' . $DBHOST . ':3306;dbname=' . $DBNAME,
        $DBNAME,
        $DBPASS
    );
		
    $sqlMainStr = 'SELECT tour_id FROM tours';

    $stmtM = $pdo->prepare($sqlMainStr);
    $stateM = $stmtM->execute();
    while($tourId = $stmtM->fetch(PDO::FETCH_COLUMN)) 
    {
            $sqlStr = 'SELECT group_size AS groupSize, year_time AS yearTime, accmdtn_short AS accmdtnShort, difficulty_level AS difficultyLevel, big_img AS bigImg, small_img AS smallImg, title, season, time, price, reference, tour_id AS tourId, href  FROM tours WHERE tour_id = :tour_id;';
            $sqlStrDesc = 'SELECT paragraph FROM descriptions WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id);';
            $sqlStrAbouts = 'SELECT paragraph FROM abouts WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id);';
            $sqlStrDays = 'SELECT day_img AS dayImg, day_title AS dayTitle, id FROM programs_days  WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id);';
            $sqlStrTourProg = 'SELECT text_h4 AS textH4, begin FROM tours_programs WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id);';

                  
            $stmt = $pdo->prepare($sqlStr);
            $state = $stmt->execute(array('tour_id' => $tourId));
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC)[0];

            
            $stmt = $pdo->prepare($sqlStrDesc);
            $state = $stmt->execute(array('tour_id' => $tourId));
            $res['descriptions'] = $stmt->fetchAll(PDO::FETCH_COLUMN);

            $stmt = $pdo->prepare($sqlStrAbouts);
            $state = $stmt->execute(array('tour_id' => $tourId));
            $res['about'] = $stmt->fetchAll(PDO::FETCH_COLUMN);

            $stmt = $pdo->prepare($sqlStrTourProg);
            $state = $stmt->execute(array('tour_id' => $tourId));
            $res['tourProgram'] = $stmt->fetch(PDO::FETCH_ASSOC);
            if(!is_array($res['tourProgram'])) $res['tourProgram'] = [];

            $stmt = $pdo->prepare($sqlStrDays);
            $state = $stmt->execute(array('tour_id' => $tourId));
            while($day = $stmt->fetch(PDO::FETCH_ASSOC))
            {            
                $sqlDayProgram = 'SELECT paragraph FROM days_descriptions WHERE tour_id = (SELECT id FROM tours WHERE tour_id = :tour_id) AND day_id = :day_id;)';
                $st = $pdo->prepare($sqlDayProgram);
                $ste = $st->execute(array('tour_id' => $tourId, 'day_id' => $day['id']));
                while($dayProgram = $st->fetch(PDO::FETCH_COLUMN)){
                    $day['dayDesc'][] = $dayProgram;
                }
                $res['tourProgram']['days'][] = $day;
            }

            $tours[] = $res;
    }
    
            

    echo json_encode($tours, JSON_UNESCAPED_UNICODE);
}
else 
{
    echo 'another request';
}