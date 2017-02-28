(function($, Drupal, drupalSetttings) {
  // more news display block

  var $more_link = $('.news-view .more-link');

  $more_link.click(function() {
    var $news_veiw = $('.news-view .view-content');
    var h = $news_veiw.height();

    $news_veiw.animate({height: h * 2}, 500);

    $more_link.unbind('click')
      .addClass('opened');
  });
})(jQuery, Drupal, drupalSettings);
