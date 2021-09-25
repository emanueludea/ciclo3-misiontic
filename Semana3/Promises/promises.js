/**
 * Tomado de: https://www.javascripttutorial.net/es6/javascript-promises/
 *
 * Supongamos que prometes aprender JavaScript en las próximas 4 semanas.
 * La promesa puede tomar 3 estados:
 *  Pending: No se sabe si se va a cumplir o no.
 *  Fulfilled: Cumpliste tu promesa, aprendiste en 4 semanas.
 *  Rejected: No aprendiste ni poquito.
 * La promesa inicia en el estado y termina existosamente (fulfilled) o
 * fallida (failed).
 * 
 * Callback hell y métodos de las promesas
 * https://dev.to/jsmanifest/callbacks-vs-promises-in-javascript-2d5k
*/
let completed = true;

let learnJS = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (completed) {
      resolve("I have completed learning JS.");
    } else {
      reject("I haven't completed learning JS yet.");
    }
  }, 3 * 1000);
});
// learnJS.then(ok => console.log(ok), error => console.error(error));
learnJS.then(console.log).catch(console.error).finally(() => { console.log('we have finished!') })