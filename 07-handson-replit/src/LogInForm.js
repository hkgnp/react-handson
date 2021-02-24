import React from 'react';

export default class LogInForm extends React.Component {
  state = {
    username: '',
    password: '',
    validate: '',
  };

  render() {
    return (
      <React.Fragment>
        <label>Username: </label>
        <input name="username" type="text" onChange={this.userDetails} />
        <label>Password: </label>
        <input name="password" type="text" onChange={this.userDetails} />
        <button onClick={this.validate}>Submit</button>
      </React.Fragment>
    );
  }

  userDetails = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    this.state.username === 'rotiprataguy' &&
    this.state.password === 'rotiprata123'
      ? alert('Correct')
      : alert('Incorrect');
  };

  show = () => {
    this.state.validate ? <h4>Correct</h4> : <h4>Incorrect</h4>;
  };
}
