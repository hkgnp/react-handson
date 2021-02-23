import React from 'react'

export default class RegisterForm extends React.Component {
    state = {
        username: "",
        email: "",
        password: ""
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.getInput} />
                    <span className="error">{this.userNameError()}</span>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.getInput} />
                    <span className="error">{this.emailError()}</span>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="password" value={this.state.password} onChange={this.getInput} />
                    <span className="error">{this.passwordError()}</span>
                </div>
            </React.Fragment>
        )
    }

    getInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    userNameError = () => {
        if (this.state.username.length < 4 || this.state.username.length > 10) {
            return <h1>Please key in a valid username of between 4 - 10 characters</h1>
        }
    }

    emailError = () => {
        if (!this.state.email.includes("@")) {
            return <h1>Please enter a valid email</h1>
        }
    }

    passwordError = () => {
        let validPasswordCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
        let pw = this.state.password;
        for (let i = 0; i < validPasswordCharacters.length; i++) {
            if (!pw.includes(validPasswordCharacters[i])) {
                
            }
        }

        

    }
};
