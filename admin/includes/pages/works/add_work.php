

<?php add_work();?>


<form action="" method="post" enctype="multipart/form-data">
    <div class="form-group">
        <label for="work_name">Work Name</label>
        <input required type="text" class="form-control" name="work_name">
    </div>

    <div class="form-group">
        <label for="work_link">Work Link</label>
        <input required type="text" class="form-control" name="work_link">
    </div>

    <div class="form-group">
        <label for="work_desc">Description</label>
        <textarea required class="form-control" name="work_desc"></textarea>
    </div>

    <div class="form-group">
        <label for="tech_desc">Technical Description</label>
        <textarea required class="form-control" name="tech_desc"></textarea>
    </div>
    <Br>
    <label for="img[]">Image 1 (Main)</label>
    <Br>
    <input type="file" name="img[]">
    <Br>
    <label for="img[]">Image 2</label>
    <Br>
    <input type="file" name="img[]">
    <Br>
    <label for="img[]">Image 3</label>
    <Br>
    <input type="file" name="img[]"><br>
    <Br>
    <div class="form-group">
        <label for="role">Role</label>
        <select name="levels">
            <?php display_works_levels(null); ?>
        </select>
    </div>

    <div class="form-group">
        <input class="btn btn-primary" type="submit" name="add_work" value="Add work">
    </div>
</form>
