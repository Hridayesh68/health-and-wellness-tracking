// health.js

// Example JavaScript functionality

// Function to log a message when the page is fully loaded
window.onload = function() {
    console.log("Page fully loaded.");
}

// Example function to handle a click event
function handleClick(event) {
    event.preventDefault();
    console.log("Link clicked:", event.target.href);
}

// Adding event listeners to all the navigation links
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav ul li a");
    links.forEach(function(link) {
        link.addEventListener("click", handleClick);
    });
});
