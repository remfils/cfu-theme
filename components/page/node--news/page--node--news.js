(function ($) {
  var $gallery_container = $('.field--name-field-image-gallery > .field__items');

  var masonry = new Masonry($gallery_container, {
    itemSelector: '.field__items',
    columnWidth: '.field--name-field-image-gallery .field__items'
  });

  $('p img.align-right').unwrap();
})(jQuery, Drupal, drupalSettings);
