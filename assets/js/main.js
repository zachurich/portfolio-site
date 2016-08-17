GitHubActivity.feed({
    username: "zachurich",
    selector: "#feed",
    limit: 5 // optional
});


$(document).ready(function() {
  // Scroll Animation Detection
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        //clearHeader, not clearheader - caps H
        $(".content-1").addClass("popIn");
        window.setTimeout(function(){
          $('.content-2').addClass("popIn");
        }, 2000);
        window.setTimeout(function(){
          $('.content-3').addClass("popIn");
        }, 4000);
    }
});
  // First, detect if menu is open and close on click
  $(window).click(function() {
    if($('.menu-button').hasClass('animate')) {
      $('.menu-mobile').removeClass('slideOut');
      $('.menu-mobile').addClass('slideUp');
      $('.menu-button').removeClass('animate');
    }
  });
  $('.menu-button').on('click', function() {
    event.stopPropagation();
    if($('.menu-mobile').hasClass('slideOut')) {
      $('.menu-mobile').removeClass('slideOut');
      $('.menu-mobile').addClass('slideUp');
      $('.menu-button').removeClass('animate');
    } else {
      $('.menu-mobile').addClass('slideOut');
      $('.menu-mobile').removeClass('slideUp');
      $('.menu-button').addClass('animate');
    }
  });
  $('.work-thumb').on('click', function() {
    // console.log('Hello');
    $('.work-section').removeClass('slideRight');
    $('.work-section').addClass('slideLeft');
  //  $('.flex-row').hide(2000);
    $('.project-container').show();
  });
  $('.back-button').on('click', function() {
      $('.work-section').removeClass('slideLeft');
      $('.work-section').addClass('slideRight');
      $('.flex-row').show();
      $('.project-container').hide(500);
  });
  $('.read-more').on('click', function() {
    if($('.about-more').hasClass('grow')) {
      $('.about-more').removeClass('grow');
      $('.read-more').html('Read More');
    } else {
      $('.about-more').addClass('grow');
      $('.read-more').html('Read Less');
    }
  });
});
