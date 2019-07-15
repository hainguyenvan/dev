const firebase = require("firebase-admin");

const serviceAccount = require("./service-account.key.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hello-world-82545.firebaseio.com"
});

const db = firebase.database();
const ref = db.ref("projectA/users");

// ref.on('value', function(snapshot) {
//     console.log('=== event value ===');
//     console.log('snapshot: ', snapshot.val());
// });

// order by child
ref.orderByKey().on('value', function(data) {
    console.log(data.key);
});

// ref.on('child_added', function(dataAdded, prevDataKey) {
//     console.log('=== event child_added ===');
//     console.log('data added: ', dataAdded.val());
//     console.log('data prev key ', prevDataKey);
// });