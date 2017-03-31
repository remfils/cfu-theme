(function($, Drupal, drupalSetttings) {

  // ANOUNCMENTS

  var $anouncments = $('.anouncment-view');
  var $an_carousel = $anouncments.find('.view-content').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    draggable: false
  });
  
})(jQuery, Drupal, drupalSettings);
