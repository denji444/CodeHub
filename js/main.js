$(function() {
	'use strict';

	var window_width = $(window).width(),
		window_height = window.innerHeight,
		header_height = $('.default-header').height(),
		header_height_static = $('.site-header.static').outerHeight(),
		fitscreen = window_height - header_height;

	$('.fullscreen').css('height', window_height);
	$('.fitscreen').css('height', fitscreen);

	//------- Header Scroll Class  js --------//

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.default-header').addClass('header-scrolled');
		} else {
			$('.default-header').removeClass('header-scrolled');
		}
	});

	if ($('select')) {
		$('select').niceSelect();
	}

	$('.img-pop-up').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// Search Toggle
	$('#search-input-box').hide();
	$('#search').on('click', function() {
		$('#search-input-box').slideToggle();
		$('#search-input').focus();
	});
	$('#close-search').on('click', function() {
		$('#search-input-box').slideUp(500);
	});

	// $('.navbar-nav>li>a').on('click', function(){
	//     $('.navbar-collapse').collapse('hide');
	// });

	//  Counter Js

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	$('.play-btn').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.popuar-course-carusel').owlCarousel({
		items: 4,
		loop: true,
		autoplay: true,
		margin: 30,
		nav: true,
		stagePadding: 60,
		navText: [ "<img src='img/prev.png'>", "<img src='img/next.png'>" ],
		responsive: {
			0: {
				items: 1,
				stagePadding: 0
			},
			575: {
				items: 2,
				stagePadding: 0
			},
			768: {
				items: 2,
				stagePadding: 0
			},
			992: {
				items: 3,
				stagePadding: 0
			},
			1200: {
				items: 3,
				stagePadding: 60
			},
			1440: {
				items: 4,
				stagePadding: 60
			}
		}
	});

	$('.video-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		margin: 30,
		nav: true,
		dots: false,
		navText: [ "<img src='img/prev.png'>", "<img src='img/next.png'>" ]
	});

	$('.testi-slider').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		margin: 30,
		nav: true,
		navText: [ "<img src='img/prev.png'>", "<img src='img/next.png'>" ]
	});


	


	$(document).ready(function() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	});
});
