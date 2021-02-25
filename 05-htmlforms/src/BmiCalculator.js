import React from 'react'

class BmiCalculator extends React.Component {
    state = {
        'weight': 0,
        'height': 0,
        'type': '',
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="text" name="weight" value={this.state.weight} onChange={this.getWeightHeight} placeholder="Enter weight" />
                    <input type="text" name="height" value={this.state.height} onChange={this.getWeightHeight} placeholder="Enter height" />
                </div>

                <p>Your BMI is {parseFloat(this.state.weight) / parseFloat(this.state.height) ** 2}</p>
                <p>You are {this.state.type}</p>
                <button onClick={this.checkBMI}>test</button>
                <p>{this.checkBMI2()}</p>

            </React.Fragment>
        )
    }

    // Using 2 separate functions
    // getWeight = (e) => {
    //     this.setState({
    //         'weight': e.target.value
    //     })
    // }

    // getHeight = (e) => {
    //     this.setState({
    //         'height': e.target.value
    //     })
    // }

    // Use 1 function only
    getWeightHeight = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // Check BMI with button
    checkBMI = () => {
        let bmi = parseFloat(this.state.weight) / parseFloat(this.state.height) ** 2

        if (bmi < 18.5) {
            this.setState({
                'type': 'underweight'
            })
        } else if (bmi < 24.9) {
            this.setState({
                'type': 'normal'
            })
        } else {
            this.setState({
                'type': 'overweight'
            })
        }
    }

    // Check BMI real time
    checkBMI2 = () => {
        let bmi = parseFloat(this.state.weight) / parseFloat(this.state.height) ** 2
        if (bmi < 18.5) {
            return "You are underweight"
        } else if (bmi < 24.9) {
            return "You are normal"
        } else {
            return "You are overweight"
        }
    }
}

export default BmiCalculator