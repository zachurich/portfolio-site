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
    $('.project-box').removeClass('hidden');
    $('.flex-row').addClass('hidden');
  })
  $('.back-button').on('click', function() {
    $('.project-box').addClass('hidden');
    $('.flex-row').removeClass('hidden');
  })
});
