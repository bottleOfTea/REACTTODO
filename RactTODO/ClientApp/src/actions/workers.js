import {WORKERS_REQUEST, WORKERS_SUCCESS, WORKERS_FAILURE} from "./actionTypes";
import axios from 'axios';

const updateWorkers = workers => ({
    type: WORKERS_SUCCESS,
    workers
});


export const loadWorkers = (state) => async (dispatch) => {
    const {workers, isLoading} = state;
    if (!(isLoading && workers.length === 0)) {
        return null
    }
    await getWorkers(dispatch);
};

export const getWorkers = async dispatch => {
    dispatch({type: WORKERS_REQUEST});
    try {
        const workersResponse = await axios.get('/worker/list');
        const workers = await workersResponse.data;
        dispatch(updateWorkers(workers));
    } catch (err) {
        dispatch({type: WORKERS_FAILURE})
    }
};


