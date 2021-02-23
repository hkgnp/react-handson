import React from 'react'

class ContactUs extends React.Component {
    state = {
        fname: '',
        lname: '',
        enquiryType: '',
        country: '',
        keepInTouch: []
    }

    render() {
        return <React.Fragment>
            <div>
                {/* First Name*/}
                <div>
                    <label className="form-label">First Name:</label>
                    <input type="text" name="fname" value={this.state.fname} onChange={this.getFormData} />
                </div>

                {/* Last Name*/}
                <div>
                    <label className="form-label">Last Name:</label>
                    <input type="text" name="lname" value={this.state.lname} onChange={this.getFormData} />
                </div>

                {/* Enquiry Type */}
                <div>
                    <label className="form-label">Type of Enquiry:</label>
                    <select className="form-control" name="enquiryType" value={this.state.enquiryType} onChange={this.getFormData}>
                        <option></option>
                        <option>Support</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                    </select>
                </div>

                {/* Country */}
                <div>
                    <label className="form-label">What country are you from:</label>
                    <select className="form-control" name="country" value={this.state.country} onChange={this.getFormData}>
                        <option></option>
                        <option>Singapore</option>
                        <option>Malaysia</option>
                        <option>Thailand</option>
                    </select>
                </div>

                {/* Submit button */}
                <div>
                    <button className="btn btn-primary" onClick={this.submitForm} disabled={!this.state.fname || !this.state.lname || !this.state.enquiryType || !this.state.country}>Submit</button>
                </div>

                {/* Checkboxes */}
                <div>
                    <div>
                        <label className="form-label">Keep in Touch</label>
                    </div>
                    <div>
                        <input type="checkbox" className="form-check-input" value="email" name="keepInTouch" onChange={this.keepInTouch} />
                        <label className="form-check-label">Email</label>
                    </div>
                    <div>
                        <input type="checkbox" className="form-check-input" value="phone" name="keepInTouch" onChange={this.keepInTouch} />
                        <label className="form-check-label">Phone</label>
                    </div>
                    <div>
                        <input type="checkbox" className="form-check-input" value="snailmail" name="keepInTouch" onChange={this.keepInTouch} />
                        <label className="form-check-label">Snail Mail</label>
                    </div>
                </div>

            </div>
        </React.Fragment>
    }

    getFormData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    keepInTouch = (e) => {
        if (!this.state.keepInTouch.includes(e.target.value)) {
            let keepInTouchArr = [...this.state.keepInTouch]
            keepInTouchArr.push(e.target.value)

            this.setState({
                'keepInTouch': keepInTouchArr
            })
        } else {
            let keepInTouchArr = [...this.state.keepInTouch]
            let keepInTouchArrFiltered = keepInTouchArr.filter((item) => {
                item !== e.target.value;
            })
            this.setState({
                'keepInTouch': keepInTouchArrFiltered
            })
        }
    }

    submitForm = () => {
        alert(`Dear ${this.state.fname} ${this.state.lname}, thank you for submitting your enquiry. The details of your message are as follows:
            Enquiry Type: ${this.state.enquiryType}
            Country: ${this.state.country}
            Contact method: ${this.state.keepInTouch}
            `)
    }
}

export default ContactUs