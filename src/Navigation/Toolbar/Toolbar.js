import React from 'react';
import classes from './Toolbar.css';
import LOGO from '../../components/Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props)=>(
  <header className={classes.Toolbar}>
    <div>MENU </div>
    <div className={classes.Logo}>

    <LOGO />
  </div>
    <nav className={classes.DesktopOnly}>
        <NavigationItems />
    </nav>

  </header>

);


export default toolbar;