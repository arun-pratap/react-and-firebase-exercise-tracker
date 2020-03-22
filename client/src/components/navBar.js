import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <Link to="/" className="navbar-brand"><h2 className="">Excercise-Tracker</h2></Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link text-white">Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link text-white">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/exerciselist" className="nav-link text-white">Exercise Lists</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}