import Log from './../../lib/Log';

const createAsyncDispatcherMiddleware = () => {
    return (store) => {
        return (next) => {
            return (action) => {
                Log.info('Dispatching action', action);

                return next(action);
            }
        }
    }
}

const loggingMiddleware = createAsyncDispatcherMiddleware();

export default loggingMiddleware;