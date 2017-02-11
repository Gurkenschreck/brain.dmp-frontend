import React, {Component} from 'react';
import {connect} from 'react-redux';

import Log from './../../lib/Log';
import Filterbar from './../shared/Filterbar';
import './Dumpspanel.css';

/**
 * The Dumpspanel is the root component of route
 * #/dumps.
 * It contains the dumps filter and dumps board.
 */
export class Dumpspanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterSettings: {
                subscribedFilterBtn: true,
                searchText: '',
                publicFilterBtn: false,
                mineFilterBtn: true
            }
        }

        this._onFilterSettingsChange = this._onFilterSettingsChange.bind(this);
         Log.info(Dumpspanel.name, 'constructed');
    }

    _onFilterSettingsChange(filterObj) {
        Log.info(Dumpspanel.name,
            `the filter settings have changed.`,
            `New: ${JSON.stringify(filterObj)}`);
        this.setState({filterObj});
    }

    render() {
        return (
            <div className="dumpspanel">
                <Filterbar filterSettings={this.state.filterSettings} 
                            onFilterChange={this._onFilterSettingsChange}>
                    b
                </Filterbar>
                <div className="dumpspanel__main">
                    Some dumps
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (state, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dumpspanel);