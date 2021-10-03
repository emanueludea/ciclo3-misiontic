import React from "react";
/*import Clock from "./pruebas/Clock";
import EntradaRS from "./pruebas/EntradaRS";
import Lista from "./pruebas/Lista";
import Login from "./pruebas/Login";*/
import PaginaProductos from "./productos/PaginaProductos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: 'Emanuel' };

    this.productos = [
      { categoria: 'categoria 1', nombre: 'producto 1', precio: 25, vendedor: 'carlos', disponible: true },
      { categoria: 'categoria 1', nombre: 'producto 2', precio: 2500, vendedor: 'carlos', disponible: true },
      { categoria: 'categoria 2', nombre: 'producto 3', precio: 250, vendedor: 'pedro', disponible: false },
      { categoria: 'categoria 2', nombre: 'producto 10', precio: 205, vendedor: 'carlos', disponible: true },
      { categoria: 'categoria 3', nombre: 'producto 20', precio: 250, vendedor: 'pedro', disponible: false },
      { categoria: 'categoria 3', nombre: 'producto 30', precio: 205, vendedor: 'carlos', disponible: true }
    ];
    this.cambiarNombre = this.cambiarNombre.bind(this);
  }
  cambiarNombre(nuevoNombre) {
    console.log('cambiarNombre', nuevoNombre);
    this.setState({ nombre: nuevoNombre });
    console.log(this.state);
  }
  render() {
    return (
      <PaginaProductos productos={this.productos} />
      /*<div>
        <Login evento={this.cambiarNombre} />
        <Clock nombre={this.nombre} hora={new Date()} />
        <EntradaRS />
        <Lista productos={this.productos} />
      </div>*/
    );
  }
}

export default App;
