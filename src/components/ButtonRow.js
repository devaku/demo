import React from 'react';
import Button from './Button';

function ButtonRow(props) {
    let { value } = props;
    return (
        <div className="d-flex flex-row w-100">
            <Button style="w-100" value={value}></Button>
        </div>
    );
}

export default ButtonRow;
