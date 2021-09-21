import * as validation from '../form.json';
const email = document.getElementById("email");
email.checkValidity();

email.addEventListener("invalid", function (event) {
  alert(validation);
  if (email.validity.valueMissing) {
    email.setCustomValidity("Este es un valor requerido");
    // email.setCustomValidity(validation.email.valueMissing);
  } else if (email.validity.typeMismatch) {
    // email.setCustomValidity("Esto no es un email válido");
    alert(validation.email.valueMissing);
    email.setCustomValidity(validation.email.valueMissing);
  } else {
    email.setCustomValidity("");
  }
});

/*email.addEventListener("input", function (event) {
  // alert('hubo un input');
  if (email.validity.valueMissing) {
    // alert('no es un email válido');
    email.setCustomValidity("Este es un valor requerido");
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("Esto no es un email válido");
  } else {
    email.setCustomValidity("");
  }
});*/

/*email.oninvalid(() => {
  if (email.validity.valueMissing) {
    email.setCustomValidity("Este es un valor requerido");
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("Esto no es un email válido");
  } else {
    email.setCustomValidity("");
  }
});*/