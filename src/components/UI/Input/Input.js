import React from 'react';

import "./Input.modules.css";

const input = (props) => {
    let inputElement = null;
    const inputClasses = ["InputElement"];
    if(props.touched && props.invalid && props.shouldValidate){
        inputClasses.push("Invalid")
    }
    switch (props.elementType) {
        case('input'):
            inputElement = <input
                name={props.name}
                onChange={props.changed}
                className={inputClasses.join(" ")}
                value={props.value}
                {...props.elementConfig}
            />
            break;
        case("textarea"):
            inputElement = <textarea
                name={props.name}
                onChange={props.changed}
                className={inputClasses.join(" ")}
                value={props.value}
                {...props.elementConfig}
            />
            break;
        case('select'):
            inputElement = (
                <select
                    name={props.name}
                    onChange={props.changed}
                    className={inputClasses.join(" ")}
                    value={props.value}>
                    {props.elementConfig.options.map(option => {
                        return(
                            <option key={option.value} value={option.value}>{option.displayValue}</option>
                        )
                    })}
                </select>
            )

            break;
        default:
            inputElement = <input
                className="InputElement"
                value={props.value}
                {...props.elementConfig}
            />
    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;