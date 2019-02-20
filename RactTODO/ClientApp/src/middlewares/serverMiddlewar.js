export default store => next => action => {
    const callAPI = action[mark]
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    actionServer(store.dispatch)(callAPI);
};

const actionServer = (dispatch) => async ({serverActions, request, responseData}) => {
    dispatch(serverActions.request());
    try {
        const response = await request;
        dispatch(serverActions.success(responseData(response)));
    } catch (err) {
        dispatch(serverActions.failure(err.toString()));
    }
}

export const serverRequest = (serverActions, request, responseData = data => data) => ({
    [mark]: {
        serverActions,
        request,
        responseData: response => responseData(response.data)
    }
})

const mark = 'mark';
