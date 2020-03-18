import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class ExercisesList extends Component {

    constructor() {
        super();
        this.state = {
            exercises: [],
        }

        this.onDeleteExercise = this.onDeleteExercise.bind(this);
    }

    componentDidMount() {
        axios.get('/exercises')
            .then((res) => {
                this.setState({
                    exercises: res.data
                })
            })
            .catch((err) => {
                console.error(err)
            })
    }

    onDeleteExercise = (key) => {
        axios.delete(`/exercises/` + key)
            .then((res) => {
                console.log(`deleted ${key}`)
            })
            .then(() => {
                alert('successfully deleted')
            })
        this.setState({
            exercises: this.state.exercises.filter((data) => data.id !== key)
        })
    }
    render() {
        const { exercises } = this.state
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            exercises.map((exercise) => {
                                let id = exercise.id
                                return (<tr key={id}>
                                    <td>{exercise.username}</td>
                                    <td>{exercise.description}</td>
                                    <td>{exercise.duration}</td>
                                    <td>{exercise.date}</td>
                                    <td>
                                        <Link to={`/exercises/${id}`}>edit</Link> | <Link to="#" onClick={() => this.onDeleteExercise(id)} >delete</Link>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}