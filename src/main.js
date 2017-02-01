"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Routes from './routes';

if(LOG_ENABLE){
    const Log = require('./lib/Log').default;
    Log.logger = console;
    Log.level = LOG_LEVEL || Log.INFO;
    Log.info(`Logger startet. It works! Log.level=${Log.level}`);
}

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('root'));