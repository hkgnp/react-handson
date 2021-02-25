import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';

const Alert = (props) => {
    return <div style={{fontFamily: "Tahoma", backgroundColor: props.bgColor, border: "4px black solid", padding: "4px"}}>{props.message}{props.text}</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <Header/>
            <Alert message="Red Alert! Shields Up!" text=" Props.text" bgColor="blue"/>
      </header>
    </div>
  );
}

export default App;
