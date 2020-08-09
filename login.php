<?php
function login(){
if(isset($_REQUEST['login'])){
  require('user_management/db_connection.php');
  function validateFormData( $formData){
    $formData = trim(stripcslashes(htmlspecialchars($formData)));
    return $formData;
  }
  $name = validateFormData($_POST['username']);
  $password = validateFormData($_POST['password']);

  $query ="SELECT * FROM `user_profile` WHERE Votpin='$name ' || Email='$name' || Phone_Number='$name' ";
  $result = mysqli_query($conn,$query);
 
  //if result were retured
 
  if(mysqli_num_rows($result) > 0){
 
 while($row =mysqli_fetch_assoc($result)) {
     $email =$row['Email'];
     $name  = $row['Full_Name'];
     $pin = $row['Votpin'];
     $phone = $row['Phone_Number'];
     $uni = $row['Name_of_University'];
     $faculty = $row['Faculty'];
     $dept = $row['Department'];
     $img = $row['images'];
     $address = $row['Adress'];
     $matric = $row['matric_number'];
     $about = $row['about'];
     $hashedpassword =$row['Password'];
 
 }
 

if(password_verify($password,$hashedpassword)){
  session_start();

  $_SESSION['logged_in_User'] = $name;
        
header("location:pages/spa/voltin.php");

}else{
  echo "<div class='alert alert-danger'>wrong password</div>";
}

}else{
  echo "<div class='alert alert-danger'>User does not exist</div>";
}

}
}
?>




<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- bootstrap cdn -->
	<link rel="stylesheet" type="text/css" href="asset/css/bootstrap-4.5.0-dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

	<!-- font awsome cdn -->

	<script src="https://kit.fontawesome.com/a3042df9de.js" crossorigin="anonymous"></script>

	<!-- custom styles -->

	<link rel="stylesheet" type="text/css" href="asset/css/site.css">

	<!-- now ui -->

	
  <!-- CSS Files -->
  <link rel="stylesheet" href="asset/css/site.css">
  <link href="./assets/css/now-ui-kit.css?v=1.3.0" rel="stylesheet" />

  <style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }
  </style>
</head>
<body class="container min-container">
	

<section class="">
	<div class="formec">
	<div class="float-right form  col-md-6 ">
  <div class="card-panel p-sm-5 position-relative">
    <div class="text-center">
      <img src="asset/images/vi png blue.png" alt="Logo" class=" logo"><br>
      <div class=" header_main text-primary"><span class="welcome">Welcome to votin</span><br><span class="login_pls">Please login to your account.</span></div>
    </div>
    <?php 
    login();
    ?>
    <form id="loginForm" method='post' action='' class="mt-5">
    <div class="">
    	 <label class="float-right email"><small class="text-danger text-lighter">please enter your email</small> </label>

     	<input type="text" name="username" placeholder="Email Address,Votpin or Phone number" class="input2 form-control" id="input1">
 </div>
 <br>
 <div>
 	 <label class="float-right password"><small class="text-danger text-lighter">please enter your password</small> </label>
     <input type="password" name="password" placeholder="Password" class="input4 form-control">
 </div>
 <br>
 <div class="float-right"><small><a href="forgot_password.html">forgot password ?</a></small></div>
 <br>
 <div class="rem">
 	<input class="text-primary remeber" type="checkbox" id="Remeber_me" name="">
 	<label  for="Remeber_me" ><small class="text-primary remeber">Remember me</small></label>
 </div>  
<br>
<div>
	<button name="login" style="background: #679DE8; border-radius: 50px;font-weight: bolder;" class="btn btn-primary primary mybtn" id="btn_login">Login</button>
</div>
<br>
<div style="transform: translateX(31%);">
  <span><a class="socal_loginsm remeber" href="#"><img src="https://img.icons8.com/color/48/000000/twitter-circled.png"/> </a></span>
    <span><a class="socal_loginsm remeber" href="#"><img src="https://img.icons8.com/fluent/48/000000/google-plus.png"/></a></span>
</div>

<br>
<div class="reg_link" >
	<small class="text-primary">Don't have an account ? <a href="register.php"> Register</a></small>
</div>              
    </form>
  </div>
</div>

<div class="float-left vector  col-md-6">
<!-- <img class="login_back d-none d-md-block" src="asset/images/login3.svg"> -->
<div class="section back d-none d-md-block" id="carousel">
        <div class="container mag">
         
          <div class="row justify-content-left">
            <div class="col-lg-8 col-md-12">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img class="d-block" src="asset/images/1.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>State of the art chat system</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" src="asset/images/2222.svg" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Control your Personal Library</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block " src="asset/images/33.svg" alt="Third slide">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Cloud Storage</h5>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>

</div>
</div>

</section>


	
<a class="sr-only" href="https://icons8.com/icon/114450/twitter-circled">Twitter Circled icon by Icons8</a>
<a  class="sr-only" href="https://icons8.com/icon/kkAN3fOocGoh/google-plus">Google Plus icon by Icons8</a>
<!-- jquery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

<!-- ui
 -->
<script src="./assets/js/core/jquery.min.js" type="text/javascript"></script>
  <script src=".assets/js/core/popper.min.js" type="text/javascript"></script>
  <script src="./assets/js/core/bootstrap.min.js" type="text/javascript"></script>
  <!--  Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ -->
  <script src="./assets/js/plugins/bootstrap-switch.js"></script>
  <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
  <script src="./assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
  <!--  Plugin for the DatePicker, full documentation here: https://github.com/uxsolutions/bootstrap-datepicker -->
  <script src="./assets/js/plugins/bootstrap-datepicker.js" type="text/javascript"></script>
  <!--  Google Maps Plugin    -->
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
  <!-- Control Center for Now Ui Kit: parallax effects, scripts for the example pages etc -->
  <script src="./assets/js/now-ui-kit.js?v=1.3.0" type="text/javascript"></script>
  

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script>window.jQuery || document.write('<script src="asset/js/jquery.min.js"><\/script>')</script><script src="/docs/4.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-1CmrxMRARb6aLqgBO7yyAxTOQE2AKb9GfXnEo760AUcUmFx3ibVJJAzGytlQcNXd" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.9.0/feather.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
        <script src="asset/js/site.js"></script></body>

</html>