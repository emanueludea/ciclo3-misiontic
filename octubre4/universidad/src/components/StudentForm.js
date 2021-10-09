import React from "react";
class StudentForm extends React.Component {

  onDniChange = (evt) => {
    const student = this.props.student;
    const newStudent = { ...student, dni: parseInt(evt.target.value) };
    console.log('cambió el DNI', evt.target.value, student, newStudent);
    this.props.onFormChange(newStudent);
  }

  render() {
    const student = this.props.student;

    return (
      <div className="formulario" onSubmit={this.props.onSaveStudent}>
        <form>
          <div>
            <label>Cedula</label>
            <input type="number"
              value={student.dni}
              onChange={this.onDniChange} />
          </div>
          <div>
            <label>Nombre</label>
            <input type="text"
              value={student.name}
              onChange={(evt) => this.props.onFormChange({ ...student, name: evt.target.value })} />
          </div>
          <div>
            <label>Edad</label>
            <input type="number"
              value={student.age}
              onChange={(evt) => this.props.onFormChange({ ...student, age: parseInt(evt.target.value) })} />
          </div>
          <div>
            <label>Semestre</label>
            <input type="number"
              value={student.semester}
              onChange={(evt) => this.props.onFormChange({ ...student, semester: parseInt(evt.target.value) })} />
          </div>
          <input type="submit" value={student._id === -1 ? 'Crear' : 'Editar'} />
          <input type="button" value="Limpiar" onClick={this.props.onClearStudent} />
        </form>
      </div>
    );
  }
}
export default StudentForm;