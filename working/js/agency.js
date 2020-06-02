(function($) {
  "use strict"; // Start of use strict

animation();

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict


  //TweenMax
function animation() {
  var $cloud1 = $('.cloud1');
    var $cloud2 = $('.cloud2');
    var $cloud3 = $('.cloud3');
      var $cloud4 = $('.cloud4');
          var $balloon = $('.balloon');
  TweenMax.to($cloud1, 40, {x:500, yoyo:true, repeat:-1, ease: Linear.easeNone});
  TweenMax.to($cloud2, 20, {x:-200, yoyo:true, repeat:-1, ease: Cubic.easeNone});
  TweenMax.to($cloud3, 30, {x:300, yoyo:true, repeat:-1, ease: Cubic.easeNone});
  TweenMax.to($cloud4, 50, {x:-400, yoyo:true, repeat:-1, ease: Cubic.easeNone});
  TweenMax.to($balloon, 5, {y:20, yoyo:true, repeat:-1, ease: Cubic.easeOut});
}
