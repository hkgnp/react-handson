import React from 'react'
import puppy from './puppy.jpg'
import logo from './logo.svg';

class ChangeLogo extends React.Component {
    state = {
        'image': puppy
    }

    render() {
        return (
            <React.Fragment>
                <img src={this.state.image} className="App-logo" alt="logo" />
                <button onClick={this.changeLogo}>Change Logo</button>
            </React.Fragment>
        )
    }

    changeLogo = () => {
        if (this.state.image === puppy) {
            this.setState({
                'image': logo,
            })
        } else {
            this.setState({
                'image': puppy,
            })
        }

    }
}


export default ChangeLogo