

    /* For the sticky nav apearing */

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 850) {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});    

    /* Activate buttons: */

// go to plan section
$('.js--scroll-to-plans').click(function() {
    $("html, body").animate({ scrollTop: $('.js--section-plans').offset().top}, 1000);
});

// go to feature section

$('.js--scroll-to-start').click(function() {
    $("html, body").animate({ scrollTop: $('.js--section-features').offset().top}, 1000);
});

    /* Smooth Scroll from https://css-tricks.com/snippets/jquery/smooth-scrolling/ */

    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

    /* Animations scrolling */

$('.js--waypoint-1').waypoint(function(direction) {
    $('.js--waypoint-1').addClass('animated fadeIn'); 
  }, {
    offset: '50%'
  })

$('.js--waypoint-2').waypoint(function(direction) {
    $('.js--waypoint-2').addClass('animated bounceInOut'); 
  }, {
    offset: '50%'
  })

$('.js--waypoint-3').waypoint(function(direction) {
    $('.js--waypoint-3').addClass('animated fadeIn'); 
  }, {
    offset: '50%'
  })

$('.js--waypoint-4').waypoint(function(direction) {
    $('.js--waypoint-4').addClass('animated bounceOut'); 
  }, {
    offset: '50%'
  })

/* Mobile nav */  
$('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav');

  nav.slideToggle(200);
});
