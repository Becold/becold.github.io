/*
 * Helpers
 */
function setHash(value)
{
    if(history.pushState) {
        history.pushState(null, null, value);
    }
    else {
        location.hash = value;
    }
}

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

/*
 * App
 */
// Hide the loader on load
$( window ).load(function() {
    $('.loader').delay(100).fadeOut();
    onScroll();
});


// Correct the scrolltop on load with anchor
$(window).on('load hashchange', function(event) {

    var target = $(location.hash);

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - $('nav').height()
        }, 300);
    }

});


// Scroll animation
$('a[href^="#"]').on('click', function(event) {

    var hash = $(this).attr('href');
    var target = $(hash);

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - $('nav').height()
        }, 300);
        setHash(hash);
    }

});


// On scroll
$(window).scroll(onScroll);

function onScroll() {
    // Parallax
    $('.header').css({'background-position': '50% ' + ( $(window).scrollTop() - $('.header').offset().top ) * -.4 + 'px'});
    $('.section#portfolio').css({'background-position': '0px ' + -( $(window).scrollTop() - $('.section#portfolio').offset().top ) * -.6 + 'px'});

    // Sticky navbar
    var navbar = $('.navbar');

    if ($(window).scrollTop() > 35) {
        if(! navbar.hasClass('unstick')) {
            navbar.addClass('unstick');
        }
    }
    else {
        if(navbar.hasClass('unstick')) {
            navbar.removeClass('unstick');
        }
    }
};