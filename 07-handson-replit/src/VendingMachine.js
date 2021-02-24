import React from 'react';

export default class VendingMachine extends React.Component {
  state = {
    displayMessage: '',
  };

  render() {
    return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display">{this.state.displayMessage}</div>
        <button
          name="displayMessage"
          id="Dispensing coffee"
          onClick={this.dispenseDrink}
        >
          Coffee
        </button>
        <button
          name="displayMessage"
          id="Dispensing tea"
          onClick={this.dispenseDrink}
        >
          Tea
        </button>
        <button
          name="displayMessage"
          id="Dispensing orange juice"
          onClick={this.dispenseDrink}
        >
          Orange Juice
        </button>
      </React.Fragment>
    );
  }

  dispenseDrink = (e) => {
    this.setState({
      [e.target.name]: e.target.id,
    });
  };
}
