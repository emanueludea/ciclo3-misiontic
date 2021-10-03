import React from "react";
class TituloCategoria extends React.Component {
  render() {
    return (
      <tr>
        <td className="tituloCategoria" colSpan={3}>{this.props.categoria}</td>
      </tr>
    );
  }
}

export default TituloCategoria;