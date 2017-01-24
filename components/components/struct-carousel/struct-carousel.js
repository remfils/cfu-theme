(function($, Drupal, drupalSetttings) {
  var $views = $('.view-carousel-struct-units');

  $views.find('.slick__slider').each(function(index, item) {
    console.log($(item));
    console.log($(item).find('.struct_type').html());
  });
  
  $views.find('.view-content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false
  });
  
})(jQuery, Drupal, drupalSettings)
