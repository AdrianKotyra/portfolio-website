<?php session_start();?>
<?php ob_start(); ?>
<!DOCTYPE html>
<html lang="en">

<?php include "includes/head.php";?>

<body>

    <!-- Navigation -->
    <?php include "includes/nav.php" ?>

    <!-- Page Content -->
    <div class="container">

        <div class="row">

            <!-- Blog Entries Column -->
            <div class="col-md-8">
            <?php



                if(isset($_GET['user']) ) {


                $profile = $_GET['user'];

                $query = "SELECT * FROM users WHERE user_id = $profile ";
                $search_query = mysqli_query($connection, $query);
                $view_date = date("Y-m-d H:i:s");



                $fetched_id = $row["user_id"];
                    if($profile  !=  $_SESSION["fetched_id"]) {
                    $query_input_views = "INSERT INTO profile_views(user_id, view_date, profile_view_id) VALUE('{$fetched_id}','{$view_date}','{$profile}')";
                    $view_query = mysqli_query($connection, $query_input_views);
                    }
                    while($row = mysqli_fetch_assoc($search_query)) {
                        $user_name = $row["user_namee"];
                        $user_img = $row["user_image"];
                        $user_email = $row["user_email"];
                        $user_firstname = $row["user_firstname"];
                        $user_lastname = $row["user_lastname"];
                        $user_desc = $row["user_desc"];

                    ?>



        <div class="row row-user" id="user_row_sub">

        <div class="col-md-8 user_content">
            <div class="user_col " id="user_col_sub">
                <img class="img-fluid user_picture"id="image_user_from_post" src="img/<?php echo $user_img;?>">
                <div class="user_info">
                    <p><b>Nickname:</b> <br><?php echo $user_name;?></p>
                    <p><b>Name:</b><br><?php echo $user_firstname;?></p>
                    <p><b>Lastname:</b><br><?php echo $user_lastname;?></p>
                    <p><b>Email:</b><br><?php echo $user_email;?></p>
                    <a href="display_user_from_posts.php?user=<?php echo $profile?>&posts">
                    <button class="btn btn-success">Show posts</button>
                    </a>

                </div>


            </div>

            <div class="user_col">
                <p class="user_desc">
                    <?php echo $user_desc;?>
                </p>

            </div>



        </div>


    </div>


    <?php }}






    ?>




        </div>
        <?php include "includes/sidebar.php" ?>

        </div>
        <!-- /.row -->

        <hr>



    </div>
    <!-- /.container -->


    <?php include "includes/footer.php";
    ?>


</body>

</html>
