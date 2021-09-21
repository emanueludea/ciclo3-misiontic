const myImage = document.querySelector('img');
const myHeading = document.querySelector('h1');
const myButton = document.querySelector('button');
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/image.jpeg') {
    myImage.setAttribute('src', 'images/image2.jpeg');
  } else {
    myImage.setAttribute('src', 'images/image.jpeg');
  }
}
myButton.onclick = setUserName;
function setUserName() {
  let myName = prompt('Ingresa tu nombre.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bienvenido al programa MisionTIC, ' + myName;
  }
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bienvenido al programa MisionTIC, ' + storedName;
}