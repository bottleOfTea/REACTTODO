import { WORKERS_FAILURE, WORKER_EDIT_FAILURE, WORKER_REMOVE_FAILURE } from "../actions/actionTypes";

const initialState = {
    error: ''
};

const general = (state = initialState, action) => {
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

export default general;