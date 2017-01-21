var API_URL = "http://api.romainmarbaix.dev/";

/*
 * Damn ie!
 * https://teamtreehouse.com/community/background-attachment-is-messed-up-in-ie-and-microsoft-edge
 */
if(navigator.userAgent.match(/MSIE 10/i)
  || navigator.userAgent.match(/Trident\/7\./)
  || navigator.userAgent.match(/Edge/)) {
    $('body').on("mousewheel", function () {
        event.preventDefault();
        var wd = event.wheelDelta;
        var csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
    });
}


var onLoad = function() {
    /*
     * Hide the loader
     */
    $('.loader').delay(200).fadeTo("slow", 0, function() {
        $('.loader').hide();
    });

    /*
     * Navbar is sticked to the top of the page when scrolling
     */
    $(window).scroll(function () {

        var navbar = $('.navbar');

        // Si le scroll est tout en haut de la page
        if ($(window).scrollTop() > 35) {
            if(! navbar.hasClass('unstick')) {
                navbar.addClass('unstick');
            }
        }
        // Si le scroll a dépassé le haut de la page
        else {
            if(navbar.hasClass('unstick')) {
                navbar.removeClass('unstick');
            }
        }

    });
}();

$( window ).load(onLoad);