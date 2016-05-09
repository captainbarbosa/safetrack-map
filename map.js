// Start doing things only when DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

  mapboxgl.accessToken = 'pk.eyJ1IjoibmJiMTI4MDUiLCJhIjoiMUlFVjZWVSJ9.jeNyiaRq8MCHlXSlGQZIHA';

  // Initialize basemap
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/nbb12805/cinzc315l000fa4npg66ufnb6',
      center: [ -77.03656196594238,  38.89769637048576],
      zoom: 10
  });

});
