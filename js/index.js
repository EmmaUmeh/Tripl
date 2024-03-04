// index.js

// Show loading message while the map is loading
// document.getElementById('map').innerHTML = 'Loading map...';

// // Load the Google Maps API dynamically with the API key from config.js
// const script = document.createElement('script');
// script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCbMA-Plw3Ol4AHV5BrnrPSNjza36UNkfA&libraries=places&callback=initMap`;
// script.async = true;
// script.defer = true;

// // Handle errors during script loading
// script.onerror = function () {
//   document.getElementById('map').innerHTML = 'Error loading map. Please try again later.';
// };

// // Append the script to the document
// document.head.appendChild(script);

// // Function to initialize the map
// function initMap() {
//   // Delay for 2 seconds before removing the loading message
//   setTimeout(function () {
//     // Remove loading message once the map is loaded
//     document.getElementById('map').innerHTML = '';

//     var myLatLng = { lat: -34.397, lng: 150.644 };
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 8,
//       center: myLatLng
//     });

//     // Add a marker to the map
//     var marker = new google.maps.Marker({
//       position: myLatLng,
//       map: map,
//       title: 'Hello World!'
//     });
//   }, 2000); // 2000 milliseconds (2 seconds)
// }


// // Navbar Onscroll
// var prevScroll = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScroll > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
    
//   } else {
//     document.getElementById("navbar").style.top = "-10px";
//   }
//   prevScroll = currentScrollPos;
// }

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
  var elements = document.querySelectorAll('.initial-state');
  elements.forEach(function (element) {
    if (isInViewport(element)) {
      element.classList.add('animate__animated', 'animate__backInLeft');
      element.classList.remove('initial-state');
    }
  });
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Trigger the handleScroll function on page load
window.addEventListener('load', handleScroll);



function FooterDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  document.getElementById("footer-year").textContent = year;
}

FooterDate();




// function openNav() {
//   document.getElementById("nav").style.height = "100%";
// }

// /* Close */
// function closeNav() {
//   document.getElementById("nav").style.height = "0%";
// }