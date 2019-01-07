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
$FileName = mysqli_real_escape_string($conn, $_POST['FileName']);
$FileContent = mysqli_real_escape_string($conn, $_POST['FileContent']);
$FileType = mysqli_real_escape_string($conn, $_POST['FileType']);
$UserID = mysqli_real_escape_string($conn, $_POST['UserID']);
$DocumentType = mysqli_real_escape_string($conn, $_POST['DocumentType']);



$sql = "INSERT INTO documents(ApplicationID, FileName, FileContent, FileType, UserID ,DocumentType) VALUES ('$ApplicationID','$FileName','$FileContent','$FileType','$UserID','$DocumentType')";

if ($conn->query($sql) === TRUE) {
    echo "User Registered successfully!";
    $sql = "";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>