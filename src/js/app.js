// CSS dependencies
require('../scss/main.scss');
require('font-awesome/css/font-awesome.css');

// JS dependencies
import 'bootstrap';
import 'popper.js';

import logo from '../images/logo.png';
$('#logo').attr('src', logo);

import icon from '../images/icon.png';
$('[rel="icon"]').attr('href', icon);

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

import photo_1 from '../images/dr_brandon_prusa.jpg';
import photo_2 from '../images/dr_john_vinckier.jpg';
import photo_3 from '../images/dr_cody_wilfinger.jpg';
$('#photo-1').attr('src', photo_1);
$('#photo-2').attr('src', photo_2);
$('#photo-3').attr('src', photo_3);

