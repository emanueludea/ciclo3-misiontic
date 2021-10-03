import React from "react";
import ProductoItem from "./ProductoItem";
import TituloCategoria from "./TituloCategoria";

class Resultados extends React.Component {
  constructor(props) {
    super(props);
    this.construirContenido = this.construirContenido.bind(this);
  }

  construirContenido() {
    const productos = this.props.productos;
    const catSet = new Set(productos.map(p => p.categoria));
    let categorias = [...catSet];
    console.log(categorias);
    const contenido = [];
    categorias.forEach((cat, index) => {
      contenido.push(<TituloCategoria key={cat} categoria={cat} />);
      const prodCategoria = productos.filter(p => p.categoria === cat).map((p, index) => {
        return <ProductoItem key={cat + index} producto={p} />;
      });
      contenido.push(...prodCategoria);
    });
    return contenido;
  }

  render() {
    const contenido = this.construirContenido();
    console.log(contenido)
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Vendedor</th>
          </tr>
        </thead>
        <tbody>
          {contenido}
        </tbody>
      </table >);
  }
}

export default Resultados;