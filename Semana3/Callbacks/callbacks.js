/* Callback es una función que se pasa como argumento de otra función */
function f1(n) {
  for (let i = 0; i < n; i++) {
    console.log('f1 into the loop', i);
  }
  console.log('f1', n);
}

function f2(n, callback) {
  console.log('f2', n);
  callback(n * 2);
}

// f1(5);

// f2(3, f1);

console.log('fin');

f2(10, function () {
  console.log('esto es una funcion anónima');
});
f2(10, () => {
  console.log('esto es una "arrow function"');
});