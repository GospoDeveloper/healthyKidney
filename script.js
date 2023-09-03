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

// display la click
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

let formLogin = document.getElementById("formLogin");
let inputUtilizator = document.querySelector(".inputUtilizator");
let inputParola = document.querySelector(".inputParola");
let buttonLogin = document.getElementById("btnLogin");
let buttonForgot = document.getElementById("btnForgot");
let formRegister = document.getElementById("formRegister");
let inputCreeareEmail = document.querySelector(".inputCreeareEmail");
let inputCreeareParola = document.querySelector(".inputCreeareParola");
let inputReintroducereParola = document.querySelector(
  ".inputReintroducereParola"
);
let buttonRegister = document.getElementById("btnRegister");

//trimitere date user
buttonRegister.addEventListener("click", function (e) {
  e.preventDefault();
  const user = inputCreeareEmail.value.toString().trim().toLowerCase();
  console.log(user);
  const parola = inputCreeareParola.value.toString().trim();
  console.log(parola);
  const repetareParola = inputReintroducereParola.value.toString().trim();
  console.log(repetareParola);
  alert("Functie inca nedefinita. Disponibila in curand");
});

buttonLogin.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Functie inca nedefinita. Disponibila in curand");
});

buttonForgot.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Functie inca nedefinita. Disponibila in curand");
});
