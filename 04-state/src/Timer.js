import React from 'react'


class Timer extends React.Component {
    state = {
        'count': 10
    }

    timer = null;
    render() {
        return (
            <React.Fragment>
                <div>{this.state.count} seconds remaining</div>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </React.Fragment>
        )
    }
    
    start = () => {
        let loadTimer = () => {
            this.setState({
                'count': this.state.count - 1
            })
        }
        this.timer = setInterval(loadTimer, 1000);
    }

    stop = () => {
        clearInterval(this.timer)
    }

    reset = () => {
        this.setState({
            'count': 10
        })
    }

}

export default Timer