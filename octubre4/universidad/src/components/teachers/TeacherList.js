import React from "react";

export class TeacherList extends React.Component {
  render() {
    const teachers = this.props.teachers;
    const teacherRows = teachers.map((t, index) => {
      return <tr key={index}>
        <td>{t.dni}</td>
        <td>{t.name}</td>
        <td>{t.phone}</td>
        <td>{t.office}</td>
        <td><button type="button" onClick={() => this.props.onEdit(t)}>editar</button></td>
        <td><button type="button" onClick={() => this.props.onDelete(t._id)}>eliminar</button></td>
      </tr>
    });
    return (
      <div className="lista">
        <table>
          <thead>
            <tr>
              <th>cedula</th>
              <th>nombre</th>
              <th>teléfono</th>
              <th>oficina</th>
            </tr>
          </thead>
          <tbody>
            {teacherRows}
          </tbody>
        </table>
      </div>);
  }
}