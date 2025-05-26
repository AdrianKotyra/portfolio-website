<?php include("includes/header.php") ?>

<body class="">

  <div class="wrapper ">
    <?php include("includes/nav.php") ?>
    <?php include("includes/top-nav.php")?>
    <div class="main-panel">

      <div class="content">
        <div class="row">

          <div class="col-md-12">
            <a href="works.php"><h3>WORKS</h3></a>
            <div class="card">

            <div class="card-body">
            <?php

            if(isset($_GET["source"])) {
            $source = $_GET["source"];

            }
            else {
                $source = "";
            }
            switch($source) {
                case 'add_work';
                include "includes/pages/works/add_work.php";
                break;

                case 'edit_work';
                include "includes/pages/works/edit_work.php";
                break;



                default: include "includes/pages/works/view_all_works.php";
                break;


            }

            ?>
        </div>
      </div>
    </div>
  </div>
  <?php include("includes/footer.php")?>
</body>

</html>