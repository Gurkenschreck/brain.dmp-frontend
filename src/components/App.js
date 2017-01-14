import React, {Component} from 'react';

import MainNavigation from './TopNav/MainNavigation.js';
require('./App.css');

class App extends Component {
    render() {
        return (
            <div id="app" className="app">
                <MainNavigation />
                <main className="app__main">
                    {this.props.children}
                </main>
                <footer className="app__footer">
                    Some disclaimer/info footer with links
                </footer>
            </div>
        )
    }
}

export default App;