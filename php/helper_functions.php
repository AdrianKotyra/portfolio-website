<?php  require_once("init.php");
function displayWorks(){
    global $connection;
    global $work;
    $query = "SELECT * FROM works order by work_id DESC";
    $select_posts = mysqli_query($connection, $query);
    while ($row = mysqli_fetch_assoc($select_posts)) {
        $work_name = $row["work_name"];
        $new_work = new Work();

        $new_work->create_work_by_name($work_name);
        echo $new_work->Work_Cart();
    }
}

function log_out(){
if(isset($_GET["logout"])) {
    global $session;
    $session ->log_out();

}

}
function Redirect_Not_Logged_User() {
    global $session;
    if ($session->signed_in===false) {
        Header('Location: index.php');
    }




}
