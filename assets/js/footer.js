jQuery(function($) {

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

}(jQuery));
