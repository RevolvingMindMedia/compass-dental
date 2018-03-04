// CSS dependencies
require('../scss/main.scss');
require('font-awesome/css/font-awesome.css');

// Image dependencies
import '../images/logo.png';
import '../images/icon.png';
import '../images/dr_brandon_prusa.jpg';
import '../images/dr_john_vinckier.jpg';
import '../images/dr_cody_wilfinger.jpg';

// JS dependencies
import 'bootstrap';
import 'popper.js';

$('#popover-content-location-info').hide();
$('[data-toggle="popover"]').popover({
  container: 'body',
  html: true,
  trigger: 'manual',
  placement: 'bottom',
  content: $('#popover-content-location-info').html()
});

$(document).on('click', function(e) {
  var target = e.target;

  if ($('[data-toggle="popover"]').is(target)) {
    $('[data-toggle="popover"]').popover('toggle');
  }
  else if ((!$('.popover').is(target)
          && $('.popover').has(target).length === 0)
          || $('.popover .close').has(target).length > 0) {
    $('[data-toggle="popover"]').popover('hide');
  }
});

