import {
    put,
    takeEvery,
    takeLatest,
    all,
    select,
    take
} from 'redux-saga/effects';

function* fetchNews() {
    const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json());
    console.log('data json: ', json);
    yield put({
        type: 'NEWS_RECEIVED',
        json: json.articles || [{
            error: json.message
        }]
    })
}

function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('done');
        }, 3000);
    });
}

function* test1() {
    const data = yield promise1();
    console.log('test1: ', data);
    yield put({
        type: 'NEWS_RECEIVED'
    })
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews);
}

function* actionWatcher1() {
    yield takeEvery('GET_NEWS', test1);
}

// function* watchAndLog() {
//     yield takeEvery('*', function* logger(action) {
//         const state = yield select();
//         console.log('state: ', state);
//         console.log('action: ', action);
//     });
// }

function* watchAndLog() {
    while (true) {
        const action = yield take('*')
        const state = yield select()

        console.log('action', action)
        console.log('state after', state)
    }
}

function* watchFirstThree() {
    for (let i = 0; i < 2; i++) {
        const action = yield take('GET_NEWS');
        console.log('first action: ', action);
    }
}

export default function* rootSaga() {
    yield all([actionWatcher(), actionWatcher1(), watchAndLog(), watchFirstThree()]);
}