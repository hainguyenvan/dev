// config rules
// {
//     "rules": {
//         ".read": true,
//         ".write": true
//     }
// }

const firebase = require('firebase');
firebase.initializeApp({
    databaseURL: 'https://hello-world-82545.firebaseio.com'
});

// defined root
const ref = firebase.database().ref();
const userRef = ref.child('users');
userRef.set([
    { name: 'jack1' },
    { name: 'jack2' }
]).catch(err => {
    console.log('err: ', err);
})