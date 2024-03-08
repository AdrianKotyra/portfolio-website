<?php session_start();?>
<?php ob_start(); ?>
<!DOCTYPE html>
<html lang="en">

<?php include "includes/head.php";?>
<script><?php include "./js/custom.js"?> </script>
<body>

    <!-- Navigation -->
    <?php include "includes/nav.php" ?>

    <!-- Page Content -->
    <div class="container">

        <div class="row">

            <!-- Blog Entries Column -->
            <div class="col-md-8">

            <?php






                $search =  $_SESSION["search_result"];

                $query = "SELECT * FROM posts WHERE post_title LIKE '%$search%' ";
                $search_query = mysqli_query($connection, $query);

                if(!$search_query) {

                    die("QUERY FAILED" . mysqli_error($connection));

                }

                $count = mysqli_num_rows($search_query);

                if($count == 0) {

                    echo '
                    <script>
                        submitWindowTimed("No Results")

                    </script>';

                } else {
                    echo '
                    <script>
                        submitWindowTimed("Result Found")

                    </script>';
                while($row = mysqli_fetch_assoc($search_query)) {
                $post_id = $row['post_id'];
                $post_title = $row['post_title'];
                $post_author = $row['post_author'];
                $post_date = $row['post_date'];
                $post_image = $row['post_image'];
                $post_content = $row['post_content'];

                ?>

                 <!-- First Blog Post -->
                 <h2>
                <a href="post.php?p_id=<?php echo $post_id?>"><?php echo $post_title ?></a>
                </h2>
                <p class="lead">
                    by <a href="display_user_from_posts.php?user=<?php echo $post_author?>"><?php echo $post_author ?></a>
                </p>
                <p><span class="glyphicon glyphicon-time"></span> Posted on <?php echo $post_date ?></p>
                <hr>
                <a href="post.php?p_id=<?php echo $post_id?>" >
                <img class="img-responsive posts_img" src="img/<?php echo $post_image;?>" alt="">
                </a>

                <hr>
                <p><?php echo $post_content ?></p>
                <a class="btn btn-primary" href="post.php?p_id=<?php echo $post_id?>">Read More <span class="glyphicon glyphicon-chevron-right"></span></a>

                    <hr>


                <?php }


                }





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
