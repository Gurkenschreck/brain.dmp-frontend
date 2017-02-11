import React, { Component, PropTypes } from 'react';

import './Button.css';

/**
 * A standard button with the default styling.
 * You can change the text and register a 
 * postback function.
 */
class Button extends Component {

    static propTypes = {
        /* The callback function */
        onClick: PropTypes.func.isRequired,
        /* If the button is disabled */
        isDisabled: PropTypes.bool,
        /* A custom css class name */
        customStyle: PropTypes.object
    }

    static defaultProps = {
        isDisabled: false,
        customStyle: {} 
    }

    render() {
        return (
            <button className='button'
                    onClick={this.props.onClick}
                    disabled={this.props.isDisabled}
                    style={this.props.customStyle} >
                {this.props.children}
            </button>
        );
    }
}

export default Button;