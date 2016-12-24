function createAsyncDispatcherMiddleware(xarg) {
    return function(store){
        return function(next) {
            return function(action) {
                if(typeof action === 'function') {
                    return action(dispatch, getState, xarg);
                }

                return next(action);
            }
        }
    }
}

const asyncMiddleware = createAsyncDispatcherMiddleware();
asyncMiddleware.withXArg = createAsyncDispatcherMiddleware;

export default asyncMiddleware;