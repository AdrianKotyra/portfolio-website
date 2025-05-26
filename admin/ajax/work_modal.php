<?php session_start() ?>

<?php include "../../php/init.php"?>

<?php
global $connection;
$work_id = isset($_POST["data"]) ? $_POST["data"] : "";


if(!empty($work_id) || $work_id!="") {
        $new_work = New Work();
        $new_work ->create_work_by_id($work_id);
        $work_id=  $new_work-> work_id;
        $work_name = $new_work->work_name ;
        $work_img =  $new_work->work_img ;
        $work_extra_img = $new_work->work_extra_img;
        $work_extra_img_2 = $new_work->work_extra_img_2 ;
        $work_desc = $new_work->work_desc ;
        $work_desc_tech = $new_work->work_desc_tech ;
        $work_link = $new_work->work_link;
        $git_link = $new_work->git_link;
        $work_level = $new_work->work_level;



           echo '  <div class="confirmationWindowModal">
                <img class="cross_modal_admin exit-modal exit_modal_trigger"src="../img/cross.svg" alt="">
                <i class="fa-solid fa-expand expand-icon"></i>
                <div class="work_container">
                    <h2 class="header">'.$work_name.'</h2>

                    <h2>Work description</h2>
                    <p>'.$work_desc.'</p>
                    <h2>Work technical description</h2>
                    <p>'.$work_desc_tech.'</p>
                    <h2>Work level</h2>
                    <p>'.$work_level.'</p>
                    <h2>Git link</h2>
                    <p>'.$git_link.'</p>

                     <h2>image 1</h2>
                    <img class="table_img text-primary"  src="../images/'.$work_img.'">
                    <h2>image 2</h2>
                    <img class="table_img text-primary"  src="../images/'.$work_extra_img.'">
                    <h2>image 3</h2>
                    <img class="table_img text-primary"  src="../images/'.$work_extra_img_2.'">
                </div>
            </div>';
        }







    else {
        echo "No results";
    }






?>