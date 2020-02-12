import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import { Media } from 'reactstrap';

 function ReadMore( props ) {

    const [ truncated, setTruncated ] = useState(false);
    const [ expanded, setExpanded ] = useState(false);

    const handleTruncate = (currentTruncated) => {
        if (truncated !== currentTruncated) {
            setTruncated(currentTruncated);
        }
    }
 
    const toggleLines = (event) => {
        event.preventDefault();

        setExpanded(!expanded);
    }

    const {
            children,
            more,
            less,
            lines 
    } = props;
 
    return (
            <div>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(
                        <React.Fragment>
                        <span>...</span>
                        <a href="#" onClick={toggleLines}>{more}</a>
                        </React.Fragment>
                    )}
                    onTruncate={handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <span> <a href='#' onClick={toggleLines}>{less}</a></span>
                )}
            </div>
        );
}
 
ReadMore.defaultProps = {
    lines: 3,
    more: 'Read more',
    less: 'Show less'
};
 
ReadMore.propTypes = {
    children: PropTypes.node.isRequired,
    lines: PropTypes.number,
    less: PropTypes.string,
    more: PropTypes.string
};
 
export default ReadMore;