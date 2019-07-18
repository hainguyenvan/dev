const firebase = require('firebase');
firebase.initializeApp({
    databaseURL: 'https://hello-world-82545.firebaseio.com'
});

const ref = firebase.database().ref();
const userRef = ref.child('users');
userRef.set([{
            "name": 'jack1',
            "age": 12,
            "phoneNumber": "12345678901"
        },
        {
            "name": "jack2",
            "age": 2,
            "phoneNumber": "12345678901"
        },
        {
            "name": "jack3",
            "age": 3,
            "phoneNumber": "12345678901"
        },
        {
            "name": "jack4",
            "age": 4,
            "phoneNumber": "12345678901"
        }
    ])
    .catch(err => {
        console.log('err =========================: ', err);
    });


// console.log('dbRef: ', dbRef);