//functions to handlehttps functions
const functions = require('firebase-functions');

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: true }));
app.use(express.json());

const { getAllUsers,
    createNewUser,
    getCountedUsers,
    postCountedUsers } = require('./handlers/userHandlers')
const {
    getAllExercisesOrId,
    postAndUpdateExercise,
    deleteExerciseById } = require('./handlers/exerciseHandlers')


//user routes
app.get('/users', getAllUsers)
app.post('/users', createNewUser)

//count users
app.get('/countUsers', getCountedUsers)
app.post('/countUsers', postCountedUsers)

//Exercise routes
app.get('/exercises/:id?', getAllExercisesOrId)
app.post('/exercises/:id?', postAndUpdateExercise)
app.delete('/exercises/:id', deleteExerciseById)
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });

exports.api = functions.region('us-central1').https.onRequest(app);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});