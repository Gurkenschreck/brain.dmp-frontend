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
                <Route path="dumps" component={null}>
                    <Route path=":dId" component={null} />
                </Route>
                <Route path="questions" component={null}>
                    <Route path=":qId" component={null} />
                </Route>
                <Route path="posters" component={null}>
                    <Route path=":pId" component={null} />
                </Route>
                <Route path="account" component={null}>
                    <Route path="signUp" component={null} />
                    <Route path="signIn" component={null} />                                      
                    <Route path="signOut" component={null} />                                      
                </Route>
            </Route>
            <Route path='*' component={NotFound} />            
        </Router>
    </Provider>
, document.getElementById('root'));