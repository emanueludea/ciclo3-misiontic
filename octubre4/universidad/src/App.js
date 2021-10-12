import React from 'react';
import './App.css';
import { Students } from './components/Students';
import { Teachers } from './components/teachers/Teachers';

class App extends React.Component {

  BASE_URL = 'http://localhost:5000';

  render() {
    return (
      <div className="container">
        <Students />
        <Teachers BASE_URL={this.BASE_URL} />
      </div >
    );
  }
}

export default App;
