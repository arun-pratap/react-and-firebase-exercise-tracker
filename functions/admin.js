//firebase admin to use the database frequently locally
const admin = require('firebase-admin');
const key = require('./serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(key)
});
exports.dbRef = admin.firestore();