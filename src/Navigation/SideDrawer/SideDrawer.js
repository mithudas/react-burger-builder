import React from 'react';
import Logo from '../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../components/UI//BackDrop/BackDrop';
import Aux from '../../hoc/Auxilary';

import classes from './SideDrawer.css';

const sideDrawer = (props) =>{

let attachedClasses =[classes.SideDrawer, classes.Close];
if(props.open){
 attachedClasses =[classes.SideDrawer, classes.Open];
}
return (

<Aux>

      <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join (' ')}>

        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
        <NavigationItems />
        </nav>
        </div>
</Aux>
);
};


export default sideDrawer;