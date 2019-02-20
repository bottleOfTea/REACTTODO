import {createActions} from 'redux-actions';
import axios from 'axios';
import {serverRequest} from '../middlewares/serverMiddlewar'

export const workersGetAsync = createActions({
    'request': () => ({isLoading: true}),
    'failure': payload => ({error: payload, isLoading: false}),
    'success': payload => ({workers: payload, isLoading: false})
}, {prefix: 'worker/get'});

export const workersEditAsync = createActions({
    'request': () => ({isLoading: true}),
    'failure': payload => ({error: payload, isLoading: false}),
    'success': payload => ({worker: payload, isLoading: false})
}, {prefix: 'worker/edit'});

export const workersRemoveAsync = createActions({
    'request': () => ({isLoading: true}),
    'failure': payload => ({error: payload, isLoading: false}),
    'success': payload => ({id: payload, isLoading: false})
}, {prefix: 'worker/remove'});

export const loadWorkers = (state) => (dispatch) => {
    const {workers, isLoading} = state;
    if (!(isLoading && workers.length === 0)) {
        return null;
    }
    getWorkers()(dispatch);
};

export const getWorkers = () => (dispatch) => {
    dispatch(serverRequest(workersGetAsync, axios.get('/worker/list')));
};

export const editWorker = entity => async dispatch => {
    dispatch(serverRequest(workersEditAsync, axios.post('/worker/edit', {...entity})));
};

export const deleteWorker = id => dispatch => {
    dispatch(serverRequest(workersRemoveAsync, axios.delete(`/worker/remove/${id}`), data => data.id));
};
