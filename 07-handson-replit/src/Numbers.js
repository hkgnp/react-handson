import React from 'react';

export default class Numbers extends React.Component {
  state = {
    allNumbers: [1, 3, 5, 7],
    userNumber: '',
  };

  addRandom = () => {
    // 1. clone the allNumbers array in the state
    let clone = [...this.state.allNumbers];
    // 2. add a random number to the back of the clone
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    clone.push(randomNumber);
    // 3. set the cloned array back into the state
    this.setState({
      allNumbers: clone,
    });
  };

  enterNumber = (e) => {
    this.setState({
      userNumber: e.target.value,
    });
  };

  addNumber = (e) => {
    let clone = [...this.state.allNumbers];
    clone.push(parseFloat(this.state.userNumber));
    this.setState({
      allNumbers: clone,
    });
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.allNumbers.map((number) => (
            <li>{number}</li>
          ))}
        </ul>
        <div>
          <button onClick={this.addRandom}>Add Random</button>
        </div>
        <div>
          <input type="text" name="allNumbers" onChange={this.enterNumber} />
          <button onClick={this.addNumber}>Add</button>
        </div>
      </React.Fragment>
    );
  }
}
