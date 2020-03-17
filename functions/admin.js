//firebase admin to use the database frequently locally
const admin = require('firebase-admin');

const firebaseConfig = {
    //you can find this config from firebase console after creating project
    //For additional information go to https://firebase.google.com/docs/web/setup
};
admin.initializeApp(firebaseConfig);
exports.dbRef = admin.firestore();