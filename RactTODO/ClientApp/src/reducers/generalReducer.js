import {WORKERS_FAILURE, WORKER_EDIT_FAILURE, WORKER_REMOVE_FAILURE} from "../actions/actionTypes";

import {workersEditAsync, workersGetAsync, workersRemoveAsync} from '../actions/actionCreaters';
import {handleActions, combineActions} from 'redux-actions';

const initialState = {
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case WORKERS_FAILURE:
        case WORKER_EDIT_FAILURE:
        case WORKER_REMOVE_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return {
                ...state,
                ...initialState
            };
    }
};


export const general = handleActions(
    {
        [combineActions(
            workersGetAsync.failure,
            workersEditAsync.failure,
            workersRemoveAsync.failure)]: (state, {payload: {error}}) => ({
            ...state,
            error
        })
    },
    initialState
);
