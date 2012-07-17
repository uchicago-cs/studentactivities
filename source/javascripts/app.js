//= require 'jquery'

var cycleImages = function() {
  var $active = $('#cycler .active');
  var $next   = $active.next().length > 0 ? $active.next() : $('#cycler img:first-child');
  $active.removeClass('active');
  $next.addClass('active');
};

$(document).ready(function(){
  setInterval('cycleImages()', 6000); // Run every 6 seconds
});