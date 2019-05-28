import React from 'react';

const cockpit = (props) => {
    let moreStyle = props.show ? "active" : null;
    return (
        <React.Fragment>
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button
                className={["Button", moreStyle].join(" ").trim()}
                onClick={props.toggle}>Toggle Persons
            </button>
        </React.Fragment>
    )
};
export default cockpit;