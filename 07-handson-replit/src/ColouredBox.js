import React from 'react';

class ColoredBox extends React.Component {
  state = {
    color: 1,
  };

  getColor = () => {
    if (this.state.color === 1) {
      return 'red';
    }
    if (this.state.color === 2) {
      return 'blue';
    }
    if (this.state.color === 3) {
      return 'green';
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: '1px black solid',
            width: '50px',
            height: '50px',
            backgroundColor: this.getColor(),
          }}
        ></div>
        <button value="1" id="1" onClick={this.color}>
          Red
        </button>
        <button value="3" id="3" onClick={this.color}>
          Green
        </button>
        <button value="2" id="2" onClick={this.color}>
          Blue
        </button>
      </React.Fragment>
    );
  }

  color = (e) => {
    this.setState({
      color: parseInt(e.target.id),
    });
  };
}

export default ColoredBox;
