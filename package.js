$(document).ready(function() {
    // Create a tooltip div
    $('body').append('<div id="tooltip" style="position: absolute; display: none; background-color: #000; color: #FFCC00; padding: 8px 12px; border-radius: 5px; font-size: 14px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); max-width: 200px; word-wrap: break-word;"></div>');
  
    // Show tooltip on hover
    $('.card-img').hover(function(event) {
      var tooltipText = $(this).attr('title');
      $('#tooltip').text(tooltipText).show();
    }, function() {
      $('#tooltip').hide();
    });
  
    // Move tooltip with mouse
    $('.card-img').mousemove(function(event) {
      $('#tooltip').css({
        top: event.pageY + 10 + 'px',
        left: event.pageX + 10 + 'px'
      });
    });
  });
  