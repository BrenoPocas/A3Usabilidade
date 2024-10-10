const form = document.querySelector('#formulario');
const divJson = document.querySelector('#divJson');
const botaoCopiar = document.querySelector('#botaoCopiar')
const json = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll('input')
  const temp = {};
  inputs.forEach(i => {
    if(i.type != 'submit') {
      temp[i.id] = i.value
    }
  })
  addToDataJson(temp);
});

function addToDataJson(obj) {
  json.push(obj);
  divJson.textContent = JSON.stringify(json);
}

botaoCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(divJson.textContent)
});