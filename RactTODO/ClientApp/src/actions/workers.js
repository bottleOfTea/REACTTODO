import {
    WORKERS_REQUEST, WORKERS_SUCCESS, WORKERS_FAILURE,
    WORKER_EDIT_REQUEST, WORKER_EDIT_SUCCESS, WORKER_EDIT_FAILURE,
    WORKER_REMOVE_REQUEST, WORKER_REMOVE_SUCCESS, WORKER_REMOVE_FAILURE
} from "./actionTypes";
import axios from 'axios';

const updateWorkers = workers => ({
    type: WORKERS_SUCCESS,
    workers
});

const updateWorker = (worker) => ({
    type: WORKER_EDIT_SUCCESS,
    worker
});

const removeWorker = (id) => ({
    type: WORKER_REMOVE_SUCCESS,
    id
});

export const loadWorkers = (state) => async (dispatch) => {
    const { workers, isLoading } = state;
    if (!(isLoading && workers.length === 0)) {
        return null
    }
    await getWorkers(dispatch);
};

export const getWorkers = async dispatch => {
    dispatch({ type: WORKERS_REQUEST });
    try {
        const workersResponse = await axios.get('/worker/list');
        const workers = await workersResponse.data;
        dispatch(updateWorkers(workers));
    } catch (err) {
        dispatch({ type: WORKERS_FAILURE });
    }
};

export const editWorker = worker => async dispatch => {
    dispatch({ type: WORKER_EDIT_REQUEST });
    try {
        dispatch(updateWorker(worker));
        return new Promise((resolve) => {
            dispatch(updateWorker(worker));
            resolve();
        });
    } catch (err) {
        dispatch({ type: WORKER_EDIT_FAILURE });
    }
};

export const deleteWorker = id => dispatch => {
    dispatch({ type: WORKER_REMOVE_REQUEST });
    try {
        dispatch(removeWorker(id));
    } catch (err) {
        dispatch({ type: WORKER_REMOVE_FAILURE });
    }
};