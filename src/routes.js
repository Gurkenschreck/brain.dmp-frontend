import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import NotFound from './components/status/NotFound';

export default routes => (
    <Router history={browserHistory}>
            <Route path="/" component={App}> 
                <IndexRoute component={App} /> {/* Show start page, news etc */}
                <Route path="dumps" component={null}> {/* Show all dumps */}
                    <Route path=":dId" component={null} /> {/* Show a specific dump */}
                </Route>
                <Route path="questions" component={null}> {/* Show all questions*/}
                    <Route path=":qId" component={null} /> {/* Show a specific question */}
                </Route>
                <Route path="posters" component={null}> {/* Show all registered posters*/}
                    <Route path=":pId" component={null} /> {/* Show a specific poster */}
                </Route>
                <Route path="account" component={null}> {/* Show current accout config*/}
                    <Route path="signUp" component={null} /> {/* Registration page*/}
                    <Route path="signIn" component={null} /> {/* Login page*/}
                    <Route path="signOut" component={null} /> {/* Logout page */}
                </Route>
            </Route>
            <Route path='*' component={NotFound} />            
        </Router>
)