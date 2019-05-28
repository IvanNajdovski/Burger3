import React from 'react';
import './NavigationItem.modules.css';
import {NavLink, withRouter} from 'react-router-dom';

const navigationItem = (props) => {
    return (
        <li
            className="NavigationItem">
            <NavLink to={props.link} exact
            >{props.children}</NavLink></li>
    )
};
export default withRouter(navigationItem);