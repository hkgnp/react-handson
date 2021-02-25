import React from 'react';
import Display from './Display'

class ATM extends React.Component {
    state = {
        balance: 1000,
        amount: 0
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    deposit = () => {
        this.setState({
            balance: this.state.balance + this.state.amount
        })
    }

    withdraw = () => {
        this.setState({
            balance: this.state.balance - this.state.amount
        })
    }

    render() {
        return (
            <React.Fragment>
                <Display balance={this.state.balance}/>
                <input type="text" name="amount" value={this.state.amount} onChange={this.updateFormField} />
                <button>Deposit</button><button>Withdraw</button>
            </React.Fragment>
        )
    }

}

export default ATM