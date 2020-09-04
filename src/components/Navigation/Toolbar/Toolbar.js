import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerTogge from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
    return ( 
        <header className={classes.Toolbar}>
            <DrawerTogge clicked={props.drawerToggleClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuth}/>
            </nav>
        </header>
     );
}
 
export default toolbar;