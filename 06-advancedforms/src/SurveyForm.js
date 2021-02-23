import React from 'react'

class SurveyForm extends React.Component {
    state = {
        email: '',
        rating: 1,
        country: '',
        knowAbout: []
    }

    render() {
        return <React.Fragment>
            <div>
                {/* Email */}
                <div>
                    <label className="form-label">Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.userEmail} />
                </div>

                {/* Rating */}
                <div>
                    <div>
                        <label className="form-label"><h4>Rating:</h4></label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" value={1} name="rating" onChange={this.userRating} checked={parseInt(this.state.rating) === 1} />
                        <label className="form-check-label">Unhappy</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" value={2} name="rating" onChange={this.userRating} checked={parseInt(this.state.rating) === 2} />
                        <label className="form-check-label">Average</label>
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" value={3} name="rating" onChange={this.userRating} checked={parseInt(this.state.rating) === 3} />
                        <label className="form-check-label">Happy</label>
                    </div>
                </div>

                {/* How You Know About Us */}
                <div>
                    <div>
                        <label className="form-label"><h4>How You Know About Us:</h4></label>
                    </div>
                    <div>
                        <input type="checkbox" className="form-check-input" value="social media" name="knowAbout" onChange={this.knowAbout} />
                        <label className="form-check-label">Social Media</label>
                    </div>
                    <div>
                        <input type="checkbox" className="form-check-input" value="word of mouth" name="knowAbout" onChange={this.knowAbout} />
                        <label className="form-check-label">Word of Mouth</label>
                    </div>
                    <div>
                        <input type="checkbox" className="form-check-input" value="advertisement" name="knowAbout" onChange={this.knowAbout} />
                        <label className="form-check-label">Advertisement</label>
                    </div>
                </div>

            </div>

        </React.Fragment>
    };
    userEmail = (e) => {
        this.setState({
            'email': e.target.value
        })
    }
    userRating = (e) => {
        this.setState({
            'rating': e.target.value
        })
    }
    knowAbout = (e) => {
        // Check if array does not include what was checked
        if (!this.state.knowAbout.includes(e.target.value)) {
            let knowAboutArr = [...this.state.knowAbout]
            knowAboutArr.push(e.target.value)
            this.setState({
                'knowAbout': knowAboutArr
            })
            // this.setState({
            //     'knowAbout': [...this.state.knowAbout, e.target.value]
            // })
        // If array already includes the checked value, remove it from the array
        } else {
            // Clone array
            let knowAboutArr = [...this.state.knowAbout]
            // Remove item if it's already in the array by only including what is not the target value. Note that filter creates a new array.
            let knowAboutArrFiltered = knowAboutArr.filter((item) => item !== e.target.value)
            // Set state
            this.setState({
                'knowAbout': knowAboutArrFiltered
            })
        }


    }
}

export default SurveyForm