import React from "react";
class StudentList extends React.Component {
  render() {
    const students = this.props.students;
    const studentRow = students.map((st, index) => {
      return <tr key={index}>
        <td>{st.dni}</td>
        <td>{st.name}</td>
        <td>{st.age}</td>
        <td>{st.semester}</td>
        <td><button type="button" onClick={() => this.props.onEditStudent(st)}>editar</button></td>
        <td><button type="button" onClick={() => this.props.onDeleteStudent(st._id)}>eliminar</button></td>
      </tr>
    });
    return (
      <div className="lista">
        <table>
          <thead>
            <tr>
              <th>cedula</th>
              <th>nombre</th>
              <th>edad</th>
              <th>semestre</th>
            </tr>
          </thead>
          <tbody>
            {studentRow}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;