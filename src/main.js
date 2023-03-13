
// Get the hamburger button and the menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav__links');

// Add event listener to the hamburger button
hamburger.addEventListener('click', function() {
  // Toggle the "show" class on the menu
  menu.classList.toggle('show');
});
