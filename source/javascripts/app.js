//= require 'jquery'
//= require 'easing'

var cycleImages = function() {
  var $active = $('#cycler .active');
  var $next   = $active.next().length > 0 ? $active.next() : $('#cycler img:first');
  $active.removeClass('active');
  $next.addClass('active');
};

$(document).ready(function(){
  $('#cycler img:first').addClass('active');
  setInterval('cycleImages()', 6000); // Run every 6 seconds
});