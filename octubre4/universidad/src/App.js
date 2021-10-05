import React from 'react';
import './App.css';
import { Buttons } from './components/Buttons';
import StudentForm from './components/StudentForm';
import { StudentList } from './components/StudentList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 101112, name: 'Carlos mario tobon', age: 45, semester: 2 },
        { id: 101113, name: 'pedrito peres', age: 32, semester: 2 },
        { id: 101114, name: 'Antonio sanin', age: 40, semester: 2 },
        { id: 101115, name: 'Jesus ortega', age: 20, semester: 4 }
      ]
    }

    this.onFormSubmitted = this.onFormSubmitted.bind(this);
  }
  onFormSubmitted(event) {
    event.preventDefault();
    console.log('formSubmitted', event);
  }

  render() {
    return (
      <div>
        <Buttons />
        <StudentForm onFormSubmit={this.onFormSubmitted} />
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

export default App;
