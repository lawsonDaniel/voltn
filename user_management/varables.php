<?php 
function varable(){




//sanitze 
$name = htmlspecialchars(filter_var($name, FILTER_SANITIZE_STRING));
$email = htmlspecialchars(filter_var($email, FILTER_SANITIZE_EMAIL));
}
?>