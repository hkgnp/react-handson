import React from 'react';

export default class GuestList extends React.Component {
  state = {
    guests: ['Tony Stark', 'Hawkeye', 'Spider Man', 'Bruce Wayne'],
  };
  render() {
    return (
      <React.Fragment>
        <ul>{this.renderGuestList()}</ul>
      </React.Fragment>
    );
  }

  renderGuestList = () => {
    let g = [];
    for (let guest of this.state.guests) {
      g.push(<li key={guest}>{guest}</li>);
    }
    return g;
  };
}
