# Basic Concepts
* takeEvery: cho phép chạy nhiều saga cùng một lúc
* takeLatest: chỉ cho phép chạy từng sagas, nếu một task của một hàm mà chưa chạy xong mà nó đã bị gọi thì task đó sẽ bị hủy. takeLatest sẽ lấy kết quả cuối cùng
```
Unlike takeEvery, takeLatest allows only one fetchData task to run at any moment. And it will be the latest started task. If a previous task is still running when another fetchData task is started, the previous task will be automatically cancelled.
```
* Tùy thuộc vào task mà sử dụng takeEvery hay takeLatest


# Declarative Effects
* Redux saga cung cấp package để effects các dispatch
* https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html#


# Pulling future actions
* Chúng ta sử dụng để có thể listen tất cả các dispatch của một redux
* Cú pháp với takeEvery
```
import { select, takeEvery } from 'redux-saga/effects'

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  })
}
```

* Cú pháp với take
```
import { select, take } from 'redux-saga/effects'

function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  }
}
```

* Chỉ muốn listen số lượng dispatch nhất định. Ở đây là chúng ta đang listen 3 lần
```
import { take, put } from 'redux-saga/effects'

function* watchFirstThreeTodosCreation() {
  for (let i = 0; i < 3; i++) {
    const action = yield take('TODO_CREATED')
  }
  yield put({type: 'SHOW_CONGRATULATION'})
}
```

# Non blocking calls
* Fork lấy về task đang thực thi
* Cancel: Hủy một task

# Running tasks in parallel
* Giống promise.all, chúng ta có thể run nhiều task cùng một lúc

# Starting a race between mutiple
* Example
```
import { race, take, call } from 'redux-saga/effects'

function* backgroundTask() {
  while (true) { ... }
}

function* watchStartBackgroundTask() {
  while (true) {
    yield take('START_BACKGROUND_TASK')
    yield race({
      task: call(backgroundTask),
      cancel: take('CANCEL_TASK')
    })
  }
}
```
* Task này sẽ bị hủy khi nhận được dispatch **CANCEL_TASK**

# Sequencing Sagas using yield
* Chúng ta có thể sử dụng yield để đồng bộ các quá trình gọi hàm

# Composing Sagas
* https://redux-saga.js.org/docs/advanced/ComposingSagas.html

# Task cancellation
* Hủy một task trong redux saga
* https://redux-saga.js.org/docs/advanced/TaskCancellation.html

# Redux saga fork model

# Channels
* Redux sử dụng channels để có thể giao tiếp với các events source bên ngoài