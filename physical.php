<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password,"id7639694_dbofphysiq");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


extract($_POST);



$str = "UPDATE btt SET valuee=".$s0." WHERE name='s1'";

if($conn->query($str)==true)
{
	echo "data uploaded";
}



$str = "UPDATE btt SET valuee=".$s1." WHERE name='s2'";

if($conn->query($str)==true)
{
	echo "data uploaded";
}



$str = "UPDATE btt SET valuee=".$s2." WHERE name='s3'";

if($conn->query($str)==true)
{
	echo "data uploaded";
}



$str = "UPDATE btt SET valuee=".$s3." WHERE name='s4'";

if($conn->query($str)==true)
{
	echo "data uploaded";
}



$str = "UPDATE btt SET valuee=".$s4." WHERE name='s5'";

if($conn->query($str)==true)
{
	echo "data uploaded";
}



$str = "UPDATE btt SET valuee=".$s5." WHERE name='s6'";

if($conn->query($str)==true)
{
	echo "data uploaded";
}

$conn->close();



?>