const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".input");
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio");

console.log(campoObrigatorio);
console.log(inputs);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  inputs.forEach((input, index) => {
    let inputVazio = input.value === "";
    if (inputVazio) {
      input.classList.add("erro");
      input.classList.remove("sucesso");
      campoObrigatorio[index].classList.remove("esconder");
    } else {
      input.classList.remove("erro");
      input.classList.add("sucesso");
      campoObrigatorio[index].classList.add("esconder");
    }
  });
}
