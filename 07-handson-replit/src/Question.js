import React from 'react';

export default class Question extends React.Component {
  state = {
    qns1answer: '',
  };
  render() {
    return (
      <section id="qns1">
        <h1>Question 1: Which island is Mount Faber, Singapore, located on?</h1>
        <ul>
          <li>
            <input
              name="qns1answer"
              type="radio"
              value="A"
              onChange={this.getAnswer}
              checked={this.state.qns1answer === 'A'}
            />
            <label>A. Palau Ubin</label>
          </li>
          <li>
            <input
              name="qns1answer"
              type="radio"
              value="B"
              onChange={this.getAnswer}
              checked={this.state.qns1answer === 'B'}
            />
            <label>B. Palau Ujong</label>
          </li>
          <li>
            <input
              name="qns1answer"
              type="radio"
              value="C"
              onChange={this.getAnswer}
              checked={this.state.qns1answer === 'C'}
            />
            <label>C. Palau Tekong</label>
          </li>
          <li>
            <input
              name="qns1answer"
              type="radio"
              value="D"
              onChange={this.getAnswer}
              checked={this.state.qns1answer === 'D'}
            />
            <label>D. Saint John Island</label>
          </li>
        </ul>
      </section>
    );
  }

  getAnswer = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
}
