(function($, Drupal, drupalSetttings) {
  var $views = $('.view-carousel-struct-units');

  // move classes from struct points to slides
  $views.find('.slick__slider').each(function(index, item) {
    var struct_type = $(item).find('.struct-type').html().trim();
    // remove: filters debug output
    struct_type = struct_type.replace(/<!--([\s\S]*?)-->/mig, '').trim();

    $(item).addClass(struct_type);
  });

  
  // place arrows
  $views.append('<div class="slick__arrows"></div>');
  
  $carousel = $views.find('.view-content');

  function placeSlickArrows(e, slick, currentSlide) {
    var next_arrow = slick.$nextArrow[0];
    var prev_arrow = slick.$prevArrow[0];

    $views.find('.slick__arrows')
      .append(prev_arrow)
      .append(next_arrow);
  }

  $carousel.on('init', placeSlickArrows);
  $carousel.on('reInit', placeSlickArrows);

  // slick
  
  $carousel.slick({
    slidesToShow: 9,
    slidesToScroll: 9,
    infinite: false,
  });

  // filter buttons
  var struct_array = [];
  $('.struct-filter__btn').on('click', function(e) {
    var $this = $(this);

    $this.toggleClass('active');

    setupStructCarouselItems();
  });

  function setupStructCarouselItems() {
    var filter_classes = [];

    $('.struct-filter__btn').each(function(index, item) {
      if ($(item).hasClass('active')) {
        var filter_cls = $(item).attr('class').split(' ')[1].trim();

        filter_classes.push(filter_cls);
      }
    });

    toggleShowStructAllButton(filter_classes);

    $carousel.slick('slickUnfilter');

    $carousel.slick('slickFilter', function(index) {
      var $this = $(this);
      var i = filter_classes.length;

      if (!i)
        return true;
      
      while (i--) {
        if ($this.hasClass(filter_classes[i])) {
          return true;
        }
      }
      return false;
    });
  }

  function toggleShowStructAllButton (filter_classes) {
    if (filter_classes.length) {
      $('.struct-filter__btn-show-all').fadeIn(function() {
        $('.struct-filter__btn-show-all').addClass('struct-filter__btn-show-all--active');
      });
    }
    else {
      $('.struct-filter__btn-show-all').fadeOut(function() {
        $('.struct-filter__btn-show-all').removeClass('struct-filter__btn-show-all--active');
      });
    }
  }

  $('.struct-filter__btn-show-all').on('click', function() {
    $('.struct-filter__btn').each(function() {
      $(this).removeClass('active');
    });

    setupStructCarouselItems();
  });

})(jQuery, Drupal, drupalSettings)
