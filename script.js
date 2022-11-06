const utilizator = document.getElementById("utilizator");
const parola = document.getElementById("parola");
const login = document.getElementById("btnLogare");
const form = document.getElementById("form");

login.addEventListener("click", function (e) {
  e.preventDefault();
  const numeUtilizator = utilizator.value;
  const parolaUtilizator = parola.value;
  console.log(numeUtilizator, parolaUtilizator);
});
