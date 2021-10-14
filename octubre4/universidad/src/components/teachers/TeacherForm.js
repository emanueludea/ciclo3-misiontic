import React from "react";

export class TeacherForm extends React.Component {

  render() {
    const teacher = this.props.teacher;
    return (
      <div className="formulario">
        <form onSubmit={this.validateForm}>
          <div>
            <label>Cedula</label>
            <input type="number"
              value={teacher.dni}
              onChange={(evt) => this.props.onChange({ ...teacher, dni: evt.target.value })} />
          </div>
          <div>
            <label>Nombre</label>
            <input type="text"
              value={teacher.name}
              onChange={(evt) => this.props.onChange({ ...teacher, name: evt.target.value })} />
          </div>
          <div>
            <label>Teléfono</label>
            <input type="number"
              value={teacher.phone}
              onChange={(evt) => this.props.onChange({ ...teacher, phone: +evt.target.value })} />
          </div>
          <div>
            <label>Oficina</label>
            <input type="text"
              value={teacher.office}
              onChange={(evt) => this.props.onChange({ ...teacher, office: evt.target.value })} />
          </div>
          <input type="submit" value={teacher._id === -1 ? 'Crear' : 'Editar'} />
          <input type="button" value="Limpiar" onClick={this.props.onClear} />
        </form>
      </div>
    );
  }
}