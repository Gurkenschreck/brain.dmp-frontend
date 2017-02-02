import React, {Component} from 'react';

import MainNavigation from './TopNav/MainNavigation.js';
import MainFooter from './MainFooter/MainFooter';
import './App.css';

class App extends Component {
    render() {
        return (
            <div id="app" className="app">
                <MainNavigation />
                <main className="app__main">
                    {this.props.children}
                </main>
                <MainFooter />
            </div>
        )
    }
}

export default App;