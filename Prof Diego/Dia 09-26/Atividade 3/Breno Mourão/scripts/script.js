const form = document.querySelector('#formulario');
const divJson = document.querySelector('#divJson');
const botaoCopiar = document.querySelector('#botaoCopiar')
const json = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const temp = {
    name: document.getElementById("name").value,
    imgPath: document.getElementById("imgPath").value,
    price: document.getElementById("price").value,
    horarios: document.getElementById("horarios").value,
  };
  addToDataJson(temp);
});

function addToDataJson(obj) {
  json.push(obj);
  divJson.textContent = JSON.stringify(json);
}

botaoCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(divJson.textContent)
});