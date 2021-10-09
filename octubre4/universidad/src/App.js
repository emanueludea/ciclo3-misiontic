import axios from 'axios';
import React from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.STUDENTS_URL = 'http://localhost:5000/students';
    this.emptyStudent = { _id: -1, dni: '', name: '', age: '', semester: '' };
    this.state = {
      students: [],
      selectedStudent: this.emptyStudent
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onEditStudent = this.onEditStudent.bind(this);
    this.onDeleteStudent = this.onDeleteStudent.bind(this);
    this.onClearStudent = this.onClearStudent.bind(this);
    this.onSaveStudent = this.onSaveStudent.bind(this);
  }

  componentDidMount() {
    axios.get(this.STUDENTS_URL).then((resp) => {

      console.log('Este es la respuesta de listar estudiantes', resp);
      this.setState({ students: resp.data })

    }).catch(err => {
      console.log('Hubo error listando los estudiantes', err);
    });
  }

  onFormChange(studentCurrentState) {
    console.log('cambió el formulario', studentCurrentState);
    this.setState({ selectedStudent: studentCurrentState });
  }

  onEditStudent(student) {

    console.log('quiero editar un estudiante', student);
    this.setState({ selectedStudent: student });

  }

  onDeleteStudent(studentId) {
    console.log('quiero eliminar un estudiante', studentId);
    axios.delete(`${this.STUDENTS_URL}/${studentId}`).then(data => {
      this.setState((state, props) => ({
        students: this.state.students.filter(st => st._id !== studentId),
        selectedStudent: this.emptyStudent
      }))
    }).catch(err => {
      console.log('hubo error borrando');
    });
  }

  onClearStudent() {
    console.log('vamos a limpiar el estudiante');
    this.setState({ selectedStudent: this.emptyStudent });
  }

  onSaveStudent(evt) {
    evt.preventDefault();
    const student = this.state.selectedStudent;
    if (student.name === '' || student.dni === '' || student.age === '' || student.semester === '') {
      alert('Hay errores en el formulario');
      return;
    }
    if (this.state.selectedStudent._id === -1) {
      console.log('vamos a hacer un POST', this.state.selectedStudent);
      axios.post(this.STUDENTS_URL, { ...student, _id: null }).then((resp) => {
        console.log('Todo bien con el post', resp);
        this.setState((state, props) => ({
          students: [...state.students, resp.data],
          selectedStudent: this.emptyStudent
        }))
      }).catch(err => {
        console.log('error al hacer post', err);
      });
    } else {
      console.log('vamos a hacer un PUT', this.state.selectedStudent);
      axios.put(`${this.STUDENTS_URL}/${student._id}`, { ...student }).then((resp) => {
        console.log('Todo bien con el put', resp);
        this.setState((state, props) => ({
          students: state.students.map(st => st._id === student._id ? student : st),
          selectedStudent: this.emptyStudent
        }))
      }).catch(err => {
        console.log('error al hacer post', err);
      });
    }
  }

  render() {
    return (
      <div className="container">
        <StudentList
          students={this.state.students}
          onEditStudent={this.onEditStudent}
          onDeleteStudent={this.onDeleteStudent}
        />
        <StudentForm
          student={this.state.selectedStudent}
          onFormChange={this.onFormChange}
          onClearStudent={this.onClearStudent}
          onSaveStudent={this.onSaveStudent}
        />
      </div >
    );
  }
}

export default App;
