//functions to handle functions
const functions = require('firebase-functions');

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: true }));
app.use(express.json());

const { getAllUsers,
    createNewUser
} = require('./handlers/userHandlers')
const {
    getAllExercisesOrId,
    postAndUpdateExercise,
    deleteExerciseById } = require('./handlers/exerciseHandlers')


//user routes
app.get('/users', getAllUsers)
app.post('/users', createNewUser)

//Exercise routes
app.get('/exercises/:id?', getAllExercisesOrId)
app.post('/exercises/:id?', postAndUpdateExercise)
app.delete('/exercises/:id', deleteExerciseById)


//your region can be different
exports.api = functions.region('us-central1').https.onRequest(app);
