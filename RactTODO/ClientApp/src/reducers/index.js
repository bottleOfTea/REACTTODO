import { combineReducers } from 'redux'
import workers, * as fromWorker  from './workerReducer'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export const getWorkers = state => fromWorker.getWorkers(state.workers);

export default combineReducers({
    workers,
    routing: routerReducer,
    form: formReducer
})