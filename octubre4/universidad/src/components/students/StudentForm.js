import React from "react";
import { ValidationError } from "../ValidationError";
class StudentForm extends React.Component {

  state = {
    errors: {}
  }

  validateForm = (evt) => {
    evt.preventDefault();
    let hasError = false;
    const { student } = this.props;

    const errors = {};

    if (student.dni === '') {
      hasError = true;
      errors.dni = 'Campo obligatorio';
    }
    if (student.name === '') {
      hasError = true;
      errors.name = 'Campo obligatorio';
    }
    if (student.age === '') {
      hasError = true;
      errors.age = 'Campo obligatorio';
    } else if (+student.age < 0) {
      hasError = true;
      errors.age = 'Debe ser positivo';
    }

    if (student.semester === '') {
      hasError = true;
      errors.semester = 'Campo obligatorio';
    } else if (+student.semester < 0) {
      hasError = true;
      errors.semester = 'Debe ser positivo';
    }

    this.setState({ errors: errors })
    console.log(errors);
    if (hasError) {
      return;
    }
    this.props.onSaveStudent(evt);
  }

  onDniChange = (evt) => {
    const student = this.props.student;
    const newStudent = { ...student, dni: parseInt(evt.target.value) };
    console.log('cambió el DNI', evt.target.value, student, newStudent);
    this.props.onFormChange(newStudent);
  }

  render() {
    const student = this.props.student;

    return (
      <div className="formulario">
        <form onSubmit={this.validateForm}>
          <div>
            <label>Cedula</label>
            <input type="number"
              value={student.dni}
              onChange={this.onDniChange} />
            {this.state.errors.dni && <div style={{ color: '#ff0000' }}>{this.state.errors.dni}</div>}
          </div>
          <div>
            <label>Nombre</label>
            <input type="text"
              value={student.name}
              onChange={(evt) => this.props.onFormChange({ ...student, name: evt.target.value })} />
            {this.state.errors.name && <ValidationError message={this.state.errors.name} />}
          </div>
          <div>
            <label>Edad</label>
            <input type="number"
              value={student.age}
              onChange={(evt) => this.props.onFormChange({ ...student, age: parseInt(evt.target.value) })} />
            {this.state.errors.age && <div>{this.state.errors.age}</div>}
          </div>
          <div>
            <label>Semestre</label>
            <input type="number"
              value={student.semester}
              onChange={(evt) => this.props.onFormChange({ ...student, semester: parseInt(evt.target.value) })} />
            {this.state.errors.semester && <div>{this.state.errors.semester}</div>}
          </div>
          <input type="submit" value={student._id === -1 ? 'Crear' : 'Editar'} />
          <input type="button" value="Limpiar" onClick={this.props.onClearStudent} />
        </form >
      </div >
    );
  }
}
export default StudentForm;