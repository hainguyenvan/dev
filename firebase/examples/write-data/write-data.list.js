const firebase = require("firebase-admin");

const serviceAccount = require("./service-account.key.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hello-world-82545.firebaseio.com"
});

const db = firebase.database();
const ref = db.ref("projectA");
ref.on('value', function (snapshot) {
    console.log('snapshot: ', snapshot.val());
});

// set data firebase
var playerRef = ref.child('players');
// playerRef.set([{
//         name: 'jack',
//         age: 21
//     },
//     {
//         name2: 'jack2',
//         age: 23
//     }
// ]);

// playerRef.push({
//     name: 'jack3',
//     age: 3
// });

console.log(playerRef.key);