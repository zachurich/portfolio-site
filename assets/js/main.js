GitHubActivity.feed({
    username: "zachurich",
    selector: "#feed",
    limit: 5 // optional
});

// Click Events for Work Section
$(document).ready(function() {
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
    $('.work-section').css('left', '-100%');
  //  $('.flex-row').hide(2000);
    $('.project-container').show();
  });
  $('.back-button').on('click', function() {
      $('.work-section').css('left', '0%');
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
