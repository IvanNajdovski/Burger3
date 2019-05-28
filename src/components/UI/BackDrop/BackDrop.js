import React from 'react';
import './BackDrop.modules.css'

const backdrop = (props) => {
    return (
        props.show ? <div onClick={props.clicked} className="BackDrop"></div> : null
    )
};
export default backdrop;