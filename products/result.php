<!doctype html>
<html lang="en">
	<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Favicons -->
	<link rel="icon" href="/assets/logo/logo.png">
	
    <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	
	<!-- Custom CSS -->
	<link rel="stylesheet" href="/style.css?v=2.2">

	<!-- Font Awesome -->
	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
	
	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
	
    <title>Levronka - Local Product</title>

	</head>
	<body>
	<div id="preloader">
		<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
	</div>
	<header class="header-area">
			<nav class="navbar fixed-top scrolling-navbar navbar-light border-bottom shadow-sm bg-white">
				<div class="container-fluid">
					
					<div id="mySidenav" class="sidenav">
						<div class="menu">Menu</div>
						<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
						<ul class="menu-list">
							<li><a href="/" class="animate-menu">Home</a></li>
							<li><a href="/products/categories" class="animate-menu">Products</a></li>
							<li><a href="how-to-order" class="animate-menu">How to Order</a></li>
							<li><a href="/contact" class="animate-menu">Contact Us</a></li>
							<li><a href="/about" class="animate-menu">About Us</a></li>
						</ul>

						<ul class="social">
							<li><a href="https://api.whatsapp.com/send?phone=6289682031068&text=Selamat%20Siang%20Levronka"><i class="fa fa-whatsapp"></i></a></li>
							<li><a href="https://www.instagram.com/levronka.official/"><i class="fa fa-instagram"></i></a></li>
							<li><a href="https://web.facebook.com/people/Levronka/100080210886801/"><i class="fa fa-facebook"></i></a></li>
							<li><a href="mailto:levronkaofficial@gmail.com"><i class="fa fa-envelope-o"></i></a></li>
						</ul>
					</div>
					
					<button class="navbar-toggler navbar-header w-180" style="text-align:left;color:black;" type="button" onclick="openNav()">
						<span class="navbar-toggler-icon navbar-brand"></span><span id="menu" style="font-size:0.75em;">Menu</span>
					</button>
						
					<div class="navbar-header mr-auto ml-auto">
						<a class="navbar-brand logo" href="/">
							<picture>
								<source srcset="/assets/logo/logo.png" media="(max-width: 768px)">
								<img src="/assets/logo/logo.png" alt="Nymar" height="60">
							</picture>
						</a>
					</div>
						
					<div class="navbar-header search" style="text-align:right;">
						<form action="/products/result.php" id="searchForm" method="get">
							<input type="text" name="s" id="search-input" placeholder="Search.." autocomplete="off">
						</form>
						
						<div class="notification navbar-brand">
							<div class="showFav">
								<img src="/images/ic_heart_ol.svg" height="34">
								<span class="badge">0</span>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
  
  	<section class="nav-category">
		<div class="container nav-avoid">
			<h5 class="text-center poppins">PRODUCTS</h5>
			<div class="container text-center">
				<div class="btn-group" role="group">
					<a href="hijab"><button type="button" class="btn-color-link">Hijab</button></a>
					<a href="one-set"><button type="button" class="btn-color-link">One Set</button></a>
					<a href="dress"><button type="button" class="btn-color-link">Dress</button></a>
				</div>
			</div>
		</div>
	</section>
  
	<?php
		$searchValue = $_GET["s"];
		$newValue = ucwords($searchValue);
    $data = file_get_contents('../js/products.json');
    $jsonArr = json_decode($data, true);
    $itemProduct = $jsonArr["products"];
		$status = 0;
		

		foreach ($itemProduct as $row) :
		if (preg_match("/\b$searchValue\b/i", $row["title"])){
			$status = 1;
		}
		endforeach;

	?>

	<section class="current-location">
		<div class="container-fluid py-2 bg-light text-center" id="block-mobile">
      <?php 
        if ($status == 1){
          echo '<h3 class="poppins" id="title-mobile">'.$newValue.'</h3>';
          echo '<div class="recent-page"><a href="/"><i class="fa fa-home" aria-hidden="true"> </i> Home </a> <i class="fa fa-angle-right" aria-hidden="true"> </i> '.$newValue.'</div>';
        }
        else {
          echo '<h3 class="poppins" id="title-mobile">'.$newValue.'</h3>';
          echo '<div class="recent-page"><a href="/"><i class="fa fa-home" aria-hidden="true"> </i> Home </a> <i class="fa fa-angle-right" aria-hidden="true"> </i> '.$newValue.'</div>';
        }
      ?>
			</div>
		</div>
		<div class="container current-page">
      <?php 
        if ($status == 1){
          echo '<div class="recent-page mt-2 py-3"><a href="index"><i class="fa fa-home" aria-hidden="true"> </i> Home </a> <i class="fa fa-angle-right" aria-hidden="true"> </i> '.$newValue.'</div>';
        }
        else {
          echo '<div class="recent-page mt-2 py-3"><a href="index"><i class="fa fa-home" aria-hidden="true"> </i> Home </a> <i class="fa fa-angle-right" aria-hidden="true"> </i> '.$newValue.'</div>';
        }
      ?>
		</div>
  </section>
  
  	<section class="product-items">
      <div class="container">
        <?php 
        if ($status == 1){
          echo '<h4 class="mt-1">You have searched <b>'.$newValue.'</b></h4>';
        }
        else {
          echo '<h4 class="mt-1 mb-5 pb-5">Sorry, your search did not match any results :(</h4>';
        }
        ?>
		    <div class="mt-4 product-search-dom row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 text-center" id="search-page">
          <?php foreach ($itemProduct as $row) : ?>
            <?php if (preg_match("/\b$searchValue\b/i", $row["title"])) : ?>
              <?php 
                $moneywithDot = $row["price"];
                $moneywithDot = number_format($moneywithDot,0,"",".");
              ?>
              <div class="col mb-4" id="product-id">
                <div class="card">
                  <div class="img-container">
                    <a href="detail?product=<?= $row["category"]?>?id=<?= $row["product_id"]?>" data-id="<?= $row["product_id"]?>" id="product-id">
                    <img src="../<?= $row["image_thumb"]?>" style="width:100%;" class="card-img-top"></a>
                  </div>
                  <div class="card-body">
                    <div class="product-name">
                      <a href="detail?product=<?= $row["category"]?>?id=<?= $row["product_id"]?>" data-id="<?= $row["product_id"]?>" id="product-id"><?= $row["title"]?></a>
                    </div>
                    <div class="product-price t-bold"><a href="detail?product=<?= $row["category"]?>?id=<?= $row["product_id"]?>" data-id="<?= $row["product_id"]?>" id="product-id">IDR. <?= $moneywithDot?></a></div>
                  </div>
                </div>
              </div>
            <?php endif; ?>
          <?php endforeach; ?>
        </div>
      </div>
	</section>
	
	<div class="fav-overlay">
		<div class="fav">
			<span class="close-fav">
				<i class="fa fa-window-close"></i>
			</span>
			<div class="container-fluid fav-area">
				<h2>Your Favorites</h2>
				<div class="fav-content">
				<!-- favorite item -->

				<!-- end of favorite item -->
				</div>
				<div class="fav-footer">
					<h3 class="mb-4">Your Total : IDR. <span class="fav-total">0</span></h3>
					<button class="banner-btn clear-fav mb-2">Clear Favorites</button>
					<a href="how-to-order"><span class="t-bold"><i class="fa fa-question-circle" aria-hidden="true"></i> How to Order</span></a>
				</div>
			</div>
		</div>
	</div>
	
	<footer class="bd-footer mt-5">
		<div class="container py-5">
			<div class="row">
				<div class="col-12 col-sm-6 col-md col-lg">
				  <h2 class="t-bold">Levronka</h2>
				  <a href="#!" class="grey">Desa. Margaasih 05/04, kecamatan Margaasih, kab. Bandung 40215</a><br>
					<div class="social-icon icon-socmed">
						<a href="https://web.facebook.com/people/Levronka/100080210886801/"><i class="fa fa-facebook-f p-1"></i></a>
						<a href="https://www.instagram.com/levronka.official/"><i class="fa fa-instagram p-1"></i></a>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md col-lg">
				  <h5 class="t-bold">INFORMATION</h5>
          <ul>
            <li><a href="/about">About Us</a></li>
						<li><a href="how-to-order">How to Order</a></li>
          </ul>
				</div>
				<div class="col-12 col-sm-6 col-md col-lg" id="cs-col">
          <h5 class="t-bold">LINKS</h5>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/products/categories">Products</a></li>
          </ul>
				</div>
				<div class="col-12 col-sm-6 col-md col-lg social-icon">
          <h5 class="t-bold">CONTACT US</h5>
          <ul>
            <li><a href="mailto:levronkaofficial@gmail.com">levronkaofficial@gmail.com</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=6289682031068&text=Selamat%20Siang%20Levronka">+62 896-8203-1068</a></li>
          </ul>
				</div>
			</div>
		</div>
    <div class="copyright">
		<div class="text-cr text-center">&copy; Copyright Levronka 2021 - <script>document.write(new Date().getFullYear());</script>. All Rights Reserved.</div>
    </div>
  </footer>
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
	
  <!-- JavaScript -->
  <script src="../js/script.js"></script>
  <script src="../js/favorite_item.js?v=1.2"></script>
	<script src="/js/app.js?v=1.5"></script>
	</body>
</html>