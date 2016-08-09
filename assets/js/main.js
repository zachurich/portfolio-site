GitHubActivity.feed({
    username: "zachurich",
    selector: "#feed",
    limit: 5 // optional
});

// Click Events for Work Section
$(document).ready(function() {
  // smoothScroll function is applied from the document ready function
  $('.work-thumb').on('click', function() {
    // console.log('Hello');
    $('.work-section').css('left', '-100%');
  //  $('.flex-row').hide(2000);
    $('.project-container').show();
  })
  $('.back-button').on('click', function() {
      $('.work-section').css('left', '0%');
      $('.flex-row').show();
      $('.project-container').hide(500);
  })
});
