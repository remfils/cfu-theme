(function ($) {
  var $header = $('.header');
  var $window = $(window);

  function makeHeaderFixed() {
    var scroll = $window.scrollTop();

    if (scroll >= 100) {
      $header.addClass('fixed');
    }
    else {
      $header.removeClass('fixed');
    }
  }

  makeHeaderFixed();
  
  $window.scroll(makeHeaderFixed);
})(jQuery);
