(function ($) {
  Drupal.behaviors.frontCarousel = {
    attach: function (context) {
      $('.slick__slider', context).on('init', function (e, slick, currentSlide) {
        if (e.handled !== true) {

          var $nav_container = $('<div class="slick__controll-panel"></div>')
              .appendTo('.slick')
              .append('<h3 class="slick__fade-title">TEST</h3>')
          ;
          
          $('.slick-dots').appendTo($nav_container);
          $('.slick__arrow').appendTo($nav_container);
          
          e.handled = true;
        }
      });

      $('.slick__slider', context).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var current_slide_label = $(slick.$slides[nextSlide]).find('.views-field-title a').html();

        $('.slick h3').html(current_slide_label);
      });
    }
  }
})(jQuery, Drupal, drupalSettings);
