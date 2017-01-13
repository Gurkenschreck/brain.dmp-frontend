import React, {Component} from 'react';

import MainNavigation from './TopNav/MainNavigation.js';

class App extends Component {
    render() {
        return (
            <div style={{padding:0, margin:0}}>
                <MainNavigation />
                <main>
                    Hellooo
                </main>
                <footer>
                    Some disclaimer/info footer with links
                </footer>
            </div>
        )
    }
}

export default App;