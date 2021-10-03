import React from "react";
class Busqueda extends React.Component {
  render() {
    return (
      <form>
        <input type="search" placeholder="¿qué quieres buscar?" value={this.props.texto} onChange={this.props.cambioTexto} />
        <p><input type="checkbox" checked={this.props.filtrar} onChange={this.props.cambioFiltrar} /> buscar solo disponibles</p>
      </form>
    );
  }
}

export default Busqueda;