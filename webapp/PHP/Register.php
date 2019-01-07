<?php
$servername = "41.204.199.61";
$username = "neo";
$password = "sepiri_12345";
$dbname = "	ui5_loanmanagement";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 

$UserID = mysqli_real_escape_string($conn, $_POST['UserID']);
$UserType = mysqli_real_escape_string($conn, $_POST['UserType']);
$Name = mysqli_real_escape_string($conn, $_POST['Name']);
$Surname = mysqli_real_escape_string($conn, $_POST['Surname']);
$EmailAddress = mysqli_real_escape_string($conn, $_POST['EmailAddress']);
$Username = mysqli_real_escape_string($conn, $_POST['Username']);
$Password = mysqli_real_escape_string($conn, $_POST['Password']);

$sql = " INSERT INTO users (UserID, Name, Surname, Email, Username, Password, UserType)
VALUES ('$UserID','$Name','$Surname','$EmailAddress','$Username','$Password','$UserType')";



if ($conn->query($sql) === TRUE) {
    echo "User Registered successfully!";
    $sql = "";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>