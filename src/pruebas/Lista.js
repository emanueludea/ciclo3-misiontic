import React from "react";

class Lista extends React.Component {
  render() {
    const itemsLista = this.props.productos.map((p, index) => {
      return <tr key={index}>
        <td>{p.nombre}</td>
        <td>{p.precio}</td>
        <td>{p.vendedor}</td>
      </tr>
    });
    return (
      <table>
        <tbody>
          {itemsLista}
        </tbody>
      </table>
    );
  }
}

export default Lista;