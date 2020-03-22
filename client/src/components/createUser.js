import React, { Component } from 'react';
import axios from 'axios';



export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            addedUsers: '',
            deletedUsers: '',
            errors: '', //this property can be skip not useful
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    //Form Submission
    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username: this.state.username
        }
        axios
            .post('/users', newUser)
            .then((res) => {
                console.log(res.data);
            })
            .then(() => {
                alert('User Created')
            })
            //update users
            .then(() => {
                axios
                    .get('/countUsers')
                    .then((res) => {
                        this.setState({
                            addedUsers: parseInt(res.data.addedUsers) + parseInt(1),
                            deletedUsers: null
                        })
                        axios
                            .post('/countUsers', ({
                                addedUsers: this.state.addedUsers,
                                deletedUsers: null
                            }))
                            .then(() => {
                                console.log(this.state.addedUsers)
                            })
                    })
            })
            .catch((err) => {
                console.log(err);
            })
    };


    render() {
        return (
            <>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            name="username"
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Create User" />
                    </div>
                </form>
            </>
        )
    }
}