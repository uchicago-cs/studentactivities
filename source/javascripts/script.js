var cycleImages = function() {
  var $active = $('#portfolio_cycler .active');
  var $next   = ($active.next().length > 0) ? $active.next() : $('#portfolio_cycler img:first');

  $next.css('z-index',2);                                   // Move the next image up the pile
  $active.fadeOut(1500, function() {                        // Fade out the top image
    $active.css('z-index',1).show().removeClass('active');  // Reset the z-index and unhide the image
    $next.css('z-index',3).addClass('active');              // Make the next image the top one
  });
};

$(document).ready(function(){
  setInterval('cycleImages()', 4000); // Run every 4 seconds
});