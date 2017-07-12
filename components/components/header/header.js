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


  // menu mobile header show
  var $main_menu_container = $('.header');

  $('.main-menu__mobile-btn').click(function(e) {
    if (e)
      e.preventDefault();

    $main_menu_container.toggleClass('main-menu--show-mobile');
  })
})(jQuery);
