/* Ejemplo tomado de https://www.javascripttutorial.net/javascript-callback/ */
function read(data) { //Sync function
  console.log(`Sync function printing ${data}`);
}
function download(url) { //Async function
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
  }, 3 * 1000);
}
function process(picture) { //Sync function
  console.log(`Processing ${picture}`);
}


const url = 'www.google.com';
/*read('hello');
download(url);
process(url);*/

downloadCb(url, process)


function downloadCb(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);

    // process the picture once it is completed
    callback(url);
  }, 3000);
}