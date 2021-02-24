import React from 'react';

class Booking extends React.Component {
    state = {
        fname: '',
        lname: '',
        seating: '',
        smoking: '',
        appetizer: []
    }

    render() {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label className="form-label">First Name: </label>
                    <input className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name: </label>
                    <input className="form-control" />
                </div>
                Seating:
                <div className="form-group">
                    <input type="radio" value=""/><label>1</label>
                </div>
                    <div className="form-group">
                        <label className="form-label">First Name: </label>
                        <input className="form-control" />
                    </div>

            </React.Fragment>
        )
    }
}

export default Booking