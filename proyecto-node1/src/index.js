const express = require('express');

const mongoose = require('./database/conection');
const students = require('./database/student');

const app = express();

app.get('/teachers', (req, res) => {
  res.json({ message: 'Hola, vas a listar' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.get('/students', (req, res) => {
  console.log(req.params);
  students.find().then(data => req.json(data)).catch(err => res.send(err));
  // res.json({ message: 'Hola, vas a listar!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.post('/students', (req, res) => {
  students.insert({ dni: 465, name: 'asdf asd f', age: 87, semester: 98 }).then(data => req.json(data)).catch(err => res.send(err));
  res.json({ message: 'Hola, vas a crear algo nuevo' });
});

app.put('/students', (req, res) => {
  res.json({ message: 'Hola, vas a modificar algo' });
});

app.delete('/students', (req, res) => {
  res.json({ message: 'Hola, vas a borrar algo' });
});

app.listen(5000, () => {
  console.log('Ya el servidor está corriendo!');
});