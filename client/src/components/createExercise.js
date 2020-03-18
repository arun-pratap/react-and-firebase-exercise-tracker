import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
        this.onChange = this.onChange.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeDate = (date) => {
        this.setState({
            date: date
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newExercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(newExercise)
        axios.post('/exercises', newExercise)
            .then((res) => {
                console.log(res.data)
                return res.data
            })
            .then(() => {
                alert('Log created')
            })
            .catch((err) => {
                console.error(err)
            })

        // window.location = '/';
    }


    componentDidMount() {
        axios.get('/users')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map((user) => user.username),
                        username: res.data[0].username
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }



    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange}>
                            {
                                this.state.users.map((user) => {
                                    return <option
                                        key={user}
                                        value={user}>
                                        {user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            name="duration"
                            value={this.state.duration}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                showTimeSelect
                                dateFormat="Pp"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
