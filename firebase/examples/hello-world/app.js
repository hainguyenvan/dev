const firebase = require("firebase-admin");

const serviceAccount = require("./service-account.key.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hello-world-82545.firebaseio.com"
});

const db = firebase.database();
const ref = db.ref("projectA/noti1");
ref.once('value', function (snapshot) {
    console.log('snapshot: ', snapshot.val());
});

// set data firebase
var userRef = ref.child('users');
userRef.set({
    test1: {
        name: 'jack',
        age: 21
    },
    test2: {
        name2: 'jack2',
        age: 23
    }
});