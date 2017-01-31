import React, {Component} from 'react';
import {connect} from 'react-redux';

/**
 * The Dumpspanel is the root component of route
 * #/dumps.
 * It contains the dumps filter and dumps board.
 */
export class Dumpspanel extends Component {
    render() {
        return (
            <div>
                Some dumps
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