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
  });
})(jQuery, window);