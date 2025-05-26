<?php session_start(); ?>
<?php include("./php/init.php") ?>


<!DOCTYPE html>
<html lang="en">
	<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z9CXDLECBD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z9CXDLECBD');
</script>
			<!-- End Google Tag Manager -->
		<meta charset="utf-8">

		<title>Adrian Kotyra portfolio</title>

		<meta name="description" content="I'm Adrian Kotyra, a passionate Web and Software Development student at Edinburgh College,
		specializing in front-end and back-end development. I create responsive, user-friendly websites using HTML, CSS, JavaScript, React.js, PHP, and SQL.
		I have experience in UI/UX design and building full-stack applications with modern frameworks.
		My portfolio showcases a range of projects, from CMS platforms to interactive web applications.
		Constantly improving my skills, I aim to grow as a professional developer and contribute innovative solutions.
		I've completed multiple web development courses and continue advancing my expertise in React and PHP. Open to junior web development roles, I’m eager to apply my knowledge in real-world projects. Explore my portfolio to see my latest work and technical skills in action">
		<meta name="keywords" content="Adrian Kotyra, web developer, software developer, front-end development, back-end development, full-stack developer, HTML, CSS, JavaScript, React.js, PHP, SQL, UI/UX design, database management, CMS development, web applications, e-commerce development, responsive design, Edinburgh College, junior web developer, coding, programming, agile development, Node.js, portfolio, web design, software engineering, tech enthusiast">

		<meta name="author" content="Adrian Kotyra">

		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- animate -->
		<link rel="stylesheet" href="./css/animate.min.css">
		<!-- bootstrap -->
		<link rel="stylesheet" href="./css/bootstrap.min.css">
		<!-- font-awesome -->
		<link rel="stylesheet" href="./css/font-awesome.min.css">
		<!-- google font -->
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700,800' rel='stylesheet' type='text/css'>

		<!-- custom -->
		<link rel="stylesheet" href="./css/style.css">

	</head>
	<?php


	$current_page = basename($_SERVER['PHP_SELF']);

	?>
	<nav class="nav">
		<div class="nav-container">
			<div class="nav-links flex-row">
				<a href="index.php" class="<?php echo ($current_page == 'index.php') ? 'active-link' : ''; ?>">About</a>
				<a href="works.php" class="<?php echo ($current_page == 'works.php') ? 'active-link' : ''; ?>">Projects</a>
				<a href="contact.php" class="<?php echo ($current_page == 'contact.php') ? 'active-link' : ''; ?>">Contact</a>
				<?php
				global $user;
				global	$session;
				if($session->signed_in==true && $user->user_login == "admin") {
					?>
					<a href="admin/dashboard.php" class="<?php echo ($current_page == 'admin/dashboard.php') ? 'active-link' : ''; ?>">Admin</a>

					<?php
				}
				else {
					?>
					<a href="admin_login.php" class="<?php echo ($current_page == 'admin_login.php') ? 'active-link' : ''; ?>">Login</a>

					<?php
				}
				?>


			</div>
		</div>


	</nav>
