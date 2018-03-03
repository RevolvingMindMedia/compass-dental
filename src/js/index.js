import logo from '../images/logo.png';
document.getElementById('logo').src = logo;

import popover from 'bootstrap/js/src/popover';
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

