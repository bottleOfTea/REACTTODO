import { combineReducers } from 'redux'
import workers, * as fromWorker from './workerReducer'
import general from './generalReducer'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export const getWorkers = state => fromWorker.getWorkers(state.workers);
export const getWorker = (state, id) => fromWorker.getWorker(state.workers, id);

export default combineReducers({
    general,
    workers,
    routing: routerReducer,
    form: formReducer
})