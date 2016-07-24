jQuery(function($) {
	// Smooth scrolling to anchors
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - $('.navigation-wrapper').outerHeight()
	    }, 900, 'swing' );
	});

	// Init Slick Carousels
    function slickInit(target, autoplay, autoplaySpeed, speed, fade, arrows, dots, show, prev, next) {
        $(target).slick({
            accessibility: true,
            arrows: arrows,
            autoplay: autoplay,
            autoplaySpeed: autoplaySpeed,
            cssEase: 'ease-in-out',
            dots: dots,
            fade: fade,
            prevArrow: prev,
            nextArrow: next,
            slidesToShow: show,
            speed: speed
        });
    }

    var venueCarousel = $('#venue-carousel');

    if ($(venueCarousel).length > 0) {
        slickInit(venueCarousel, true, 3000, 500, true, false, false, 1);
    }

    // Mobile Menu Toggle.

    var menuToggle = $('.menu-toggle');
    var menuTarget = $('.navigation-wrapper');
    var menuLinks  = $('.navigation a');

    menuToggle.on('click', function() {
        menuTarget.fadeToggle();
    });

    if (Modernizr.mq('all and (max-width: 767px)')) {
        menuLinks.on('click', function() {

            menuTarget.fadeToggle('fast');

        });
    }

}(jQuery));

/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

jQuery(function($) {

	$(window).on('resize', function(){
		$('.equal').attr( 'style', '' );
		$('.equal').equalHeights();
	});

	$('.equal').equalHeights();

}(jQuery));
