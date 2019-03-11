const mapboxgl = require('mapbox-gl');

function buildMarker(type, coordinates) {
  if (type === 'activity') {
    const activityDomEl = document.createElement('div');
    const activityMap = new mapboxgl.Marker(activityDomEl).setLngLat(
      coordinates
    );
    activityDomEl.setAttribute('id', 'activity');
    return activityMap;
  } else if (type === 'hotel') {
    const hotelDomEl = document.createElement('div');
    const hotelMap = new mapboxgl.Marker(hotelDomEl).setLngLat(coordinates);
    hotelDomEl.setAttribute('id', 'hotel');
    return hotelMap;
  } else if (type === 'restaurant') {
    const restaurantDomEl = document.createElement('div');
    const restaurantMap = new mapboxgl.Marker(restaurantDomEl).setLngLat(
      coordinates
    );
    restaurantDomEl.setAttribute('id', 'restaurant');
    return restaurantMap;
  }
}

// const iconURLS = {
//   hotels: "http://i.imgur.com/D9574Cu.png",
//   restaurants: "http://i.imgur.com/cqR6pUI.png",
//   activities: "http://i.imgur.com/WbMOfMl.png"
// }

// function addMarker(type, coords) {
//   type,

// }

// function activity() {
//   const activityDomEl = document.createElement('div');
//   new mapboxgl.Marker(activityDomEl)
//     .setLngLat([-74.009151, 40.705086])
//     .addTo(map);
//   activityDomEl.setAttribute('id', 'activity');
// }

// function hotel() {
//   const hotelDomEl = document.createElement('div');
//   new mapboxgl.Marker(hotelDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
//   hotelDomEl.setAttribute('id', 'hotel');
// }

// function restaurant() {
//   const restaurantDomEl = document.createElement('div');
//   new mapboxgl.Marker(restaurantDomEl)
//     .setLngLat([-74.009151, 40.705086])
//     .addTo(map);
//   restaurantDomEl.setAttribute('id', 'restaurant');
// }

module.exports = buildMarker;
