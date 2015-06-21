(function($, window, undefined) {
  $(function() {
    $('#mogan-content').fitVids();

    $('.mogan-post-preview').find('.content').each(function() {
      var p = $(this).find('> *').last();
      p.html(p.html() + '&hellip;');
    });

    $('#mogan-menu-toggle').on('click', function(e) {
      e.preventDefault();
      $('body').toggleClass('show-menu');
    });

    $(".posts_display_container").masonry({
      itemSelector: ".mogan-post-preview",
      isOriginLeft: true
    });

    var timeoutId;
    $(".mogan-post-preview").hover(function() {
      var the_post_card = this;
      if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
          timeoutId = null;
          $(".mogan-post-preview").not(the_post_card).animate({opacity: 0.2}, 1000);
          var post_link = $(the_post_card).children("h2").children("a").attr("href");
          $(the_post_card).wrap("<a href='" + post_link + "' class='postCardLink'></a>");
        }, 5000);
      }
    },
    function () {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
      } else {
        $(".mogan-post-preview").animate({opacity: 1}, 150, "easeOutExpo");
        $(this).unwrap();
      }
    }, this);

    $(window).load(function() {
      $(".mogan-post-preview").each(function(index) {
        $(this).delay(80*index).animate({opacity: 1}, 200);
      });
    });
  });
})(jQuery, window);