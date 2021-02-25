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
import Question from './Question';
import Buffet from './Buffet';
import GuestList from './GuestList';
import TransationList from './TransationList';
import Numbers from './Numbers';
import Movies from './Movies';
import RemoveNumbers from './RemoveNumbers';
import UpdateMovie from './UpdateMovie';
import Library from './Library';

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
      <h2 style={{ color: 'blue' }}>Qn 9</h2>
      <Question />
      <h2 style={{ color: 'blue' }}>Qn 10</h2>
      <Buffet />
      <h2 style={{ color: 'blue' }}>Qn 11</h2>
      <GuestList />
      <h2 style={{ color: 'blue' }}>Qn 12</h2>
      <TransationList />
      <h2 style={{ color: 'blue' }}>Qn 13</h2>
      <Numbers />
      <h2 style={{ color: 'blue' }}>Qn 14</h2>
      <Movies />
      <h2 style={{ color: 'blue' }}>Qn 15</h2>
      <RemoveNumbers />
      <h2 style={{ color: 'blue' }}>Qn 16</h2>
      <UpdateMovie />
      <h2 style={{ color: 'blue' }}>Qn 17</h2>
      <Library />
    </React.Fragment>
  );
}

export default App;
