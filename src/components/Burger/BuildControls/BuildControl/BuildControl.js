import React from 'react';
import './BuildControl.modules.css';

const buildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button
                disabled={props.disabled}
                onClick={props.removeIng}
                className="Less">Less</button>
            <button
                onClick={props.addIng}
                className="More">More</button>
        </div>
    )
};
export default buildControl;