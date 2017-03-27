(function ($) {
  // $('.field--name-field-image-gallery .field__items').slick({
  //   variableWidth: true,
  //   slidesToScroll: 3
  // });

  var $gallery_container = $('.field--name-field-image-gallery > .field__items');

  var msnry = new Masonry($gallery_container, {
    itemSelector: '.field__items',
    columnWidth: 100
  });
})(jQuery, Drupal, drupalSettings);
