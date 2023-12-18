// index.js

function initMap() {
    // Create a map centered at a specific location
    var myLatLng = { lat: -34.397, lng: 150.644 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: myLatLng
    });
  
    // Add a marker to the map
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }
  
  // Load the Google Maps API dynamically with the API key from config.js
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCbMA-Plw3Ol4AHV5BrnrPSNjza36UNkfA&libraries=places&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
  