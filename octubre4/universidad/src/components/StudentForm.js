import React from 'react';
class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(event) {
    event.preventDefault();
    console.log('vamos a enviar', event);
    this.props.onFormSubmit(event);
  }
  render() {
    return (
      <form onSubmit={this.submitForm} className="studentForm">
        <div>
          <label>Cedula</label>
          <input type="number" />
        </div>
        <div>
          <label>Nombre completo</label>
          <input type="text" />
        </div>
        <div>
          <label>Edad</label>
          <input type="number" />
        </div>
        <div>
          <label>Semestre</label>
          <input type="number" />
        </div>
        <input type="submit" value="enviar" />
      </form>
    );
  }
}
export default StudentForm;