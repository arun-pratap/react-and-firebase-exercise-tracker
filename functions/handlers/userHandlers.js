const { dbRef } = require('../admin')

//get all users
exports.getAllUsers = (req, res) => {
    dbRef.collection('users')
        .get()
        .then((data) => {
            let users = [];
            data.forEach((doc) => {
                users.push({
                    username: doc.data().username
                })
            });
            return res.json(users);
        })
        .catch((err) => {
            console.error(err);
        })
}

//create new user
exports.createNewUser = (req, res) => {
    const newUser = {
        username: req.body.username
    }
    dbRef.collection('users')
        .add(newUser)
        .then(() => {
            return require.send("user created")
        })
        .catch((err) => {
            console.error(err);
        })
    res.send("yeee!!!")
}

