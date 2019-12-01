import React from 'react';

const Form = (props) => {
    return (
        <div>
            <h2>What are <strong>you</strong> most concerned with?</h2>
            <form onSubmit={props.chuckIt}>
                <input name="term"></input>
                <button>Chuck it.</button>
            </form>
        </div>
    )
}

export default Form;