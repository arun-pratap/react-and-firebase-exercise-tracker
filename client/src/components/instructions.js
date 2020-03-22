import React, { Component } from 'react'


export class instructions extends Component {
    render() {
        return (
            <>
                {/* <div className="row justify-content-center">
                    <h3> <Link to="/" className="btn-link bg-primary text-white px-2 py-2">Dashboard</Link></h3>
                </div> */}
                <div className="py-3">
                    <h5>Procedure to log the user and exercise:</h5>
                    <ul>
                        <li><b>Create User</b></li>
                        <li><b>Create Exercise Log</b></li>
                        <li><b>Now see updates in table</b></li>
                    </ul>
                </div>
            </>)
    }
}

export default instructions;