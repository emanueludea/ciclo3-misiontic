let validations;
fetch("./js/form.json").then(response => { return response.json(); }).then(data => { validations = data; console.log(validations) });
// alert('si estoy acá')
const email = document.querySelector("#email");

// email.addEventListener("invalid", function () { alert('Es inválido'); });

email.addEventListener("input", emailValidation);

function emailValidation(event) {
  // console.log(email.validity)
  if (email.validity.valueMissing) {
    email.setCustomValidity(validations.email.valueMissing);
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity(validations.email.typeMismatch);
  } else {
    email.setCustomValidity("");
  }
  email.reportValidity();
}