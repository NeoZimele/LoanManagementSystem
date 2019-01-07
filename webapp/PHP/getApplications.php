<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
$servername = "41.204.199.61";
$username = "neo";
$password = "sepiri_12345";
$dbname = "	ui5_loanmanagement";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

 $sql = "select * from application";
 
 $res = mysqli_query($conn,$sql);
 
 $result = array();
 
 while($row = mysqli_fetch_array($res)){
 array_push($result, 
 array('ApplicationID'=>$row[0], 'Title'=>$row[1],'Name'=>$row[2],'Surname'=>$row[3],'Numbers'=>$row[4],'Email'=>$row[5],'IDType'=>$row[6],'IDNumber'=>$row[7],
 'DOB'=>$row[8],'HNumber'=>$row[9],'WNumber'=>$row[10],'Gender'=>$row[11],'Race'=>$row[12],'MaritalStatus'=>$row[13],'Dependants'=>$row[14],'Nationality'=>$row[15],
 'AddressLine1'=>$row[16],'AddressLine2'=>$row[17],'City'=>$row[18],'PostalCode'=>$row[19],'LivingArrangements'=>$row[20],'HighestQualification'=>$row[21],
 'EmploymentStatus'=>$row[22],'Occupation'=>$row[23],'Industry'=>$row[24],'CurrentEmployer'=>$row[25],'StartDate'=>$row[26],'Current'=>$row[27],
 'EndDate'=>$row[28],'WAddressLine1'=>$row[29],'WAddressLine2'=>$row[30],'WSuburb'=>$row[31],'Suburb'=>$row[32],'WCity'=>$row[33],'WPostalCode'=>$row[34],
 'FinanceStatus'=>$row[35],'Source'=>$row[36],'IDCopy'=>$row[37],'Payslip'=>$row[38],'ProofOfRes'=>$row[39] ));
 }
 header('Content-Type: application/json');
 echo json_encode(array('result'=>$result));
?>