<?php session_start();?>
<?php ob_start(); ?>
<!DOCTYPE html>
<html lang="en">

<?php include "includes/admin_header.php"; ?>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <?php include "includes/admin_nav.php" ?>

        <div id="page-wrapper">
            <div class="container-fluid">

            <!-- Page Heading -->
            <div class="row">

                <div class="col-lg-12">
                    <h1 class="page-header">
                       Comments

                    </h1>



                </div>
            </div>
            <!-- /.row -->

            </div>



            <?php

                if(isset($_GET["source"])) {
                    $source = $_GET["source"];

                }
                else {
                    $source = "";
                }
                switch($source) {
                    case 'add_posts';
                    include "./includes/add_posts.php";
                    break;

                    case 'edit_posts';
                    include "./includes/edit_posts.php";
                    break;


                    default: include "includes/view_all_comments.php";
                    break;




                }





            ?>

            <?php
                delete_comments()





            ?>












        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->



</body>

</html>
