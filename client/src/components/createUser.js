import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            errors: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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
            .catch((err) => {
                console.log(err);
            })
    };

    render() {
        return (
            <div>
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
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}