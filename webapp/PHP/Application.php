<?php
$servername = "41.204.199.61";
$username = "neo";
$password = "sepiri_12345";
$dbname = "	ui5_loanmanagement";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 

$ApplicationID = mysqli_real_escape_string($conn, $_POST['ApplicationID']);
$Title = mysqli_real_escape_string($conn, $_POST['Title']);
$Name = mysqli_real_escape_string($conn, $_POST['Name']);
$Surname = mysqli_real_escape_string($conn, $_POST['Surname']);
$Numbers = mysqli_real_escape_string($conn, $_POST['Numbers']);
$Email= mysqli_real_escape_string($conn, $_POST['Email']);
$IDType= mysqli_real_escape_string($conn, $_POST['IDType']);
$IDNumber = mysqli_real_escape_string($conn, $_POST['IDNumber']);
$DOB= mysqli_real_escape_string($conn, $_POST['DOB']);
$HNumber= mysqli_real_escape_string($conn, $_POST['HNumber']);
$WNumber= mysqli_real_escape_string($conn, $_POST['WNumber']);
$Gender= mysqli_real_escape_string($conn, $_POST['Gender']);
$Race= mysqli_real_escape_string($conn, $_POST['Race']);
$MaritalStatus= mysqli_real_escape_string($conn, $_POST['MaritalStatus']);
$Dependants= mysqli_real_escape_string($conn, $_POST['Dependants']);
$AddressLine1= mysqli_real_escape_string($conn, $_POST['AddressLine1']);
$AddressLine2= mysqli_real_escape_string($conn, $_POST['AddressLine2']);
$City= mysqli_real_escape_string($conn, $_POST['City']);
$PostalCode= mysqli_real_escape_string($conn, $_POST['PostalCode']);
$LivingArrangements= mysqli_real_escape_string($conn, $_POST['LivingArrangements']);
$HighestQualification= mysqli_real_escape_string($conn, $_POST['HighestQualification']);
$EmploymentStatus= mysqli_real_escape_string($conn, $_POST['EmploymentStatus']);
$Position= mysqli_real_escape_string($conn, $_POST['Position']);
$Industry= mysqli_real_escape_string($conn, $_POST['Industry']);
$CurrentEmployer= mysqli_real_escape_string($conn, $_POST['CurrentEmployer']);
$WAddressLine1= mysqli_real_escape_string($conn, $_POST['WAddressLine1']);
$WAddressLine2= mysqli_real_escape_string($conn, $_POST['WAddressLine2']);
$WSuburb= mysqli_real_escape_string($conn, $_POST['WSuburb']);
$Suburb= mysqli_real_escape_string($conn, $_POST['Suburb']);
$WCity= mysqli_real_escape_string($conn, $_POST['WCity']);
$WPostalCode= mysqli_real_escape_string($conn, $_POST['WPostalCode']);
$FinanceStatus= mysqli_real_escape_string($conn, $_POST['FinanceStatus']);
$Source= mysqli_real_escape_string($conn, $_POST['Source']);
$UserID= mysqli_real_escape_string($conn, $_POST['UserID']);
$GrossIncome= mysqli_real_escape_string($conn, $_POST['GrossIncome']);
$NettIncome= mysqli_real_escape_string($conn, $_POST['NettIncome']);
$OtherIncome= mysqli_real_escape_string($conn, $_POST['OtherIncome']);
$LivingExpenses= mysqli_real_escape_string($conn, $_POST['LivingExpenses']);
$DebtRepayments= mysqli_real_escape_string($conn, $_POST['DebtRepayments']);
$RequestedAmount= mysqli_real_escape_string($conn, $_POST['RequestedAmount']);
$Term= mysqli_real_escape_string($conn, $_POST['Term']);


$sql = "INSERT INTO application(ApplicationID, Title, Name, Surname, Numbers, Email, IDType, IDNumber, DOB, HNumber, WNumber, Gender, Race, MaritalStatus, Dependants, 
AddressLine1, AddressLine2, City, PostalCode, LivingArrangements, HighestQualification, EmploymentStatus, Position,Industry, CurrentEmployer, WAddressLine1, 
WAddressLine2, WSuburb, Suburb, WCity, WPostalCode, FinanceStatus, Source, UserID, GrossIncome,NettIncome, OtherIncome, LivingExpenses, DebtRepayments, 
RequestedAmount, Term) VALUES ('$ApplicationID','$Title','$Name','$Surname','$Numbers', '$Email','$IDType', '$IDNumber','$DOB','$HNumber','$WNumber','$Gender','$Race',
'$MaritalStatus','$Dependants','$AddressLine1','$AddressLine2','$City','$PostalCode','$LivingArrangements','$HighestQualification','$EmploymentStatus','$Position',
'$Industry','$CurrentEmployer','$WAddressLine1','$WAddressLine2','$WSuburb','$Suburb','$WCity','$WPostalCode','$FinanceStatus','$Source','$UserID','$GrossIncome',
'$NettIncome','$OtherIncome','$LivingExpenses','$DebtRepayments','$RequestedAmount','$Term' )";


if ($conn->query($sql) === TRUE) {
    echo "User Registered successfully!";
    $sql = "";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>