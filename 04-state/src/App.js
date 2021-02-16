import './App.css';
import React from 'react';
import NumberBox from './NumberBox'
import Timer from './Timer'
import ChangeLogo from './ChangeLogo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChangeLogo/>
        <NumberBox/>
        <Timer/>
      </header>
    </div>
  );
}

export default App;
