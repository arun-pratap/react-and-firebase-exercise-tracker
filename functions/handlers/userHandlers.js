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
        .then((res) => {
            return res.send("user created")
        })
        .catch((err) => {
            console.error(err);
        })
    res.send("yeee!!!")
}

// count users
exports.getCountedUsers = (req, res) => {
    dbRef
        .doc('usersCount/count')
        .get()
        .then((data) => {
            return res.json(data.data());
        })
        .catch((err) => {
            console.error(err)
        })
}

exports.postCountedUsers = (req, res) => {
    const countUsers = {
        addedUsers: req.body.addedUsers,
        deletedUsers: req.body.deletedUsers,
    }
    dbRef
        .doc('usersCount/count')
        .set(countUsers)
        .then(() => {
            return res.send("count updated")
        })
        .catch((err) => {
            console.error(err)
        })
}