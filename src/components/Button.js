import React from 'react';

function Button(props) {
    let { className, value, handleClick } = props;
    return (
        <button onClick={handleClick} className={className}>
            {value}
        </button>
    );
}

export default Button;
