GitHubActivity.feed({
    username: "zachurich",
    selector: "#feed",
    limit: 5 // optional
});

$(document).ready(function() {
	$(function() {
    fadeInOnLoad();
		smoothScroll(200);
    workLoad();
	});

  function fadeInOnLoad() {
    const elem = document.getElementById('load');
    elem.style.opacity = 0;
    elem.style.transform = "translateY(100px)";
    window.requestAnimationFrame(function() {
        elem.style.transition = "all 500ms";
        elem.style.opacity = 1;
        elem.style.transform = "translateY(0px)";
    });
  }

	function smoothScroll (duration) {
		// find target element
		$('a[href^="#"]').on('click', function(event) {
			// targets href attr
			var target = $( $(this).attr('href') );
			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top -80
			}, duration);
			}
		});
	};

  document.addEventListener("touchstart", function(){}, true);
  // Scroll Animation Detection
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 100) {
      $('header').addClass('solid-header');
      $('header').removeClass('trans-header');
    } else {
      $('header').addClass('trans-header');
      $('header').removeClass('solid-header');
    }
    if(scroll >= 300) {
      $(".content-bubble.hideOnLoad").addClass("popIn");
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
      // Hide after certain amount of time
      $('.menu-button').removeClass('animate');
    } else {
      $('.menu-mobile').addClass('popIn');
      $('.menu-mobile').removeClass('slideDown');
      $('.menu-button').addClass('animate');
    }
  });

  // Listener for about section
    $('.button.blue-ghosted').on('click', function() {
      if($('.about-section').hasClass('slideLeft')) {
        $('.extended').hide(400);
        $('.about-section').addClass('slideRight');
        $('.about-section').removeClass('slideLeft');
      } else {
        $('.extended').show(100);
        $('.about-section').removeClass('slideRight');
        $('.about-section').addClass('slideLeft');
      }
    //  $('.flex-row').hide(2000);
    });

// Listener for work section
  var thumbs = $('.work-thumb');
  thumbs.on('click', function() {
    // console.log('Hello');
    $('.project-container').show();
    $('.work-section').removeClass('slideRight');
    $('.work-section').addClass('slideLeft');
   $('.flex-row > .work-thumb').hide(400);
  });
  $('.back-button').on('click', function() {
      $('.work-section').removeClass('slideLeft');
      $('.work-section').addClass('slideRight');
      $('.flex-row > .work-thumb').show(100);
      $('.project-container').hide(300);
  });

  function workLoad() {
    $.ajaxSetup({ cache: true });
    thumbs.on('click', function() {
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

  // Formspree stuff
  var form = $('form');
  form.submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: "https://formspree.io/re.jo@live.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json",
      success: function(data) {
        if(success = 'email sent'){
            console.log('Success!');
        }
      }
    });
  })

});
