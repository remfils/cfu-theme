(function ($) {
  var $gallery_container = $('.field--name-field-image-gallery > .field__items');

  var msnry = new Masonry($gallery_container, {
    itemSelector: '.field__items',
    columnWidth: 100
  });

  $('p img.align-right').unwrap();
})(jQuery, Drupal, drupalSettings);
