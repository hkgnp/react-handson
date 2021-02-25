import React from 'react'

// NumberBox is an extension of React.Component
class NumberBox extends React.Component {
    state = {
        'count': 10
    }

    render() {
        return (
            <React.Fragment>
            <div style={{
                'border': '1px solid while',
                'padding': '10px',
                'width': '25px'
            }}>
            {this.state.count}
            </div>
            <button onClick = {this.increment}>Increment</button>
            <button onClick = {this.decrement}>Decrement</button>
            </React.Fragment>
        )
    }

    increment = () => {
        this.setState({
            'count': this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            'count': this.state.count - 1
        })
    }
}

export default NumberBox