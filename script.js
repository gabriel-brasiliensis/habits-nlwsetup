const modal = document.getElementById("modal");
const form = document.querySelector("#habits-form");
const registerDayButton = document.querySelector("#register-day");
const modalShowButton = document.querySelector("#show-modal")
const modalCloseButton = document.querySelector("#close-modal")

const nlwSetup = new NLWSetup(form);

registerDayButton.addEventListener("click", addDay);
modalShowButton.addEventListener("click", showModal)
modalCloseButton.addEventListener("click", hideModal)
form.addEventListener("change", save);

function showModal() {
  modal.classList.add("show-modal")
}

function hideModal() {
  modal.classList.remove("show-modal")
}

function addDay() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);

  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("O dia já existe, ele não será criado.");
    return;
  }

  alert("Esse dia ainda não existe, estamos criando ele agora.");
  nlwSetup.addDay(today);
}

function addHabit() {

}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
