const firebase = require("firebase-admin");

const serviceAccount = require("./service-account.key.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hello-world-82545.firebaseio.com"
});

const db = firebase.database();
const ref = db.ref("projectA/event-type");

ref.on('value', function (snapshot) {
    console.log('event value');
    console.log('snapshot: ', snapshot.val());
});

ref.on('child_added', function (dataAdded, prevDataKey) {
    console.log('event child_added');
    console.log('data added: ', dataAdded.val());
    console.log('data prev key ', prevDataKey);
});

ref.on('child_changed', function (dataUpdate) {
    console.log('event child_changed');
    console.log('data updated: ', dataUpdate.val());
});

ref.on('child_removed', function (dataRemved) {
    console.log('event child_removed');
    console.log('data removed: ', dataRemved.val());
});