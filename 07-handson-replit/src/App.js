import React from 'react';
import './App.css';
import Pop from './Pop';
import ColouredBox from './ColouredBox';
import VendingMachine from './VendingMachine';
import Dice1 from './Dice1';
import Dice2 from './Dice2';
import Dice3 from './Dice3';
import AreaForm from './AreaForm';
import LogInForm from './LogInForm';
import AirQuality from './AirQuality';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <React.Fragment>
      <h1 style={{ color: 'blue' }}>Qn 1</h1>
      <Pop />
      <h2 style={{ color: 'blue' }}>Qn 2</h2>
      <ColouredBox />
      <h2 style={{ color: 'blue' }}>Qn 3</h2>
      <VendingMachine />
      <h2 style={{ color: 'blue' }}>Qn 4</h2>
      <div style={{ display: 'flex' }}>
        {' '}
        <Dice1 />
        <Dice2 />
        <Dice3 />
      </div>
      <h2 style={{ color: 'blue' }}>Qn 5</h2>
      <AreaForm />
      <h2 style={{ color: 'blue' }}>Qn 6</h2>
      <LogInForm />
      <h2 style={{ color: 'blue' }}>Qn 7</h2>
      <AirQuality />
      <h2 style={{ color: 'blue' }}>Qn 8</h2>
      <RegisterForm />
    </React.Fragment>
  );
}

export default App;
