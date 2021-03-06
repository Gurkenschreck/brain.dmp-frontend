import React, {Component, PropTypes} from 'react';

import Log from './../../lib/Log';

import Textfield from './Textfield';
import Button from './Button';
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
        buttonText: 'Search',
        isDisabled: false
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
                <Textfield value={this.state.searchText}
                        placeholder={this.props.searchTextPlaceholder}
                         customClass="searchBox__input"
                         onChange={this._handleInputChange} />
                <Button onClick={this._searchClick}>
                    {this.props.buttonText}
                </Button>
            </div>
        );
    }
}

export default SearchBox;