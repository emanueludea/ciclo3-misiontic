import Busqueda from "./componentes/Busqueda";
import Resultados from "./componentes/Resultados";

import './productos.css';

import React from "react";
class PaginaProductos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { texto: '', filtrar: false };

    this.productos = this.props.productos;

    this.cambioTexto = this.cambioTexto.bind(this);
    this.cambioFiltrar = this.cambioFiltrar.bind(this);
  }

  cambioTexto(e) {
    this.setState({ texto: e.target.value });
    this.productos = this.props.productos;
    if (this.state.texto !== '') {
      this.productos = this.productos.filter(p => p.nombre.includes(e.target.value));
    }
    if (this.state.filtrar) {
      this.productos = this.productos.filter(p => p.disponible === true);
    }
  }

  cambioFiltrar(e) {
    this.setState({ filtrar: e.target.checked });
    this.productos = this.props.productos.filter(p => p.nombre.includes(this.state.texto));
    if (e.target.checked) {
      this.productos = this.productos.filter(p => p.disponible === true);
    }
  }

  render() {
    return (
      <div className="contenedor">
        <Busqueda texto={this.state.texto} filtrar={this.state.filtrar} cambioTexto={this.cambioTexto} cambioFiltrar={this.cambioFiltrar} />
        <Resultados productos={this.productos} />
      </div >
    );

  }
}

export default PaginaProductos;