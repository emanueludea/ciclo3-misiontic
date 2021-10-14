import React from 'react';
import './App.css';
import { Students } from './components/students/Students';
import { Teachers } from './components/teachers/Teachers';

class App extends React.Component {

  BASE_URL = 'http://localhost:5000';

  constructor(props) {
    super(props);
    console.log('constructor:', window.location.pathname);

    this.state = {
      isStudentsVisible: window.location.pathname === '/estudiantes',
      isTeachersVisible: window.location.pathname === '/profesores'
    }
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
    console.log(window.location.pathname);
    /*if (window.location.pathname === '/teachers') {
      console.log('debemos mostrar los profesores')
    } else if (window.location.pathname === '/teachers') {
      console.log('debemos mostrar los estudiantes')
    }*/
    let contentToShow = <div>Pagina incorrecta</div>;
    if (this.state.isTeachersVisible) {
      window.history.pushState({}, '', '/profesores');
      contentToShow = <Teachers BASE_URL={this.BASE_URL} />;
    } else if (this.state.isStudentsVisible) {
      window.history.pushState({}, '', '/estudiantes');
      contentToShow = <Students />;
    }
    return (
      <div className="container">
        <div>
          <button type="button" onClick={this.showStudents}>Estudiantes</button>
          <button type="button" onClick={this.showTeachers}>Profesores</button>
          <a href='/estudiantes'>Estudiantes</a>
          <a href='/profesores'>Profesores</a>
          {contentToShow}
        </div>
      </div >
    );
  }
}

export default App;
