// CSS dependencies
require('../scss/main.scss');
require('font-awesome/css/font-awesome.css');

// Image dependencies
import '../images/logo.png';
import '../images/icon.png';
import '../images/dr_brandon_prusa.jpg';
import '../images/dr_kyle_fairbanks.jpg';
import '../images/dr_cody_wilfinger.jpg';

// JS dependencies
import 'bootstrap';
import 'popper.js';

// Popover for menu bar

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

// Google Map for locations.html

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: new google.maps.LatLng(41.9398963, -87.6422766),
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  });

  var locations = [
    {name: 'Compass Dental at Lakeview', lat: 41.9398963, lng: -87.6422766, selector: '#lakeview'},
    {name: 'Compass Dental at Lincoln Square', lat: 41.968805, lng: -87.687942, selector: '#lincoln-square'},
    {name: 'Compass Dental at Rogers Park', lat: 42.012226, lng: -87.698552, selector: '#rogers-park'},
    {name: 'Compass Dental at Deerfield', lat: 42.165269, lng: -87.846144, selector: '#deerfield'}
  ];

  var bounds = new google.maps.LatLngBounds();
  var activeInfoWindow;

  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
      map: map,
      animation: google.maps.Animation.DROP,
      title: locations[i].name
    });

    bounds.extend(marker.position);

    var content = '<div style="color: #333; font-weight: 600; margin-bottom: 10px;">' +
                    locations[i].name +
                  '</div>' +
                  '<div style="margin-bottom: 5px;">' +
                    $(locations[i].selector).find('.address').find('a').html() +
                  '</div>' +
                  '<div style="margin-bottom: 10px;">' +
                    '<a href="' +
                        $(locations[i].selector).find('.address').find('a').attr('href') +
                        '" target="_blank">Directions</a>' +
                  '</div>' +
                  '<div style="margin-bottom: 5px;">' +
                    '<span style="font-weight: 500">Phone:</span> ' +
                    $(locations[i].selector).find('.phone-number').html() +
                  '</div>' +
                  '<div style="margin-bottom: 10px;">' +
                    '<span style="font-weight: 500">Hours:</span> ' +
                    $(locations[i].selector).find('.hours').html() +
                  '</div>' +
                  '<aside style="font-size: 12px">*Every other Saturday</aside>';

    marker.info = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', function() {
      if (activeInfoWindow) {
        activeInfoWindow.close();
      }
      this.info.open(map, this);
      activeInfoWindow = this.info;
    });
  }

  map.fitBounds(bounds);
}

window.initMap = initMap;

// Arrow animation for accordion on services.html

$('.service-heading').click(function() {
  var current_icon = $(this).find('span');
  $('span.rotate-icon').not(current_icon).removeClass('rotate-icon');
  current_icon.toggleClass('rotate-icon');
});

