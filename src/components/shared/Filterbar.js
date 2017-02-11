import React, {Component, PropTypes} from 'react';

import Log from './../../lib/Log';

import ToggleButton from './ToggleButton';
import SearchBox from './SearchBox';
import './Filterbar.css';

/**
 * The Filterbar represents a bar-like component with 3
 * toggleable buttons and a search function.
 * 
 * Other react components can be placed inside of it.
 * The children will be rendered between the filter
 * buttons and the search function.
 */
class Filterbar extends Component {

    static propTypes = {
        /* Is called when any of the filter options change */
        onFilterChange: PropTypes.func.isRequired,
        filterSettings: PropTypes.object.isRequired
    }

    constructor(props){
        super(props);

        this.state = {
            ...props.filterSettings
        }

        this._filterBtnToggle = this._filterBtnToggle.bind(this);
        this._onSearchClick = this._onSearchClick.bind(this);
        this._filterChanged = this._filterChanged.bind(this);
        Log.info(Filterbar.name, 'constructed');
    }

    shouldComponentUpdate(nextprops, nextState) {
        if(JSON.stringify(this.state) !== JSON.stringify(nextState)) {
            Log.info(Filterbar.name, 'the filter changed. Calling update.');
            this._filterChanged(nextState);            
            return true;
        }
        return false;
    }

    _filterBtnToggle(id, newToggleState, event) {
        const stateChange = JSON.parse(JSON.stringify(this.state));
        stateChange[id] = newToggleState;
        this.setState(stateChange);
    }

    _onSearchClick(searchText) {
        this.setState({
            searchText
        });
    }

    _filterChanged(newFilterSettings) {
        this.props.onFilterChange(newFilterSettings);
    }

    render() {
        return (
            <div className="filterbar">
                <ToggleButton id="mineFilterBtn"
                    title="Mine" onToggle={this._filterBtnToggle} isActive={this.state.mineFilterBtn}/>
                <ToggleButton id="subscribedFilterBtn"
                    title="Subscribed" onToggle={this._filterBtnToggle} isActive={this.state.subscribedFilterBtn} />
                <ToggleButton id="publicFilterBtn"
                    title="Others" onToggle={this._filterBtnToggle} isActive={this.state.publicFilterBtn} />
                {this.props.children}
                <SearchBox onSearchClick={this._onSearchClick} 
                    searchTextPlaceholder="Title, text, tags..." />
            </div>
        );
    }
}

export default Filterbar;