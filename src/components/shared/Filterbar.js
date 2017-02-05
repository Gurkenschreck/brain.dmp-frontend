import React, {Component} from 'react';

import Log from './../../lib/Log';

import ToggleButton from './ToggleButton';
import './Filterbar.css';

/**
 * The Filterbar represents a bar-like component with 3
 * toggleable buttons and a search function.
 */
class Filterbar extends Component {

    constructor(props){
        super(props);

        this.filterBtnToggle = this.filterBtnToggle.bind(this);
        Log.info(Filterbar.name, 'constructing');
    }

    filterBtnToggle(id, newToggleState, event) {
        Log.warnIf(typeof id === 'undefined',
                    Filterbar.name, 'filterBtnToggle id empty');
        Log.info(Filterbar.name, 'filterBtnToggle callback', id, newToggleState);
    }

    render() {
        return (
            <div className="filterbar">
                <ToggleButton id="mineFilterBtn"
                    title="Mine" onToggle={this.filterBtnToggle} />
                3 Filter buttons Textbox with search function
            </div>
        );
    }
}

export default Filterbar;