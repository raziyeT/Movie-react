import './App.css';
import Movies from './Components/Movies'
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render(){
    return (
      <main className="container">
    <Movies/>
      </main>
    );
  }
 
}

export default App;
