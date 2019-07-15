const firebase = require("firebase-admin");

const serviceAccount = require("./service-account.key.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://hello-world-82545.firebaseio.com"
});

const db = firebase.database();

const ref = db.ref('projectA/users');
const firstUsersRef = db.ref('projectA/users').limitToFirst(2);
const lastUsersRef = db.ref('projectA/users').limitToLast(2);

firstUsersRef.on('value',
    function(data) {
        console.log('first user: ', data.val());
    },
    function(err) {
        console.log('err: ', err);
    });


lastUsersRef.on('value',
    function(data) {
        console.log('last users: ', data.val());
    },
    function(err) {
        console.log(err);
    });



ref.orderByChild('name').startAt('test').on('child_added',
    function(data) {
        console.log('startAt by test: ', data.val());
    },
    function(err) {
        console.log('err: ', err);
    });


ref.orderByChild('name').endAt('4').on('child_added',
    function(data) {
        console.log('endAt by 4: ', data.val());
    },
    function(err) {
        console.log('err: ', err);
    });

ref.orderByChild('name').equalTo('jack1').on('child_added',
    function(data) {
        console.log('equalTo by jack1: ', data.val());
    },
    function(err) {
        console.log('err: ', err);
    });