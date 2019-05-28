import React from 'react';
import './Toolbar.modules.css';
import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return(
        <header className="Toolbar">
            <DrawerToggle clicked={props.openSideDrawer}/>

            <div style={{height: "80%"}}>
                <Logo/>
            </div>
            <nav className="DesktopOnly">
                <NavigationItems/>
            </nav>
        </header>
    )
};

export default toolbar;