import React, {Component, PropTypes} from 'react';

import Log from './../../lib/Log';

import './SearchBox.css';

/**
 * The SearchBox consists of an text input field and
 * a search button. It calls the callback function
 * onSeachClick, when the search button has been clicked.
 */
class SearchBox extends Component {

    static propTypes = {
        /* The callback function to fire when the button has been clicked */
        onSearchClick: PropTypes.func.isRequired,        
        /* The pre defined search text of the input field*/
        searchText: PropTypes.string,
        /* The placeholder for the input field */
        searchTextPlaceholder: PropTypes.string,
        /* The text of the seach button. */
        buttonText: PropTypes.string
    };

    static defaultProps = {
        searchText: '',
        searchTextPlaceholder: '',
        buttonText: 'Search'
    };

    constructor(props) {
        super(props);

        this.state = {
            searchText: props.searchText
        }

        this._searchClick = this._searchClick.bind(this);
        this._handleInputChange = this._handleInputChange.bind(this);
    }

    _searchClick(event) {
        event.preventDefault();
        this.props.onSearchClick(this.state.searchText);
    }

    _handleInputChange(event) {
        event.preventDefault();
        this.setState({searchText: event.target.value});
    }

    render() {
        return (
            <div className="searchBox">
                <input className="searchBox__input" 
                        value={this.state.searchText} 
                        placeholder={this.props.searchTextPlaceholder}
                        onChange={this._handleInputChange}/>
                <button className="searchBox__button"
                         onClick={this._searchClick}>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}

export default SearchBox;