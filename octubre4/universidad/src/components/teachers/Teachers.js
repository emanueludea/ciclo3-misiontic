import React from "react";
import axios from "axios";

import { TeacherForm } from "./TeacherForm";
import { TeacherList } from "./TeacherList";

export class Teachers extends React.Component {

  TEACHERS_URL = `${this.props.BASE_URL}/teachers`;

  emptyTeacher = { _id: -1, dni: '', name: '', phone: '', office: '' };

  state = {
    teachers: [],
    selectedTeacher: this.emptyTeacher
  };

  componentDidMount() {
    axios.get(`${this.TEACHERS_URL}`).then((resp) => {

      console.log('Este es la respuesta de listar profesores', resp);
      this.setState({ teachers: resp.data })

    }).catch(err => {
      console.log('Hubo error listando los estudiantes', err);
    });
  }

  onEdit = (teacher) => {
    this.setState({ selectedTeacher: teacher });
  }

  onDelete = (teacherId) => {
    axios.delete(`${this.TEACHERS_URL}/${teacherId}`).then(data => {
      this.setState((state, props) => ({
        teachers: this.state.teachers.filter(t => t._id !== teacherId),
        selectedTeacher: this.emptyTeacher
      }))
    }).catch(err => {
      console.log('hubo error borrando');
    });
  }

  onSave = (evt) => {
    evt.preventDefault();
    const teacher = this.state.selectedTeacher;
    if (teacher.dni === '') {
      alert('Hay errores en el formulario');
      return;
    }
    if (this.state.selectedTeacher._id === -1) {
      axios.post(`${this.TEACHERS_URL}`, { ...teacher, _id: null }).then((resp) => {
        this.setState((state, props) => ({
          teachers: [...state.teachers, resp.data],
          selectedTeacher: this.emptyTeacher
        }))
      }).catch(err => {
        console.log('error al hacer post', err);
      });
    } else {
      axios.put(`${this.TEACHERS_URL}/${teacher._id}`, { ...teacher }).then((resp) => {
        this.setState((state, props) => ({
          teachers: state.teachers.map(t => t._id === teacher._id ? teacher : t),
          selectedTeacher: this.emptyTeacher
        }))
      }).catch(err => {
        console.log('error al hacer post', err);
      });
    }
  }

  onClear = () => {
    this.setState({ selectedTeacher: this.emptyTeacher });
  }

  onChange = (teacherCurrentState) => {
    this.setState({ selectedTeacher: teacherCurrentState });
  }

  render() {
    return (
      <div className="container">
        <TeacherList
          teachers={this.state.teachers}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
        <TeacherForm
          teacher={this.state.selectedTeacher}
          onSave={this.onSave}
          onClear={this.onClear}
          onChange={this.onChange}
        />
      </div >
    );
  }
}