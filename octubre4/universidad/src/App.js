import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { Students } from './components/students/Students';
import { Teachers } from './components/teachers/Teachers';

class App extends React.Component {

  BASE_URL = 'http://localhost:5000';

  constructor(props) {
    super(props);
    console.log('constructor:', window.location.pathname);
    let pagina = '/login';
    if (sessionStorage.getItem('token')) {
      pagina = '/profesores';
    }
    this.state = {
      paginaActual: pagina,
      isStudentsVisible: window.location.pathname === '/estudiantes',
      isTeachersVisible: window.location.pathname === '/profesores'
    }
  }
  cambiarPaginaActual() {

  }

  showStudents = () => {
    console.log('showStudents');
    this.setState({ isTeachersVisible: false, isStudentsVisible: true });
  }

  showTeachers = () => {
    console.log('showTeachers');
    this.setState({ isTeachersVisible: true, isStudentsVisible: false });
  }


  render() {
    console.log(window.location.pathname, this.state);
    /*if (window.location.pathname === '/teachers') {
      console.log('debemos mostrar los profesores')
    } else if (window.location.pathname === '/teachers') {
      console.log('debemos mostrar los estudiantes')
    }*/
    let contentToShow = <div>Pagina incorrecta</div>;
    switch (this.state.paginaActual) {
      case '/estudiantes':
        window.history.pushState({}, '', '/estudiantes');
        contentToShow = <Students />;
        break;
      case '/profesores':
        window.history.pushState({}, '', '/profesores');
        contentToShow = <Teachers BASE_URL={this.BASE_URL} />;
        break;
      default:
        window.history.pushState({}, '', '/login');
        contentToShow = <Login />;
        break
    }
    /*if (this.state.isTeachersVisible) {
      window.history.pushState({}, '', '/profesores');
      contentToShow = <Teachers BASE_URL={this.BASE_URL} />;
    } else if (this.state.isStudentsVisible) {
      window.history.pushState({}, '', '/estudiantes');
      contentToShow = <Students />;
    }
    if (!sessionStorage.getItem('token')) {
      window.history.pushState({}, '', '/login');
      contentToShow = <Login />;
    }*/
    return (
      <div className="container">
        <div>
          <button type="button" onClick={this.showStudents}>Estudiantes</button>
          <button type="button" onClick={this.showTeachers}>Profesores</button>
          <a href='#' onClick={() => this.setState({ paginaActual: '/estudiantes' })}>Estudiantes</a>
          <a href='#' onClick={() => this.setState({ paginaActual: '/profesores' })} >Profesores</a>
          {contentToShow}
        </div>
      </div >
    );
  }
}

export default App;
