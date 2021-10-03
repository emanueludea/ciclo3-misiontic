import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hora: new Date() };
    this.cambiarHora = this.cambiarHora.bind(this);
  }

  componentDidMount() {
    console.log('se acaba de mostrar');
    this.timerID = setInterval(() => this.cambiarHora(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  cambiarHora() {
    this.setState({ hora: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hola, {this.props.nombre}</h1>
        <p>{this.state.hora.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default Clock;