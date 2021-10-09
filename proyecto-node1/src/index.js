const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('./database/connection');
//const { listStudents, createStudent, getStudent, modifyStudent, deleteStudent } = require('./controllers/studentsController');

const studentModel = require('./database/student');
/*const studentRouter = require('./routes/studentsRouter');
app.use('/students', studentRouter);*/

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
  console.log(req.params, req.body);
  studentModel.create(req.body).then((data) => {
    console.log('todo bien', data)
    res.json(data);
  }).catch(err => {
    res.status(500).send(err);
  });
});

app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  console.log('editar', req.params, req.body, req.headers);
  studentModel.findByIdAndUpdate(id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  // res.json({ message: 'Hola, vas a modificar algo' });
});

app.delete('/students/:id', (req, res) => {
  console.log('borrar', req.params);
  studentModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
  //res.json({ message: 'Hola, vas a borrar algo' });
});

//*************/

app.get('/teachers', (req, res) => {
  res.json({ message: 'Hola, vas a listar' });
  /* Conectarse a mongo, consultar los datos y retornarlos */
});


app.listen(5000, () => {
  console.log('Ya el servidor está corriendo!');
});