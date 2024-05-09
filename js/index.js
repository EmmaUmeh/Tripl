// index.js

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
  var elementsUp = document.querySelectorAll('.initial-stateUp');
  elements.forEach(function (element) {
    if (isInViewport(element)) {
      element.classList.add('animate__animated', 'animate__backInLeft');
      element.classList.remove('initial-state');
    }
  });

  elementsUp.forEach(function (element) {
    if (isInViewport(element)) {
      element.classList.add('animate__animated', 'animate__backInUp');
      element.classList.remove('initial-stateUp');
    }
  })
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



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



let toggle = false;

function toggleMenu() {
    const offcanvasNavbar = document.getElementById("offcanvasNavbar");
    const closeButton = document.getElementById("closeButton");
    const toggleIcon = document.getElementById("toggleIcon");

    if (toggle) {
        // Close the menu
        offcanvasNavbar.style.display = "none";
        
        closeButton.style.display = "none";
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
    } else {
        // Open the menu
        offcanvasNavbar.style.display = "block";
        offcanvasNavbar.style.width = "100%"
        closeButton.style.display = "block";
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-times");
    }

    toggle = !toggle; // Toggle the state
}
// function openNav() {
//   document.getElementById("nav").style.height = "100%";
// }

// /* Close */
// function closeNav() {
//   document.getElementById("nav").style.height = "0%";
// }