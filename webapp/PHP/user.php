<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$servername = "sapsrv5";
$username = "neo";
$password = "sepiri_12345";
$dbname = "	ui5_loanmanagement";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

 $sql = "select * from users";
 
 $res = mysqli_query($conn,$sql);
 
 $result = array();
 
 while($row = mysqli_fetch_array($res)){
 array_push($result, 
 array('UserID'=>$row[0], 'Name'=>$row[1],'Surname'=>$row[2],'Email'=>$row[3],'UserName'=>$row[4],'Password'=>$row[5]));
 }
 header('Content-Type: application/json');
 echo json_encode(array('result'=>$result));
?>