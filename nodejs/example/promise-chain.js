console.log('Promise chain example');

const promise1 = function () {
    return new Promise((fulfill, reject) => {
        console.log('Promise 1 run');
        fulfill('promise1');
    });
}

const promise2 = function () {
    return new Promise((fulfill, reject) => {
        console.log('Promise 2 run');
        fulfill('promise2');
    })
}

const main = function () {
    promise1()
        .then(status => {
            console.log(status);
            return promise2();
        })
        .then(status => {
            console.log(status);
        })
        .catch(err => {
            console.log(err);
        })
}

main();