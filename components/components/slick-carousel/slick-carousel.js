(function ($) {
  Drupal.behaviors.frontCarousel = {
    attach: function (context) {
      var selector = '#block-views-block-testovaa-karusel-2-block-1';
      var $carousel = $(selector);
      
      $(selector, context).on('init', function (e, slick, currentSlide) {
        if (e.handled !== true) {
          var $current_slide = $(slick.$slides[slick.currentSlide])
          var current_slide_label = $current_slide.find('.views-field-title a').html();

          var $nav_container = $('<div class="slick__controll-panel"></div>')
              .appendTo($carousel)
              .append('<h3 class="slick__fade-title">' + current_slide_label + '</h3>');
          
          $carousel.find('.slick-dots').appendTo($nav_container);
          $carousel.find('.slick__arrow').appendTo($nav_container);
          
          e.handled = true;
        }
      });

      $(selector, context).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        if (currentSlide === nextSlide) {
          return;
        }
        
        var current_slide_label = $(slick.$slides[nextSlide]).find('.views-field-title a').html();

        var $title = $carousel.find('.slick__fade-title')
        $title.fadeOut(250, function () {
          $title.html(current_slide_label);
          $title.fadeIn(250);
        })

      });
    }
  }
})(jQuery, Drupal, drupalSettings);
