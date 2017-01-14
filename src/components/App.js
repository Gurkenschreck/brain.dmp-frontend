import React, {Component} from 'react';

import MainNavigation from './TopNav/MainNavigation.js';

class App extends Component {
    render() {
        return (
            <div>
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