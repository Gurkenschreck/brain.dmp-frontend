"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store/store';

import App from './components/App';
import NotFound from './components/status/NotFound';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={App} />
                <Route path='*' component={NotFound} />
            </Route>
        </Router>
    </Provider>
, document.getElementById('root'));