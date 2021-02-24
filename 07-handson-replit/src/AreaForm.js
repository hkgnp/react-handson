import React from 'react';

export default class AreaForm extends React.Component {
  state = {
    width: 0,
    height: 0,
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <label>Width:</label>
          <input name="width" type="text" onChange={this.updateMeasurements} />
        </div>
        <div>
          <label>Height:</label>
          <input name="height" type="text" onChange={this.updateMeasurements} />
        </div>
        <div>Area of rectangle: {this.calculateArea()}</div>
      </React.Fragment>
    );
  }

  updateMeasurements = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  calculateArea = () => {
    return this.state.width * this.state.height;
  };
}
