import React from 'react';
import LogoImage from '../../assets/images/burger-logo.png';
import './Logo.modules.css';

const logo = (props) => {
    return(
        <div className="Logo">
            <img src={LogoImage} alt={"My Burger"}/>
        </div>
    )
};

export default logo;