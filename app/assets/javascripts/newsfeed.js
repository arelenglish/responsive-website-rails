$(document).ready(function() {
    var left_column = $('#left-column');
    var news_feed = $('#news-feed');

    left_column.height(news_feed.height());
    $(window).resize(function(){
      left_column.height(news_feed.height());
    });
});
