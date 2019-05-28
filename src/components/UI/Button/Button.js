import React from 'react';
import './Button.modules.css'

const button = (props) => (
    <button
        disabled={props.disabled}
        className={["Button", props.buttonType].join(" ")}
        onClick={props.clicked}>{props.children}</button>
);
export default button;