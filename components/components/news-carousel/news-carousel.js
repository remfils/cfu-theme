(function ($) {
  Drupal.behaviors.frontCarousel = {
    attach: function (context) {
      $('#block-views-block-testovaa-karusel-2-block-1 .slick__slider', context).on('init', function (e, slick, currentSlide) {
        if (e.handled !== true) {
          var $current_slide = $(slick.$slides[slick.currentSlide])
          var current_slide_label = $current_slide.find('.views-field-title a').html();

          var $nav_container = $('<div class="slick__controll-panel"></div>')
              .appendTo('.slick')
              .append('<h3 class="slick__fade-title">' + current_slide_label + '</h3>');
          
          $('.slick-dots').appendTo($nav_container);
          $('.slick__arrow').appendTo($nav_container);
          
          e.handled = true;
        }
      });

      $('.slick__slider', context).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        if (currentSlide === nextSlide) {
          return;
        }
        
        var current_slide_label = $(slick.$slides[nextSlide]).find('.views-field-title a').html();

        var $title = $('.slick .slick__fade-title')
        $title.fadeOut(250, function () {
          $('.slick .slick__fade-title').html(current_slide_label);
          $title.fadeIn(250);
        })

      });
    }
  }
})(jQuery, Drupal, drupalSettings);
