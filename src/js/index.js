import logo from '../images/logo.png';
document.getElementById('logo').src = logo;

import popover from 'bootstrap/js/src/popover';
$('header .locations-summary').hide();
$('#popover-location-info').popover({
  container: 'body',
  html: true,
  trigger: 'hover',
  placement: 'bottom',
  content: $('header .locations-summary').html()
});

