import {
    WORKERS_REQUEST, WORKERS_SUCCESS, WORKERS_FAILURE,
    WORKER_EDIT_SUCCESS, WORKER_REMOVE_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    byId: {},
    isLoading: true
};

const workList = (state = initialState, action) => {
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
                isLoading: false
            };
        default:
            return state;
    }
};

const workerUpdate = (state, action) => {
    switch (action.type) {
        case WORKER_EDIT_SUCCESS:
            const { id } = action.worker;
            const worker = state[id];
            if (worker) {
                return {
                    ...state,
                    [id]: action.worker
                };
            }
            return state;
        case WORKER_REMOVE_SUCCESS:
            delete state[action.id];
            return state;

        default:
            return state;
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case WORKERS_REQUEST:
        case WORKERS_SUCCESS:
        case WORKERS_FAILURE:
            return workList(state, action);
        default:
            return {
                ...state,
                byId: workerUpdate(state.byId, action)
            };
    }
};

export const getWorkers = state => Object.values(state.byId);

export const getWorker = (state, id) => state.byId[id];
