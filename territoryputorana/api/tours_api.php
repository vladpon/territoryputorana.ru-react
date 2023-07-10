<?php
require_once '../../const/const.php';


if(isset($_GET['gettourbyid']))
{
    echo 'get tour by id' . PHP_EOL;
    if(isset($_GET['id']) && $_GET['id'] != NULL)
    {
        $tourId = $_GET['id'];
        $sqlStr = 'SELECT * FROM tours WHERE id = :id;';

        global $DBNAME;
        global $DBPASS;
        
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

        echo 'id: ' . $tourId . PHP_EOL;
        echo json_encode($res) . PHP_EOL;
        echo $res;
    }
    else echo 'no tour ID';
}


elseif(isset($_GET['gettourbytourid']))
{
    echo 'get tour by id' . PHP_EOL;
    if(isset($_GET['tour_id']) && $_GET['tour_id'] != NULL)
    {
        $tourId = $_GET['tour_id'];
        $sqlStr = 'SELECT * FROM tours WHERE tour_id = :tour_id;';

        global $DBNAME;
        global $DBPASS;
        
        try {
    		$pdo = new PDO(
        		'mysql:host=localhost:3306;dbname=' . $DBNAME,
        		$DBNAME,
        		$DBPASS
		    );
		
		    $stmt = $pdo->prepare($sqlStr);
    		$state = $stmt->execute(array('tour_id' => $tourId));
    		$res = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            catch (Exception $e) {
                echo $e->getMessage();
            }

            echo 'id: ' . $tourId . PHP_EOL;
            echo json_encode($res, JSON_UNESCAPED_UNICODE) . PHP_EOL;
            var_dump($res);
    }
    else echo 'no tour id';
}
else 
{
    echo 'another request';
}