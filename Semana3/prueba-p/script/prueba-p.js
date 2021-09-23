function clickEnParrafo() {
  prompt('asho');
  console.log('diste click');
  createParagraph();
}
function createParagraph() {
  let para = document.createElement('p');
  i++;
  para.textContent = 'Acabas de dar click en el párrafo inicial!' + i;
  document.body.appendChild(para);
}

let i = 0;

const parrafo = document.querySelector('.miP');
parrafo.addEventListener('click', clickEnParrafo);
