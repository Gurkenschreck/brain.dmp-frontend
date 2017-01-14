import React, {Component} from 'react';
import { Link } from 'react-router';

require('./MainNavigation.css');

class MainNavigation extends Component {
    render() {
        return (
            <header id="mainheader" className="mainheader">
                <ul className="mainheader__menu" >
                    <li className="mainheader__item">
                        <Link className="mainheader__itemlink" to="/">
                            Start
                        </Link>
                    </li>
                    <li className="mainheader__item">
                        <Link to="/dumps" className="mainheader__itemlink" activeClassName="mainheader__item--active">
                            Dumps
                        </Link>
                    </li>
                    <li className="mainheader__item">
                        <Link to="/questions" className="mainheader__itemlink" activeClassName="mainheader__item--active">
                            Questions
                        </Link>
                    </li>
                    <li className="mainheader__item">
                        <Link to="/posters" className="mainheader__itemlink" activeClassName="mainheader__item--active">
                            Posters
                        </Link>
                    </li>
                    <li className="mainheader__item">
                        <Link to="/account" className="mainheader__itemlink" activeClassName="mainheader__item--active">
                            Account
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default MainNavigation;