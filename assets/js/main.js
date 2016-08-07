GitHubActivity.feed({
    username: "zachurich",
    selector: "#feed",
    limit: 5 // optional
});

// Click Events for Work Section
$(document).ready(function() {
  // smoothScroll function is applied from the document ready function
  $('a[href="#1"]').on('click', function() {
    // console.log('Hello');
    $('.work-section').css('left', '-100%');
  })
  $('.back-button').on('click', function() {
      $('.work-section').css('left', '0%');
  })
});
