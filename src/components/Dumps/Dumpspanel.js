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
 * 
 * The dumps panel calls fetchDumps when it is 
 * mounted and has no dumps in it's props.
 * fetchDumps is also called when the filter 
 * settings have been changed.
 */
export class Dumpspanel extends Component {

    static propTypes = {
        /**
         * The dumps to display.
         */
        dumps: PropTypes.arrayOf(PropTypes.shape({

        })),

        /**
         * Is called when no dumps are passed in as a props
         * while componentWillMount is called.
         * It will also be called when the filter options 
         * were changed.
         */
        fetchDumps: PropTypes.func,

        /**
         * The filterObj contains the settings for the
         * Filterbar.
         */
        filterObj: PropTypes.object
    }

    static defaultProps = {
        dumps: [],
        fetchDumps: (filterObj) => {},
        filterObj: {
            filterSettings: {
                subscribedFilterBtn: true,
                searchText: '',
                publicFilterBtn: false,
                mineFilterBtn: true
            },
            dumps: []
        }
    }

    constructor(props) {

        super(props);

        this.state = props.filterObj;

        this._onFilterSettingsChange = this._onFilterSettingsChange.bind(this);
        Log.info(Dumpspanel.name, 'constructed');

    }

    componentWillMount() {

        this.fetchIfNeeded();

    }

    async fetchIfNeeded() {

        if(this.props.dumps.length === 0){
            const dumps = await this.props.fetchDumps();
            this.setState({dumps});
        }
        
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

    return { }

}

const mapDispatchToProps = (state, ownProps) => {
    return {
        async fetchDumps() {
            const dumps = await HttpClient.get('dumps');
            return dumps;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dumpspanel);