<?php include("./includes/header.php")?>
	<body >

	<div id="fullpage3333">


		<!-- start home -->


		<div id="home" class="section  animate-on-scroll wow fadeIn" data-wow-delay="0.3s" >
			<div class="container" >
				<div class="row">

					<div id="top_text" class="col-sm-4 wow fadeIn" data-wow-delay="0.3s">

						<h1>Adrian <br> Kotyra</h1>

						<h2 class="rotate-container" ><span class="rotate header-rotate-1 active-rotate">Web Developer</span> <span class="rotate header-rotate-2">Software Developer</span><span class="rotate header-rotate-3"> UI &AMP; UX </span></h2>
						<p>Hello, My name is Adrian. I am a Web and Software Developer from Edinburgh.</p>
						<a href="#work" class="btn btn-default smoothScroll wow fadeInUp" data-wow-delay="1s">Start</a>
					</div>
					<div class="col-md-2"></div>
				</div>
			</div>
		</div>
		<!-- end home -->

		<!-- start work -->
		<?php

if($session->signed_in==true) {
global $user;
echo   $user->user_id;
}



?>
		<div id="work" class="section animate-on-scroll">
			<div class="container">

				<div class="row">
					<div class="col-md-12 wow bounce">
						<h1 class="main-heading">SKILLS</h1>
					</div>
                </div>

                <div class="row">
					<div class="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.2s">
						<div class="media">
							<div class="media-object media-left">
								<i class="fa fa-cube"></i>
							</div>
							<div class="media-body">
								<h1 class="media-heading">FRONT-END</h1>
								<p>I Create fully responsive websites based on SCSS/HTML/JS/Jquery/Bootstrap etc.</p>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.2s">
						<div class="media">
							<div class="media-object media-left">
								<i class="fa fa-bar-chart"></i>
							</div>
							<div class="media-body">
								<h1 class="media-heading">BACK-END</h1>
								<p>Using OOP PHP, AJAX, AXIOS, SQL I create fully functional CMS websites.</p>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.2s">
						<div class="media">
							<div class="media-object media-left">
								<i class="fa fa-globe"></i>
							</div>
							<div class="media-body">
								<h1 class="media-heading">FRAMEWORKS</h1>
								<p>Creating Apps with React.js</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<!-- end work -->

		<!-- start about -->
		<div id="about" class="section animate-on-scroll">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-xs-11 wow fadeInLeft" data-wow-delay="0.9s">
						<h1>ABOUT MYSELF</h1>
						<h2 class="colored">WEB DEVELOPER</h2>

						<div>
							Hello, my name is Adrian. I am a self-taught Web and Software Developer from Edinburgh with a college degree. <br><br>
							I love programming, weightlifting, and self-development. I began my programming journey by teaching myself Python, and later transitioned into web development. <br><br>
							Currently, I'm expanding my knowledge in Laravel.
							<span class="trigger-skills">
							</span>
							<br><br>
							I code in <strong>HTML</strong>, <strong>MYSQL</strong>, <strong>SCSS</strong>, <strong>Tailwind</strong>, <strong>JavaScript</strong>, <strong>AJAX</strong>, <strong>SQL</strong>, <strong>jQuery</strong>, <strong>Bootstrap</strong>, <strong>React.js</strong>, <strong>OOP PHP</strong>, and <strong>Python</strong>.
						</div>
						<div class="extra-links">
							<a class="row-custom-icons " target="_blank" href="https://www.udemy.com/user/adrian-kotyra/"> <img class="icon-about" src="./images/udemy.png" alt="">UDEMY</a>
							<a class="row-custom-icons" target="_blank"  href="https://www.linkedin.com/in/adrian-kotyra-68a135236/"> <img  class="icon-about" src="./images/LINKEDIN.png" alt="">LINKEDIN</a>
							<a class="row-custom-icons icon-white" href="https://adriankotyraprojects.co.uk/Adrian_Kotyra_CV.pdf"><img  class="icon-about" src="./img/resume-7.svg" alt=""> My CV</a>
							<a class="row-custom-icons " href="https://github.com/AdrianKotyra"><img  class="icon-about" src="images/git.jpg" alt=""> GITHUB</a>
						</div>

					</div>

					<div class="col-md-6 col-xs-11 wow fadeInRight" data-wow-delay="0.9s">
						<span>HTML <small class="counter" target="90">90%</small>
							<div class="progress">
								<div  style="width: 90%; height: 100%" >
									<div class=" progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
								</div>

							</div>
						</span>
						<span>SCSS<small  class="counter" target="90">90%</small>
						<div class="progress">
							<div  style="width: 90%; height: 100%" >
								<div class="progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ></div>
							</div>
						</div>
						<span>Tailwind<small  class="counter" target="90">80%</small>
						<div class="progress">
							<div  style="width: 90%; height: 100%" >
								<div class="progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ></div>
							</div>
						</div>
						</span>
						<span>Javascript <small  class="counter" target="80">80%</small>
						<div class="progress">
							<div  style="width: 70%; height: 100%" >
								<div class="progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ></div>
							</div>
						</div>
						</span>
						<span>Bootstrap <small  class="counter" target="90">90%</small>
						<div class="progress">
							<div  style="width: 90%; height: 100%" >
								<div class="progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ></div>
							</div>

						</div>
						</span>
						<span>React JS <small  class="counter" target="70">70%</small>
							<div class="progress">
								<div  style="width: 70%; height: 100%" >
									<div class="progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" ></div>
								</div>
							</div>
						</span>
						<span>OOP PHP <small  class="counter" target="70">70%</small>
						<div class="progress">
							<div  style="width: 70%; height: 100%" >
								<div class="progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ></div>
							</div>
						</div>
						</span>

						<span>Python <small  class="counter" target="50">50%</small>
						<div class="progress">
							<div  style="width: 50%; height: 100%" >
								<div class="progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ></div>
							</div>
						</div>
						</span>
						<span >SQL <small class="counter" target="65">65%</small>
							<div class="progress">
								<div  style="width: 65%; height: 100%" >
									<div class="progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ></div>
								</div>
							</div>
						</span>
						<span >WORDPRESS <small  class="counter" target="30">30%</small>
						<div class="progress">
							<div  style="width: 30%; height: 100%" >
								<div class="progress-bar progress-bar-danger progress-anim" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" ></div>
							</div>
						</div>
						</span>
					</div>
				</div>
			</div>
		</div>
		<!-- end about -->

		<div id="fh5co-resume" class="animate-on-scroll">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center ">
					<h2 class="main-heading">EDUCATION</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-md-offset-0">
					<ul class="timeline">

						<li class="timeline-inverted animate-box">
							<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<div class="flex-row timeline-title">
										<img src="./img/tick.svg" alt="">
										<div class="flex-col">
											<h1>Bachelor of Science, English Philology and Informatics Specialist</h1>
											<span>Witelon State University in Legnica</span>
										</div>
									</div>
									<div class="flex-row timeline-title">
										<img src="./img/tick.svg" alt="">
										<div class="flex-col">
											<h1>NPA Web Design and Software Development</h1>
											<span>SVQ lvl 5 Sighthill College Edinburgh</span>
										</div>
									</div>
									<div class="flex-row timeline-title">
										<img src="./img/tick.svg" alt="">
										<div class="flex-col">
											<h1> CodeSpace</h1>
											<span>SVQ lvl 5 Sighthill College Edinburgh</span>
										</div>
									</div>
									<div class="flex-row timeline-title">
										<img src="./img/tick.svg" alt="">
										<div class="flex-col">
											<h1>NPA Software Development and Web</h1>
											<span>SVQ lvl 6 Sighthill College Edinburgh</span>
										</div>
									</div>
									<div class="flex-row timeline-title">
										<img src="./img/tick.svg" alt="">
										<div class="flex-col">
											<h1>HNC Web Development BSc Web Development - University Route</h1>
											<span>Milton College Edinburgh</span>
										</div>
									</div>
									<div class="flex-row timeline-title">
										<img src="./img/tick.svg" alt="">
										<div class="flex-col">
											<h1>HND Web Development BSc Web Development - University Route</h1>
											<span>Milton College Edinburgh</span>
										</div>
									</div>



								</div>
							</div>
						</li>


			    	</ul>
				</div>
			</div>
		</div>
	</div>

		<!-- end contact -->

		<?php include("./includes/footer.php")?>
		<script src="js/index.js"></script>
		<script src="js/animateOnScroll.js"></script>
	</body>
</html>
