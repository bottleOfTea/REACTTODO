import {WORKERS_REQUEST, WORKERS_SUCCESS, WORKERS_FAILURE} from "../actions/actionTypes"

const initialState = {
    byId: {},
    isLoading: true,
    error: ''
};

const workers = (state = initialState, action) => {
    switch (action.type) {
        case WORKERS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case WORKERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                byId: action.workers.reduce((obj, worker) => {
                    obj[worker.id] = worker;
                    return obj;
                }, {})
            };
        case WORKERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default workers;

export const getWorkers = state => Object.values(state.byId);
