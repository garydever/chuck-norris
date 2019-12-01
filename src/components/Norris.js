import React from 'react';

const Norris = (props) => {
    return (
        <div>
            {props.norrisFact && <h4>{props.norrisFact}</h4>}
            {props.error && <h4>{props.error}</h4>}
        </div>
    )
}

export default Norris;