import React from 'react';

export default class Pop extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.pop}>Press me</button>
      </React.Fragment>
    );
  }

  pop = () => {
    alert('pop goes the weasel!');
  };
}
