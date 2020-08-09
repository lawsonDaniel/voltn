<?php 


//usset and distroy sesson
session_unset();
session_destroy();

//rediret
header("location:/voltin/login.php");

?>