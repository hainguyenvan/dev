import {
    createStore
} from 'redux';
import rotateReducer from './reducers/rotate-reducer';

function configureStore(state = {
    rotating: true
}) {
    return createStore(rotateReducer, state);
}
export default configureStore;