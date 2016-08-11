GitHubActivity.feed({
    username: "zachurich",
    selector: "#feed",
    limit: 5 // optional
});

// Click Events for Work Section
$(document).ready(function() {
  $('.menu-button').on('click', function() {
    if($('.menu-mobile').hasClass('slideOut')) {
      $('.menu-mobile').removeClass('slideOut');
      $('.menu-mobile').addClass('slideUp');
    } else {
      $('.menu-mobile').addClass('slideOut');
      $('.menu-mobile').removeClass('slideUp');
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
      $('.about-more').toggleClass('grow');
      $('.read-more').hide();
  });
});
