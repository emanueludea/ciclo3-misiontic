import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logueado: false, usuario: 'miUsuario', clave: 'miClave', texto: 'Hello there, this is some text in a text area' };
    this.mostrarMensaje = this.mostrarMensaje.bind(this);
    this.actualizarInput = this.actualizarInput.bind(this);
  }
  mostrarMensaje(e) {
    e.preventDefault();
    // alert('Presionaste el boton');
    this.setState((state, props) => ({
      logueado: !state.logueado
    }));
  }

  actualizarInput(e) {
    console.log('actualizarInput', e.target, e.target.value);
    this.setState({ usuario: e.target.value });
    if (e.target.value === 'Camilo') {
      this.props.evento(this.state.usuario);
    }
  }


  render() {
    /*let textoBoton = 'Ingresar ya!';
    if (this.state.logueado === true) {
      textoBoton = 'Salir';
    }*/
    const textoBoton = this.state.logueado === true ? 'Salirse ya!' : 'Ingresar ya!';
    return (
      <div>
        <form className="formulario" onSubmit={this.mostrarMensaje}>
          <h1> Iniciar Sesión </h1>
          <div className="contenedor">
            <div className="input-contendedor">
              <i className="fas fa-user icon"></i>
              <label htmlFor="correo" id="correo-label"></label>
              <input type="text" placeholder="Ingrese su usuario" value={this.state.usuario} onChange={this.actualizarInput} />
            </div>
            <div className="input-contendedor">
              <i className="fas fa-key icon"></i>
              <label htmlFor="pws" id="pws-label"></label>
              <input type="password" placeholder="Contraseña" />
            </div>
            <input type="submit" value={textoBoton} className="button" />
            <p>¿No tienes cuenta? <a className="link" href="registro.html">Registrarse</a></p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;