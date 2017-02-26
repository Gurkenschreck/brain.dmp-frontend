import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import Log from './../../lib/Log';
import HttpClient from './../../lib/HTTPClient';
import Filterbar from './../shared/Filterbar';
import Dumpcard from './Dumpcart';
import './Dumpspanel.css';

/**
 * The Dumpspanel is the root component of route
 * #/dumps.
 * It contains the dumps filter and dumps board.
 */
export class Dumpspanel extends Component {

    static propTypes = {
        dumps: PropTypes.array
    }

    static defaultProps = {
        dumps: []
    }

    constructor(props) {
        super(props);

        this.state = {
            filterSettings: {
                subscribedFilterBtn: true,
                searchText: '',
                publicFilterBtn: false,
                mineFilterBtn: true
            },
            dumps: []
        }

        this._onFilterSettingsChange = this._onFilterSettingsChange.bind(this);
        this.getDumps = this.getDumps.bind(this);
        Log.info(Dumpspanel.name, 'constructed');
    }

    componentWillMount() {

        this.getDumps();

    }

    async getDumps(){

        const dumps = await HttpClient.get('dumps');

        this.setState({dumps})

    }


    /**
     * Triggers every time the filter options have changed.
     * @param {object} filterObj an object with the filter settings
     * @returns {void}
     */
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
                            {/* new */}
                </Filterbar>
                <div className="dumpspanel__main">
                    Some dumps
                    {
                        this.state.dumps.map((dump, key) => {
                            return <Dumpcard dump={dump} key={key} />
                        })
                    }
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