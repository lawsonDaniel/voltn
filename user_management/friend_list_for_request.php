<?php 
function list_of_all_user(){
require_once("db_connection.php");

$query ="SELECT * FROM `user_profile` ";
$result = mysqli_query($conn,$query);

//if result were retured

if(mysqli_num_rows($result) > 0){

while($row =mysqli_fetch_assoc($result)) {
   $email =$row['Email'];
   $name = $row['Full_Name'];
   $pin = $row['Votpin'];
   $phone = $row['Phone_Number'];
   $uni = $row['Name_of_University'];
   $faculty = $row['Faculty'];
   $dept = $row['Department'];
   $img = $row['images'];
   $address = $row['Adress'];
   $matric = $row['matric_number'];
   $about = $row['about'];

}

}
$all = '<div id="profile">
<span class="menu_btn"><i class="material-icons float-right" >more_vert</i></span>
        <ul id="menu_show" class="main_menue">
            <li id="" class="active"><span class="main_list"></span> <p>New group</p></li>
            <li id=""><span class="main_list"></span> <p>Connect</p></li>
            <li id=""><span class="main_list"></span> <p>Settings</p></li>
<li id=""><span class="main_list"></span> <p>Profile</p></li>
        </ul>
</div>
<div id="search">
<label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
<input type="text" placeholder="Search contacts..." />
</div>
<div id="contacts">
<ul>
    <li class="contact" id="click_to_add_friend">
        <div class="wrap">
            <span class="contact-status online"></span>
            <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
            <div class="meta">
                <p class="name">'.$name.'</p>
                <p class="preview">'.$about.'</p>
            </div>
        </div>
    </li>
    
   
            </div>';
echo $all;
}

list_of_all_user();

?>
<style>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>
  <link rel="stylesheet" href="/resources/demos/style.css"/>
</style>

<div id="dialog" title="Basic dialog">
  <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
</div>


<script>
 $(function(){
     $('#click_to_add_friend').click(function(){
        $( "#dialog" ).dialog();
     })
 })
</script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>