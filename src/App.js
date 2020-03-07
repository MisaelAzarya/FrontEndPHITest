import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import './main.js';

import Logic from './Logic';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {      
      show: false
    }; 
  }
  
  render() {    
    return (
      <div className="container-fluid">
        <Logic />
      </div>           
    );  
  }
}

export default App;
