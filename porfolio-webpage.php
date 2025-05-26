<?php include("./includes/header.php")?>

<?php
if(isset($_GET["work_name"]) ){
$type = $_GET["work_name"];
global $database;
$result = $database ->query_array("SELECT * FROM works WHERE work_name = '$type'");
if(mysqli_num_rows($result)==0)  {
    header("Location: index.php");
    exit;
}
global $work;
$new_work = new Work();
$new_work->create_work_by_name($type);
$work_extra_img =$new_work->work_extra_img;
$work_extra_img_2 =$new_work->work_extra_img_2;
$work_name= $new_work->work_name;
$work_desc = $new_work->work_desc;
$work_desc_tech = $new_work->work_desc_tech;
$work_link = $new_work->work_link;
$git_link = $new_work->git_link;
}


?>
<section class="hero-section">
    <div class="hero-container">
      <h1 class="category_header"><?php echo $work_name ;?></h1>

    </div>

</section>

<section class="work-desc">
    <div class="work-container row wrapper">

        <div class="work-container-imgs col-md-6">

            <img src="./images/<?php echo $work_extra_img ;?>" alt="">
            <?php
            if($work_extra_img_2!=="") {
                echo '  <img src="./images/'.$work_extra_img_2.'" alt="">';
            }
            ?>

        </div>

        <div class="work-container-info  col-md-6">
            <div class="first-col">
                <h1 class="work-header" >THE PROJECT</h1>
                <p class="work-desc"><?php echo $work_desc ;?></p>
            </div>

            <div class="second-col">
                <h1 class="work-header" >TECHNICALS</h1>
                <div class="work-desc">
                    <?php echo $work_desc_tech ;?>
                </div>
            </div>
            <div class="second-col links-col">
                <h1 class="work-header" >LINKS</h1>


                <a target="_blank"  href="<?php echo $work_link ;?>">
                    <img src="./img/link.png" alt="">
                </a>
                <a target="_blank" href="<?php echo $git_link ;?>">
                    <img src="./images/git.jpg" >
                </a>
            </div>

        </div>





    </div>



</section>







<?php include("./includes/footer.php")?>
