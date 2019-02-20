import { combineReducers } from 'redux'
import { workers, getWorker as getWorkerReducer, getWorkers as getWorkersReducer } from './workerReducer';
import {general} from './generalReducer'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export const getWorkers = state => getWorkersReducer(state.workers);
export const getWorker = (state, id) => getWorkerReducer(state.workers, id);

export default combineReducers({
    general,
    workers,
    routing: routerReducer,
    form: formReducer
})