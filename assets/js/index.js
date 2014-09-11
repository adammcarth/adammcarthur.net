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

    $(".shiny").shiningImage({
      color : "#FFFFFF",
      opacity : 0.25,
      playOnLoad: false,
      scale : 0.5,
      speed : 20,
      delay : 3000
    });
  });
})(jQuery, window);