const { dbRef } = require('../admin');


//post and update exercise
exports.postAndUpdateExercise = (req, res) => {
    const id = req.params.id
    const newExercise = {
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    }
    if (!id) {
        dbRef.collection(`exercises`)
            .add(newExercise)
            .then(() => {
                return res.send("exercise created")
            })
            .catch((err) => {
                console.error(err);
            })
        return res.json(newExercise);
    } else {
        dbRef
            .doc(`exercises/${id}`)
            .set(newExercise)
            .then(() => {
                return res.send("exercise updated")
            })
            .catch(() => {
                return res.json({ error: "something went wrong" })
            })
    }
}

//get all exercises or get exercise by id
exports.getAllExercisesOrId = (req, res) => {
    const id = req.params.id
    if (!id) {
        dbRef.collection('exercises')
            .get()
            .then((data) => {
                const exercises = [];
                data.forEach((doc) => {
                    exercises.push({
                        id: doc.id,
                        username: doc.data().username,
                        description: doc.data().description,
                        duration: doc.data().duration,
                        date: doc.data().date
                    })
                })
                return res.json(exercises)
            })
            .catch((err) => {
                console.error(err);
            })
    } else {
        dbRef.doc(`exercises/${id}`)
            .get()
            .then((doc) => {
                return res.json(doc.data())
            })
            .catch((err) => {
                console.error(err)
            })
    }
}

//delete exercise by id
exports.deleteExerciseById = (req, res) => {
    const document = dbRef.doc(`/exercises/${req.params.id}`)
    document.get()
        .then((doc) => {
            if (!doc.exists) {
                return res.json({ error: "Doesn't exists" })
            } else {
                document.delete();
                return res.send(`Document ${req.params.id} deleted`)
            }
        })
        .catch(() => {
            return res.send("something went wrong")
        })
}