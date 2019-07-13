const firebase = require("firebase-admin");

const serviceAccount = require("./service-account.key.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hello-world-82545.firebaseio.com"
});

const db = firebase.database();
const ref = db.ref("projectA");
// ref.once('value', function (snapshot) {
//     console.log('snapshot: ', snapshot.val());
// });

// set data firebase
var eventRef = ref.child('event-type');
// eventRef.set({
//     event1: {
//         name: 'update',
//     }
// });

eventRef.push({
    name: 'add'
})

// eventRef.update({name:'update1'});