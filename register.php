<?php

function reg(){
  session_start();
  require('user_management/db_connection.php');
   

  if(isset($_POST['reg_btn'])){
    function validateFormData( $formData){
      $formData = trim(stripcslashes(htmlspecialchars($formData)));
      return $formData;
    }
//validate
$name = validateFormData($_POST['name']);
$email =  validateFormData($_POST['email']);
$number =  validateFormData($_POST['phone_number']);
$password =  validateFormData($_POST['password']);
$confirm_password =  validateFormData($_POST['confirm_password']);

    //auth
    $query40 ="SELECT * FROM `user_profile` WHERE Phone_Number ='$number' ";
    $result20 = mysqli_query($conn,$query40);
   
    //if result were retured
   
    if(mysqli_num_rows($result20) > 0){
   $warning ="<div class='alert alert-danger'>Phone number already taken</div>";
   echo $warning ;
   
   }else{
   
// checking if email already exits
    $query44 ="SELECT * FROM `user_profile` WHERE Email='$email' ";
    $result2 = mysqli_query($conn,$query44);
   
    //if result were retured
   
    if(mysqli_num_rows($result2) > 0){
   $warning ="<div class='alert alert-danger'>Email already taken</div>";
   echo $warning ;
   
   }else{
   

    
    if( validateFormData($_POST['password']) != validateFormData( $_POST['confirm_password'])) {
      $error = "<div class='alert alert-danger '>Password and confirm password do not match</div>";
      echo $error;
    }

    function checkemail($str) {
      return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? FALSE : TRUE;
}
if(!checkemail($email)){
  $error = "<div class='alert alert-danger '>Enter a valid email</div>";
      echo $error;

} else{ 


    if( validateFormData($_POST['password']) === validateFormData( $_POST['confirm_password'])) {
      $length = 4;
    // This function will return a random 
// string of specified length 
function random_strings($length_of_string) { 
      
  // md5 the timestamps and returns substring 
  // of specified length 
  return substr(md5(time()), 0, $length_of_string); 
} 

// This function will generate  
// Random string of length 4 
$voltpin = random_strings(4); 

// CHECKING IF THE VOLTIN PIN ALREADY EXITS
    $query ="SELECT * FROM `user_profile` WHERE Votpin = '$voltpin'";
    $result = mysqli_query($conn,$query);
    if(mysqli_num_rows($result) > 0){
      function random_strings($length_of_string) { 
      
    // md5 the timestamps and returns substring 
    // of specified length 
    return substr(md5(time()), 0, $length_of_string); 
    $voltpin = random_strings(4);
  }

  }
  
 
// HASH PASSWORD
 $password = password_hash("$password", PASSWORD_DEFAULT);
 echo $voltpin;
    $query = "INSERT INTO `user_profile` (`id`, `Email`, `Password`, `Full_Name`, `Phone_Number`, `Votpin`, `Name_of_University`, `matric_number`, `Adress`, `Faculty`, `Department`, `about`, `images`) VALUES (NULL, '$email', '$password', '$name', '$number', '$voltpin', 'Fill in details', 'Fill in details', 'Fill in details', 'Fill in details', 'Fill in details', 'Fill in details', '') ";
    if (mysqli_query($conn, $query)){
       $success = "<div class='alert alert-success '>Registration completed</div>";
      echo $success;

        //storing varables in session
        

        //redirect user to profile page
        // header("Location: pages/spa/profile.php");

          // the message
        $msg = "Congratulations on Your succesfull registration to voltn \n your voltpin is ".$voltpin;

        // use wordwrap() if lines are longer than 70 characters
        // $msg = wordwrap($msg,70);

        // send email
        mail($email,"My subject",$msg);   
        header("location:login.php");
            }
            else{
              $error = "<div class='alert alert-danger '>An Error occured</div>";
              echo $error;
            }
          }
        }
  }
  
}
  
  }
}










?>

<!DOCTYPE html>
<html>
<head>
	<title>Register</title>
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
  <!-- CSS Files -->
  
  <link href="./assets/css/now-ui-kit.css?v=1.3.0" rel="stylesheet" />
</head>
<body>
	

<section class="container min-container">
	 <div class="formec">
  <div class="float-right form  col-md-6 ">
  <div class="card-panel p-sm-5 position-relative">
    <div class="text-center">
      <img src="asset/images/vi png blue.png" alt="Logo" class=" logo"><br>
      <div class=" header_main text-primary"><span class="welcome">Welcome to votin</span><br><span class="login_pls">Register Now.</span></div>
    </div>
    <?php 
    reg();
    
    ?>
    <form id="loginForm" method="post" action="" class="mt-5">
    	 <div class="">
    	 <label class="float-right name"><small class="text-danger name">please enter your name</small> </label>
    	 
     	<input type="text" name="name" required placeholder="Full Name" class="input1 form-control" id="input1">
 </div>
 <br>
    <div class="">
    	 <label class="float-right email"><small class="text-danger">please enter your email</small> </label>
    	 
     	<input type="text" name="email" required placeholder="Email Address" class="input2 form-control" id="input1">
 </div>
 <br>
  <div class="">
    	 <label class="float-right number"><small class="text-danger">please enter your phone number</small> </label>
    	 
     	<input type="Number" name="phone_number" required placeholder="Phone Number" class="input3 form-control" id="input1">
 </div>
 <br>
 <div>
 	 <label class="float-right password"><small class="text-danger">please enter your password</small> </label>
     <input type="password" name="password" required placeholder="Password" class="input4 form-control">
 </div>
 <br>
 <div>
 	 <label class="float-right con_password"><small class="text-danger">password mismatch</small> </label>
     <input type="password"required name="confirm_password" placeholder="Confirm Password" class="input5 form-control">
 </div><br>
<div>
  <input class="text-success" type="checkbox" id="Remeber_me" name="">
  <label  for="Remeber_me"><small class="text-primary">Remember me</small></label>
 </div>  
<br>
<div>
  <button name="reg_btn" style="background: #679DE8;" class="btn btn-primary primary button" id="btn">Register</button>
</div>
<br>
<div class="d-none d-lg-block d-xl-block">
  <span><a class="socal_login " href="#"><i class="fab fa-facebook-f m-1"></i> Login with facebook</a></span>
    <span><a class="socal_login " href="#"><i class="fab fa-google m-1"></i> Login with Google</a></span>
</div>
<div class="d-lg-none d-xl-none">
  <span><a class="socal_loginsm " href="#"><i class="fab fa-facebook-f m-1"></i></a></span>
    <span><a class="socal_loginsm " href="#"><i class="fab fa-google m-1"></i></a></span>
</div>
<br>
<div>
	<small class="text-primary">Already have an account ? <a href="login.php" class="text-primary"> login</a></small>
</div>              
    </form>
  </div>
</div>

<div class="float-left vector  col-md-6">
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
        <script src="asset/js/asset.js"></script>
</body>

</html>