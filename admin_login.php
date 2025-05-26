<?php include("./includes/header.php")?>



<section class="hero-section">
    <div class="hero-container">
      <h1 class="category_header">log in </h1>

    </div>

</section>

<div class="login-container">
    <form method="POST"  >
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="login" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter login">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>

  <button name="submit" type="submit" class="btn btn-primary">Submit</button>
</form>

</div>

<?php
if(isset($_POST["submit"])) {
    global $connection;
    $login =   mysqli_escape_string($connection, $_POST["login"]);
    $password =  mysqli_escape_string($connection, $_POST["password"]);
    $new_user = new User();
    $new_user->login_in_user($login, $password);
    if($new_user->user_login == "admin") {
    Header("Location: admin/dashboard.php");
    }




}


?>