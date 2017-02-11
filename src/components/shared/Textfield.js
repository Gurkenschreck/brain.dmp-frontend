import React, { Component, PropTypes } from 'react';

import './Textfield.css';

/**
 * Normal textfield like input type text.
 * 
 */
class Textfield extends Component {

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        customClass: PropTypes.string
    }

    static defaultProps = {
        placeholder: '',
        customClass: ''
    }

    render() {
        return (
            <input type="text"
                    className={`textfield ${this.props.customClass}`}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange} />
        );
    }
}

export default Textfield;