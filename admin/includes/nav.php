

<?php
$active_page =  basename($_SERVER['PHP_SELF']);
?>
<div class="sidebar" data-color="white" data-active-color="danger">
<div class="logo">
        <a href="../index.php" class="simple-text logo-normal">
         home
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
        <li class="<?= $active_page == 'dashboard.php' ? 'active' : '' ?>">
            <a href="./dashboard.php">
              <i class="nc-icon nc-bank"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <!-- <li>
            <a href="user.php">
              <i class="nc-icon nc-single-02"></i>
              <p>User Profile</p>
            </a>
          </li> -->
          <li class="<?= $active_page == 'works.php' ? 'active' : '' ?>">
            <a href="works.php">
              <i class="nc-icon nc-circle-10"></i>
              <p>Works</p>
            </a>
          </li>

        </ul>
      </div>
</div>