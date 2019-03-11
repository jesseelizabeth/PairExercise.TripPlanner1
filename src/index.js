console.log('I am working!!');
const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiamV2YW5zNDUzIiwiYSI6ImNqdDRqN3FvcjJ0NXM0OW9kc2JucG9pZmsifQ.2W_N5YwXEa6uyYkl3LmB9w';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement('div');

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

// markerDomEl.setAttribute('id', 'marker');

const activityMarker = buildMarker('hotel', [-74.009151, 40.705086]).addTo(map);
