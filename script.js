// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let loginWindow = document.getElementById("loginWindow");
let navLogin = document.getElementById("navLogin");
let continut = document.getElementById("continut");

let num = 0;
navLogin.addEventListener("click", function () {
  num++;
  if (num % 2 !== 0) {
    loginWindow.classList.add("displayNone");
    continut.classList.add("displayOff");
  } else {
    loginWindow.classList.remove("displayNone");
    continut.classList.remove("displayOff");
  }
});
