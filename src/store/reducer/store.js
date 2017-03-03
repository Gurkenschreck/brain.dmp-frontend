import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// asyncmiddleware
import asyncDispatcherMiddleware from './middleware/asyncDispatcher';
import loggingMiddleware from './middleware/dispatchLogger';

import reducer from './reducer/combined';

const composeEnhancers = composeWithDevTools({
    name: 'brain.dmp-frontend', actionsBlacklist: ['REDUX_STORAGE_SAVE']
});

const store = createStore(reducer, composeEnhancers(
    applyMiddleware (
        loggingMiddleware,
        asyncDispatcherMiddleware
    )
));

export default store;