

<?php edit_work();?>
<?php
    if(isset($_GET["work_id"])) {
    global $connection;
    $work_id_get = $_GET["work_id"];
    $query = "SELECT * from works where work_id = $work_id_get";
    $select_users_query = mysqli_query($connection, $query);
    if (!$select_users_query) {
        die("Query Failed: " . mysqli_error($connection));
    }
    while($row = mysqli_fetch_assoc($select_users_query)) {


    $work_id = $row["work_id"];
    $work_name= $row["work_name"];
    $work_link= $row["work_link"];
    $work_img= $row["work_img"];
    $work_extra_img= $row["work_extra_img"];
    $work_extra_img_2= $row["work_extra_img_2"];

    $work_desc= $row["work_desc"];
    $work_desc_tech= $row["work_desc_tech"];
    $git_link= $row["work_link"];
    $level= $row["level"];

    }}


?>

<form action="" method="post" enctype="multipart/form-data">
    <div class="form-group">
        <label for="work_name">Work Name</label>
        <input required type="text" class="form-control" name="work_name" value="<?php echo $work_name;?>">
    </div>

    <div class="form-group">
        <label for="work_link">Work Link</label>
        <input required type="text" class="form-control" name="work_link" value="<?php echo $work_link;?>">
    </div>

    <div class="form-group">
        <label for="work_desc">Description</label>
        <textarea style = "height: 400px" required class="form-control" name="work_desc"><?php echo $work_desc;?></textarea>
    </div>

    <div class="form-group">
        <label for="tech_desc">Technical Description</label>
        <textarea style = "height: 400px" required class="form-control" name="tech_desc"><?php echo $work_desc_tech;?></textarea>
    </div>
    <Br>
    <!-- Image 1 (Main) -->
<label for="img[]">Image 1 (Main)</label><br>
<img width="200px" height="200px" src="../images/<?php echo $work_img; ?>" alt="Main Image"><br>
<input type="file" name="img[]"><br><br>

<!-- Image 2 -->
<label for="img[]">Image 2</label><br>
<img width="200px" height="200px" src="../images/<?php echo $work_extra_img; ?>" alt="Extra Image 1"><br>
<input type="file" name="img[]"><br><br>

<!-- Image 3 -->
<label for="img[]">Image 3</label><br>
<img width="200px" height="200px" src="../images/<?php echo $work_extra_img_2; ?>" alt="Extra Image 2"><br>
<input type="file" name="img[]"><br><br>

    <div class="form-group">
        <label for="levels">levels</label>
        <select name="levels">
            <?php display_works_levels($work_id); ?>
        </select>
    </div>

    <div class="form-group">
        <input class="btn btn-primary" type="submit" name="edit_work" value="edit work">
    </div>
</form>
