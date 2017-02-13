(function ($) {
  var $header = $('.header');
  var $control_header = $('.control-header');
  var $window = $(window);

  function makeHeaderFixed() {
    var scroll = $window.scrollTop();

    if (scroll >= 100) {
      $header.addClass('fixed');
      $control_header.addClass('controll-header--placeholder');
    }
    else {
      $header.removeClass('fixed');
      $control_header.removeClass('controll-header--placeholder');
    }
  }

  makeHeaderFixed();
  
  $window.scroll(makeHeaderFixed);
})(jQuery);
