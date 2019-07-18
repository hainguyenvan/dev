const firebase = require("firebase-admin");

const serviceAccount = require("./service-account.key.json.js");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hello-world-82545.firebaseio.com"
});

const db = firebase.database();
const ref = db.ref();


// set data firebase
const userRef = ref.child('users');
userRef.set([{ name: 'jack1' }, { name: 'jack2' }, { name: 'jack3' }]);