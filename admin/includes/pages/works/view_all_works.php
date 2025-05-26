

<div class="card-header">
    <h4 class="card-title"> All Works</h4>
</div>
<div class="card-body">

    <a href="works.php?source=add_work">
    <button type="submit" class="btn btn-primary btn-round">Add new Work</button>

    </a>
    <div class="alert-box-user-deletion confirmationWindowModal">

        <div class="buttons-message-container">
            <p></p>
            <div class="buttons-ok-cancel">
                <button class="accept_button">OK</button>

            </div>

        </div>

    </div>

    <?php delete_wok()?>
    <div class="table-responsive table-custom">
        <table class="table">

            <thead class=" text-primary">

                <th>id</th>
                <th>Name</th>
                <th>link</th>
                <th>img</th>
                <th>image</th>
                <th>git_link</th>
                <th>level</th>
                <th  class=" text-primary text-right"> Details </th>
                <th  class=" text-primary text-right">Edit</th>
                <th  class=" text-primary text-right">Delete</th>
            </thead>



            <tbody class="users_table">

                <?php
                    $per_page = 10;
                    select_and_display_works($per_page);

                ?>

            </tbody>

        </table>
        <?php  pagination_links("works",  $per_page);?>
    </div>
</div>
