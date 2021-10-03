import React from "react";
class ProductoItem extends React.Component {
  render() {
    const producto = this.props.producto;
    return (<tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.vendedor}</td>
    </tr>);
  }
}

export default ProductoItem;