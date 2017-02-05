import React, {Component} from 'react';
import {connect} from 'react-redux';

import Log from './../../lib/Log';
import Filterbar from './../shared/Filterbar';
import './Dumpspanel.css';

/**
 * The Dumpspanel is the root component of route
 * #/dumps.
 * It contains the dumps filter and dumps board.
 */
export class Dumpspanel extends Component {

    render() {
        return (
            <div className="dumpspanel">
                <Filterbar />
                <div className="dumpspanel__main">
                    Some dumps
                    
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