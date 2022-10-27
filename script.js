const utilizator = document.getElementById("utilizator").value;
const parola = document.getElementById("parola").value;
const login = document.getElementById("btnLogare");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
console.log(login);

const check = function (utilizator, parola) {
  console.log("Click");
  console.log(utilizator, parola);
  if (utilizator === "Alex" && parola === "parola") {
    alert("Welcome");
  }
};

login.addEventListener("click", check);
