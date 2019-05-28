import React from 'react';

const validationComponent = (props) => {
    return (
        <p>{props.length < 5 ? "Text Too Short" : "Text Long Enough"}</p>
    )
}
export default validationComponent;