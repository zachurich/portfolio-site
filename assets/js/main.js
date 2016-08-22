GitHubActivity.feed({
    username: "zachurich",
    selector: "#feed",
    limit: 5 // optional
});

$(document).ready(function() {

  var thumbs = $('.work-thumb');

  document.addEventListener("touchstart", function(){}, true);
  // Scroll Animation Detection
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $(".content-1").addClass("popIn");
    }
});
  // Close menu when click outside if open
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.mobile-menu').length && $('.menu-mobile').hasClass('slideOut')) {
      $('.menu-mobile').removeClass('popIn');
      $('.menu-mobile').addClass('slideDown');
      $('.menu-button').removeClass('animate');
    }
  });

  // Mobile Menu click function
  $('.menu-button').on('click', function() {
    if($('.menu-mobile').hasClass('popIn')) {
      $('.menu-mobile').removeClass('popIn');
      $('.menu-mobile').addClass('slideDown');
      $('.menu-button').removeClass('animate');
    } else {
      $('.menu-mobile').addClass('popIn');
      $('.menu-mobile').removeClass('slideDown');
      $('.menu-button').addClass('animate');
    }
  });
  thumbs.on('click', function() {
    // console.log('Hello');
    $('.project-container').show();
    $('.work-section').removeClass('slideRight');
    $('.work-section').addClass('slideLeft');
  //  $('.flex-row').hide(2000);
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

  function workLoad() {
    $.ajaxSetup({ cache: true });
    thumbs.on('click', function() {
      // Define thumbs as 'this'
      var $this = $(this),
          // get proj title from thumb img alt text
          title = $(this).children("img").attr("alt"),
          // get proj folder from thumb data attr
          folder = $this.data('folder'),
          // get appropriate folder
          newHTML = 'projects/' + folder + '.html';
      // Load all the stuff
      $('.content-content').load(newHTML);
      $('.content-title').children('h1').html(title);
    })
  };
  workLoad();

});
