import React from 'react';
import './dice.css';

export default class Dice2 extends React.Component {
  state = {
    number: 1,
  };

  render() {
    return (
      <React.Fragment>
        <div className="dice">{this.state.number}</div>
        <button onClick={this.rollDice}>Roll Dice</button>
      </React.Fragment>
    );
  }

  rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);

    this.setState({
      number: randomNumber,
    });
  };
}
