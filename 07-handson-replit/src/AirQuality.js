import React from 'react';

export default class AirQuality extends React.Component {
  state = {
    psi: 0,
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <label>Enter the PSI:</label>
          <input
            type="text"
            value={this.state.psi}
            onChange={(e) => {
              this.setState({
                psi: e.target.value,
              });
            }}
          />
        </div>
        <h1>Air Quality</h1>
        <div
          id="air-quality"
          style={{
            color: 'black',
          }}
        >
          {this.getAirQualityText()}
        </div>
      </React.Fragment>
    );
  }

  getAirQualityText = () => {
    if (this.state.psi <= 50) {
      return <p style={{ color: this.getAirQualityColor() }}>Healthy</p>;
    } else if (this.state.psi <= 150) {
      return <p style={{ color: this.getAirQualityColor() }}>Moderate</p>;
    } else if (this.state.psi <= 200) {
      return <p style={{ color: this.getAirQualityColor() }}>Unhealthy</p>;
    } else {
      return <p style={{ color: this.getAirQualityColor() }}>Hazardous</p>;
    }
  };

  getAirQualityColor = () => {
    if (this.state.psi <= 50) {
      return 'green';
    } else if (this.state.psi <= 150) {
      return 'yellow';
    } else if (this.state.psi <= 200) {
      return 'orange';
    } else {
      return 'red';
    }
  };
}
