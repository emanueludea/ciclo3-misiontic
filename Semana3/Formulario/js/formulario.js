let validations;
fetch("./js/form.json")
  .then(response => {
    return response.json();
  }).then(data => {
    validations = data;
    console.log('este es el json del archivo', validations);
    setFieldValidations();
  }).catch((error) => {
    console.error('Error leyendo el json', error);
  });

function setFieldValidations() {
  const fieldList = Object.keys(validations);
  fieldList.forEach(element => {
    console.log(element);
    const field = document.getElementById(element);
    field.addEventListener("input", () => fieldValidation(element))
  });
}

function fieldValidation(name) {
  const field = document.getElementById(name);
  const fieldValidationMessages = validations[name];
  const keys = Object.keys(fieldValidationMessages);
  console.log(field.validity, name);
  field.setCustomValidity('');
  const errorDiv = field.nextElementSibling;
  errorDiv.textContent = '';
  if (field.validity.valid) {
    errorDiv.className = '';
    return true;
  }
  errorDiv.textContent = 'Verifica este campo';
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (field.validity[k]) {
      console.log(k, fieldValidationMessages[k]);
      // console.log(field.validity, fieldValidations[k]);
      errorDiv.textContent = fieldValidationMessages[k];
      // field.setCustomValidity(fieldValidationMessages[k]);
      break;
    }
  };
  errorDiv.className = 'error';
  // field.reportValidity();
  return false;
}

const form = document.getElementById('survey-form');
form.addEventListener('submit', function (event) {
  console.log(form.validity);
  const fieldList = Object.keys(validations);
  const results = fieldList.map(element => { return fieldValidation(element) });
  console.log(results);
  const valid = results.filter(r => r === false);
  if (valid.length > 0) {
    event.preventDefault();
  } else {
    alert('Está todo bien, podemos enviar el formulario!');
  }
});


// alert('si estoy acá')
/*const nombre = document.getElementById("name");
const email = document.getElementById("email");

// email.addEventListener("invalid", function () { alert('Es inválido'); });

email.addEventListener("input", () => fieldValidation('email'));
nombre.addEventListener("input", () => fieldValidation('name'));*/

/*function emailValidation(event) {
  console.log(email.validity, event)
  if (email.validity.valueMissing) {
    email.setCustomValidity(validations.email.valueMissing);
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity(validations.email.typeMismatch);
  } else {
    email.setCustomValidity("");
  }
  email.reportValidity();
}*/