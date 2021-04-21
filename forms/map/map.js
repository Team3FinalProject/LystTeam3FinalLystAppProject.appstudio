let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.2565, lng: -95.9345 },
    zoom: 8,
  });
}