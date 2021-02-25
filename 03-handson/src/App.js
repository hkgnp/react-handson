import logo from './logo.svg';
import './App.css';
import React from 'react';
import puppy from './puppy.jpg';
import BorderedImageFrame from './BorderedImageFrame'
import SumOfTwo from './SumOfTwo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BorderedImageFrame image={puppy}/>
        <h1><SumOfTwo one={3} two={3} /></h1>
      </header>
    </div>
  );
}

export default App;
