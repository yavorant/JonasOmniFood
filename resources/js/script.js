

    /*
    $('.js--section-features').waypoint(function(direction) {
          if (direction == "down") {
              $('nav').addClass('sticky');
          } else {
            $('nav').removeClass('sticky');
          }
        }
      }) */

      
        


/* waypoints example:

var waypoint = new Waypoint({
  element: document.getElementById('direction-waypoint'),
  handler: function(direction) {
    notify('Direction: ' + direction)
  }
})

document.querySelector('.js--section-features');

var waypoint = new Waypoint({
    element: document.getElementById('px-offset-waypoint'),
    handler: function(direction) {
      notify('I am 20px from the top of the window')
    },
    offset: 20 
  })

    var waypoint = new Waypoint({
        element: document.querySelector('.js--section-features'),
        handler: function(direction) {
        notify('I am 20px from the top of the window')
        },
        offset: 20 
    })
*/



/*
$(window).scroll(function() {
    if ($(this).scrollTop() > -200) {
        $('nav').addClass("sticky");
    } else {
        $('nav').removeClass("sticky");
    }
*/
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 850) {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});    