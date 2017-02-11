import React, {Component, PropTypes} from 'react';

import Log from './../../lib/Log';
import Button from './Button';
import './Button.css';
import './ToggleButton.css';

/**
 * The ToggleButton is a presentational component
 * which acts like a checkbox. It uses the button tag
 * and simulates a toggleable button. The style can be
 * overwritten.
 */
class ToggleButton extends Component {

    static propTypes = {
        /* The displayed text */
        title: PropTypes.string.isRequired,
        /* The id to be returned by the onToggle func */
        id: PropTypes.string.isRequired,
        /* The onToggle func (id, newState, event) */
        onToggle: PropTypes.func.isRequired,
        /* If the button is already active */
        isActive: PropTypes.bool,
        /* If the button is disabled */
        isDisabled: PropTypes.bool,
        /* The additional style of the button when active */
        activeStyle: PropTypes.string
    };

    static defaultProps = {
        isActive: false,
        disabled: false,
        activeStyle: ""
    };

    constructor(props) {
        super(props);

        this.state = {
            isActive: props.isActive
        }

        this._onToggleButton = this._onToggleButton.bind(this);
    }

    _onToggleButton(event){
        event.preventDefault();
        const newActiveState = !this.state.isActive;
        this.setState({isActive: newActiveState});

        this.props.onToggle(this.props.id, newActiveState, event);
    }

    render() {
        return (
            <Button onClick={this._onToggleButton}
                    isDisabled={this.props.isDisabled}
                    customStyle={this.state.isActive ? {border: "2px solid green"} : {}}>
                {this.props.title}
            </Button>
        );
    }
}

export default ToggleButton;