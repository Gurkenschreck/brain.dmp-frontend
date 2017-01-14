import React, {Component} from 'react';

import Newspanel from './Newspanel';

/**
 * Wrapper for the Home route. 
 */
class Homepanel extends Component {
    render() {
        return (
            <div>
                <Newspanel />
            </div>
        );
    }
}

export default Homepanel;