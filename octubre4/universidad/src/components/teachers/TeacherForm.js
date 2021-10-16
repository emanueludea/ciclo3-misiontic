import React from "react";
import { ValidationError } from "../ValidationError";

export class TeacherForm extends React.Component {
  /* Esta parte era la que faltaba para que funcionara en clase */
  state = {
    errors: {}
  }

  validateForm = (evt) => {
    evt.preventDefault();
    let hasError = false;
    const { teacher } = this.props;

    const errors = {};

    if (teacher.dni === '') {
      hasError = true;
      errors.dni = 'Campo obligatorio';
    }
    if (teacher.name === '') {
      hasError = true;
      errors.name = 'Campo obligatorio';
    }

    this.setState({ errors: errors })
    console.log(errors);
    if (hasError) {
      return;
    }
    this.props.onSave(evt);
  }
  /* Hasta acá */

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
            {this.state.errors.name && <ValidationError message={this.state.errors.dni} />}
          </div>
          <div>
            <label>Nombre</label>
            <input type="text"
              value={teacher.name}
              onChange={(evt) => this.props.onChange({ ...teacher, name: evt.target.value })} />
            {this.state.errors.name && <ValidationError message={this.state.errors.name} />}
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