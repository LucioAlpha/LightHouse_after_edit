$(document).ready(function(){
	"use strict";

/*==================================
* Author        : "ThemeSine"
* Template Name : Listrace directory HTML Template
* Version       : 1.0
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. slick carousel
3. welcome animation support
4. feather icon
5. counter
6. Global error handling
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	// 2. slick carousel

	    $(".testimonial-carousel").slick({
	        infinite: true,
	        centerMode: true,
	        autoplay:true,
	        slidesToShow: 5,
	        slidesToScroll: 3,
	        autoplaySpeed:1500,
	        // the magic
			responsive: [
				{

					breakpoint:1440,
					settings: {
					slidesToShow:3
					}

				},
				{

					breakpoint: 1024,
					settings: {
					slidesToShow:2,
					
					}

				}, 
				{

					breakpoint:991,
					settings: {
					slidesToShow:2,
					centerMode:false,
					}

				},
				{

					breakpoint:767,
					settings: {
					slidesToShow:1,
					}

				}
			]
	    });



    // 3. welcome animation support

        $(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'1'});
        $(".welcome-hero-serch-box").addClass("animated fadeInDown").css({'opacity':'1'});

	// 4. feather icon

		feather.replace();

	// 5. counter
		$(window).on('load', function(){	
			$('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
			 // Confirmed cookie-related code is removed to avoid using cookies
		 });

	// 6. Global error handling
	window.onerror = function(message, source, lineno, colno, error) {
		console.error("Error occurred:", {
			message: message,
			source: source,
			lineno: lineno,
			colno: colno,
			error: error
		});
	};

	// Add network error handling
	$(document).ajaxError(function(event, jqxhr, settings, thrownError) {
		console.error("AJAX error occurred:", {
			url: settings.url,
			status: jqxhr.status,
			statusText: jqxhr.statusText,
			error: thrownError
		});
	});

});