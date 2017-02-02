import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';

import Homepanel from './components/Home/Homepanel';
import Dumpspanel from './components/Dumps/Dumpspanel';
import Questionspanel from './components/Questions/Questionspanel';
import Posterspanel from './components/Posters/Posterspanel';
import Accountpanel from './components/Account/Accountpanel';

import NotFound from './components/status/NotFound';

export default (routes) => (
    <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Homepanel} /> {/* Show start page, news etc */}
                <Route path="dumps" component={Dumpspanel}> {/* Show all dumps */}
                    <Route path=":dId" component={null} /> {/* Show a specific dump */}
                </Route>
                <Route path="questions" component={Questionspanel}> {/* Show all questions*/}
                    <Route path=":qId" component={null} /> {/* Show a specific question */}
                </Route>
                <Route path="posters" component={Posterspanel}> {/* Show all registered posters*/}
                    <Route path=":username" component={null} /> {/* Show a specific poster */}
                </Route>
                <Route path="account" component={Accountpanel}> {/* Show current accout config*/}
                    <Route path="signUp" component={null} /> {/* Registration page*/}
                    <Route path="signIn" component={null} /> {/* Login page*/}
                    <Route path="signOut" component={null} /> {/* Logout page */}
                </Route>
            </Route>
            <Route path='*' component={NotFound} />
        </Router>
)