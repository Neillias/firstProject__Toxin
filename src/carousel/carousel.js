$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        nav: true,
        navText: ['<i class="material-icons">navigate_before</i>', '<i class="material-icons">navigate_next</i>'],
        dots: true,
        dotsEach: true
    });
  });