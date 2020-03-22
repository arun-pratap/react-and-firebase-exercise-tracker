import React, { Component } from 'react'
import './App.css';

//
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//
import Navbar from "./components/navBar"
import ExercisesList from "./components/exercisesList";
import EditExercise from "./components/editExercise";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";
import Instructions from './components/instructions';
import Dashboard from './components/dashboard';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <br />
        <Route path="/exerciselist" component={ExercisesList} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/exercises/:id" component={EditExercise} />
        <Route path="/user" component={CreateUser} />
        <Instructions />
        <Route exact path={["/", "/react-and-firebase-exercise-tracker"]} component={Dashboard} />
      </div>
    )
  }
}


export default App;
