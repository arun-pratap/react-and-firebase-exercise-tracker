import React from 'react';
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

function App() {
  return (
    <div className="container">
      <h5>Procedure to log the user and exercise:</h5>
      <ul>
        <li><b>Create User</b></li>
        <li><b>Create Exercise Log</b></li>
        <li><b>Now see updates in table</b></li>
      </ul>

      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/exercises/:id" component={EditExercise} />
      <Route path="/user" component={CreateUser} />
    </div>
  );
}

export default App;
