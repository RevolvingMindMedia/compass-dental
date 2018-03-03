// CSS dependencies
require('../scss/main.scss');
require('font-awesome/css/font-awesome.css');

// JS dependencies
import 'jquery';
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

$('[data-toggle="popover"]').click(function(e) {
  $('[data-toggle="popover"]').popover('toggle');
});

$(document).on('click', '.popover .close', function() {
  $('[data-toggle="popover"]').popover('hide');
});

