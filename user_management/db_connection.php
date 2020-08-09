<?php 

$_server = "localhost";
$username = "root";
$password ="";
$db = "Voltin";

//create connection
$conn = mysqli_connect($_server,$username,$password,$db);

//check connection
if(!$conn){
    die("connection failed :".mysqli_connect_error());
}
else{
   

}

?>