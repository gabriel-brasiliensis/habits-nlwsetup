const form = document.querySelector("#habits-form");
const button = document.querySelector("header button");

const nlwSetup = new NLWSetup(form);

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);

  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("O dia já existe, ele não será criado.");
    return;
  }

  alert("Esse dia ainda não existe, estamos criando ele agora.");
  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
