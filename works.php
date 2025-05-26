<?php include("./includes/header.php")?>

<section class="hero-section">
    <div class="hero-container">
      <h1 class="category_header">PROJECTS</h1>

    </div>

</section>

<section class="works">


    <div class="works-container">
    <div id="portfolio" class="section">
		<div class="container">




			<div class="row">
				<div class="col-md-12">

					<p>(RECENT TO LATEST) </p>
					<p>These projects showcase my journey of learning web development and reflect my skill improvement, starting from simple websites and progressing by exploring new techniques in both frontend and backend through school and various courses.</p>
					<div class="project-buttons-container">
						<button class="switcher-button trigger-button trigger-level-all active-button-trigger">ALL</button>
						<img class="arrow-class"src="./img/right-arrow.svg" alt="">
						<button class="switcher-button trigger-button trigger-level-5">SVQ 5</button>
						<img class="arrow-class"src="./img/right-arrow.svg" alt="">
						<button class="switcher-button trigger-button trigger-level-6">SVQ 6</button>
						<img class="arrow-class"src="./img/right-arrow.svg" alt="">
						<button class="switcher-button trigger-button trigger-level-hnc">HNC</button>
						<img class="arrow-class"src="./img/right-arrow.svg" alt="">
						<button class="switcher-button trigger-button trigger-level-hnd">HND</button>

					</div>
				</div>

                <?php
                 displayWorks()



                ?>





			</div>


		</div>
	</div>


    </div>









</section>







<?php include("./includes/footer.php")?>
<script src="js/works.js"></script>
<script src="js/animateOnScroll.js"></script>