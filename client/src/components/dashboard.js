import React, { Component } from 'react'
import axios from 'axios';

class dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalUsers: '',
            addedUsers: '',
        }
    }

    componentDidMount() {
        axios.get('/users')
            .then((res) => {
                console.log(res.data.length);
                this.setState({
                    totalUsers: res.data.length,
                })
            })
            .catch((err) => {
                console.error(err)
            })
        axios.get('/countUsers')
            .then((res) => {
                this.setState({
                    addedUsers: res.data.addedUsers,
                    deletedUsers: res.data.deletedUsers
                })
                console.log(this.state.addedUsers)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    render() {
        const { totalUsers, addedUsers } = this.state
        return (
            <>
                <div className="container pb-5 bg-light border border-info w-90">

                    <h2 className="w-100 text-center mt-4 mb-4 text-primary">Dashboard</h2>


                    <div className="row justify-content-center">
                        {/***************** Total users *****************/}
                        <div className="card mb-4 mx-4" style={{ width: "18rem" }}>
                            <div className="card-body w-100 text-center">
                                <h3 className="card-title">Total Users </h3>
                                <h6 className="mb-2 display-1">
                                    <i className="fas fa-users text-primary"></i>
                                </h6>
                                <h2 className="card-text text-center">&nbsp;{totalUsers}</h2>
                            </div>
                        </div>

                        {/***************** Users added *****************/}
                        <div className="card mb-4 mx-4" style={{ width: "18rem" }}>
                            <div className="card-body w-100 text-center">
                                <h3 className="card-title">Users Added</h3>
                                <h6 className="mb-2 display-1">
                                    <i className="fas fa-users text-success"></i>
                                </h6>
                                <h2 className="card-text text-center">&nbsp;{addedUsers}</h2>
                            </div>
                        </div>

                    </div>
                </div>
                <h1 className="mt-5">
                    <b>Note:</b> don't reload, go back and go forward.otherwise it may show errors.
                            Just follow the procedure given above.
                        </h1>
            </>
        )
    }
}
export default dashboard; 