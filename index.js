// index.js

// Show loading message while the map is loading
document.getElementById('map').innerHTML = 'Loading map...';

// Load the Google Maps API dynamically with the API key from config.js
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCbMA-Plw3Ol4AHV5BrnrPSNjza36UNkfA&libraries=places&callback=initMap`;
script.async = true;
script.defer = true;

// Handle errors during script loading
script.onerror = function () {
  document.getElementById('map').innerHTML = 'Error loading map. Please try again later.';
};

// Append the script to the document
document.head.appendChild(script);

// Function to initialize the map
function initMap() {
  // Delay for 2 seconds before removing the loading message
  setTimeout(function () {
    // Remove loading message once the map is loaded
    document.getElementById('map').innerHTML = '';

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
  }, 2000); // 2000 milliseconds (2 seconds)
}


// Navbar Onscroll
var prevScroll = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScroll > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScroll = currentScrollPos;
}
