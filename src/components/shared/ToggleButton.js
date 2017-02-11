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
        activeStyle: PropTypes.object
    };

    static defaultProps = {
        isActive: false,
        disabled: false,
        activeStyle: {
            "border": "2px solid green"
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            isActive: props.isActive
        }

        this.onToggleButton = this.onToggleButton.bind(this);
    }

    onToggleButton(event){
        event.preventDefault();
        const newActiveState = !this.state.isActive;
        this.setState({isActive: newActiveState});

        this.props.onToggle(this.props.id, newActiveState, event);
    }

    render() {
        return (
            <Button onClick={this.onToggleButton}
                    isDisabled={this.props.isDisabled}
                    customStyle={this.state.isActive ? this.props.activeStyle : {}}>
                {this.props.title}
            </Button>
        );
    }
}

export default ToggleButton;