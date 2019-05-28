import React from 'react';
import './BuildControls.modules.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"},


];

const buildControls = (props) =>{
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    removeIng={() => props.removeIng(ctrl.type)}
                    addIng={() => props.addIng(ctrl.type)}
                    type={ctrl.type}
                    key={ctrl.label}
                    label={ctrl.label}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button
                onClick={props.ordered}
                disabled={!props.isPurchasable}
                className="OrderButton">ORDER NOW</button>
        </div>
    )
};
export default buildControls;