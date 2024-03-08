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
    <?php
        if(isset($_GET["category"])) {
            $category_id = $_GET["category"];

            $query_cat = "SELECT * FROM `categories` where category_id = {$category_id}";
            $select_cat = mysqli_query($connection, $query_cat);
            while($row = mysqli_fetch_assoc($select_cat)) {
                $category_name = $row["category_title"];
                echo "<h1 class='cat_title'>$category_name</h1>";
            }
    }

    ?>
<div class="row">

            <!-- Blog Entries Column -->
            <div class="col-md-8">

                <?php
                    if(isset($_GET["category"])) {
                        $category_id = $_GET["category"];

                        $query = "SELECT * FROM `posts` where post_category_id = {$category_id} ORDER BY post_id DESC limit 5";
                        $select_posts = mysqli_query($connection, $query);
                        while($row = mysqli_fetch_assoc($select_posts)) {
                            $post_id = $row["post_id"];
                            $post_title = $row["post_title"];
                            $post_author = $row["post_author"];
                            $post_date = $row["post_date"];
                            $post_content = substr($row["post_content"],0, 50);
                            $post_image =  $row["post_image"];


                            $query_select_id_post_author = "SELECT * FROM users WHERE user_namee = '{$post_author}'";
                            $query_select_id_post_author_query = mysqli_query($connection, $query_select_id_post_author);
                            while ($row = mysqli_fetch_assoc($query_select_id_post_author_query)) {
                            $author_id = $row["user_id"];
                            }
                            ?>





                            <!-- First Blog Post -->
                            <h2>
                            <a href="post.php?p_id=<?php echo $post_id?>"><?php echo $post_title ?></a>
                            </h2>
                            <p class="lead">
                                by <a href="display_user_from_posts.php?user=<?php echo $author_id ?>"><?php echo $post_author ?></a>
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



                   <?php }} ?>
                   <ul class="pager">
                    <?php
                        if(isset($_GET['page']) & isset($_GET['category'])) {
                        $category_id = $_GET["category"];
                        $query_posts = "SELECT * from posts where post_category_id = $category_id";


                        $query_selects_all_posts = mysqli_query($connection, $query_posts);
                        $post_count_sum = mysqli_num_rows($query_selects_all_posts);
                        $post_count_sum = ceil($post_count_sum/5);
                        for($i=1; $i<=$post_count_sum; $i++) {
                            if ($i ==($_GET["page"])) {
                                $active_page = "active_page";
                            }
                            else {
                                $active_page = "inactive_page";
                            }
                            echo "<li> <a class=$active_page href='index.php?source=posts&page=$i'>$i</a></li>";

                        }
                    }



                    ?>

</ul>





















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
