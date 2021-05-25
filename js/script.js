/* Preloader */
$(window).on('load', function() { //make sure  that full site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});


/* Team */
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: 2,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* Progress bar */
$(function() {

    $("#progress-elements").waypoint(function() {

        $(".progress-bar").each(function() {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});


/* Responsive tabs */
$(function() {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});


/* Portofolio */
$(window).on('load', function() {

    //Initialize isotope
    $("#isotope-container").isotope({
        //options 
    });

    //filter item button click
    $("#isotope-filters").on('click', 'button', function() {

        //get filter value
        var filtersValue = $(this).attr('data-filter');

        //filter portofolio
        $("#isotope-container").isotope({
            filter: filtersValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });
});


/*  Magnifier */
$(function() {
    $("#portofolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/* Testimonial Jquery */
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* Stats */

$(function() {

    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });

});



/* Clients */

$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* google Maps */
$(window).on('load', function() {

    //map variable
    var addressString = 'Cijawura Girang v , Bandung indonesia';
    var myLatlng = { lat: -6.946150, lng: 107.647370 };

    //render map
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 11;
            center: myLatlng;

        });

});