import React, {Component} from 'react';

import Aux from '../../hoc/Auxilary';
import classes from  './Layout.css';

import Toolbar from '../../Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
class  Layout  extends Component {
state={
showSideDrawer : true
}


showSideDrawerCloseHandler =()=>{
this.setState({showSideDrawer: false})
}

render (){
return (
<Aux>
<div>Toolbar, Sidebar, Backdrop </div>
<Toolbar />
<SideDrawer open = {this.state.showSideDrawer}
closed={this.showSideDrawerCloseHandler}/>


<main className={classes.Content}>
   {this.props.children}
</main>

</Aux>
)

}
};

export default Layout;