const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('./database/connection');
//const { listStudents, createStudent, getStudent, modifyStudent, deleteStudent } = require('./controllers/studentsController');
const studentModel = require('./database/student');

// app.route('/students').get(listStudents).post(createStudent);
// app.route('/students/:id').get(getStudent).put(modifyStudent).delete(deleteStudent);

app.get('/students', (req, res) => {
  console.log(req.params);
  studentModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.get('/students/:id', (req, res) => {
  console.log(req.params);
  res.json({ message: 'Hola, vas a listar!!' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.post('/students', (req, res) => {
  console.log(req.params, req.body, req.headers);
  studentModel.create(
    {
      dni: 2323452354345
    }
  ).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
});

app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.params, req.body, req.headers);
  studentModel.findByIdAndUpdate(id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  // res.json({ message: 'Hola, vas a modificar algo' });
});

app.delete('/students/:id', (req, res) => {
  console.log(req.params);
  studentModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  //res.json({ message: 'Hola, vas a borrar algo' });
});

app.get('/teachers', (req, res) => {
  res.json({ message: 'Hola, vas a listar' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});

app.listen(5000, () => {
  console.log('Ya el servidor está corriendo!');
});