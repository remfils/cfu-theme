(function ($) {
  var $gallery_container = $('.field--name-field-image-gallery > .field__items');

  $gallery_container.masonry({
    itemSelector: '.field__item',
    columnWidth: $gallery_container.find('.field__item').get(0),
    gutter: 5
  });

  $('p img.align-right').unwrap();
})(jQuery, Drupal, drupalSettings);
