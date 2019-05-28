import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';

import './SideDrawer.modules.css';

const sideDrawer = (props) => {
    let attachedClasse = ["SideDrawer","Close"];
    if(props.open){
       attachedClasse = ["SideDrawer", "Open"]
    }

    return (
        <React.Fragment>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasse.join(" ")}>
                <div style={{
                    height: "11%",
                    marginBottom: "32px"
                }}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    )
};

export default sideDrawer;