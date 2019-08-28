import {
    createStore
} from 'redux';
import countReducer from './reducers/count-reducer';

function configureStore(state = {
    count: 0
}) {
    return createStore(countReducer, state);
}
export default configureStore;