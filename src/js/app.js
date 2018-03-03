// CSS dependencies
require('../scss/main.scss');
require('font-awesome/css/font-awesome.css');

// JS dependencies
import 'jquery';
import 'bootstrap';
import 'popper.js';

import logo from '../images/logo.png';
document.getElementById('logo').src = logo;

$('#popover-content-location-info').hide();
$('#popover-location-info').popover({
  container: 'body',
  html: true,
  trigger: 'click',
  placement: 'bottom',
  content: $('#popover-content-location-info').html()
});

$('.close').click(function() {
  alert('clicked');
  $('#popover-location-info').popover('hide');
});

