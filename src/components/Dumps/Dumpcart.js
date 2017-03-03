import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

class Dumpcart extends Component {

    static propTypes = {
        dump: PropTypes.shape({
            title: PropTypes.string.isRequired,
            authorName: PropTypes.string.isRequired,
            createdOn: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            medianRating: PropTypes.number.isRequired,
            ratingCount: PropTypes.number.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string),
            links: PropTypes.arrayOf(PropTypes.object)
        }).isRequired
    }

    static defaultProps = {
        
    }

    render() {
        const {dump} = this.props;
        return (
            <div>
                <p>
                    {dump.title}
                </p>
                <p>
                    {dump.authorName}
                </p>
                <p>
                    {dump.createdOn}
                </p>
                <p>
                    {dump.content}
                </p>
                <p>
                    {dump.medianRating} {dump.ratingCount}
                </p>

                <p>
                    Tags: {dump.tags.map(tag => {return tag;})}
                </p>
                {/*<Link to={dump.links.find(x => x.rel === 'self').href}>
                    Link To more
                </Link>*/}
                Link to more
            </div>
        );
    }
}

export default Dumpcart;