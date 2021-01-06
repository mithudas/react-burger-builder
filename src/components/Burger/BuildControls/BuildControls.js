import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
];

const buildControls=(props)=>{

return (
 <div className={classes.BuildControls}>
 Total Price: {props.totalPrice}

 {controls.map(ctrl=>(
   <BuildControl key={ctrl.label } label ={ctrl.label}
   removed = {()=>{props.ingredientRemoved(ctrl.type)}}
   added={()=>{props.ingredientAdded(ctrl.type)}}

   />
 ))}
  <button disabled = {!props.purchasable} className={classes.OrderButton} onClick = {props.purchaseHandler}> Order Now</button>
 </div>
 );
};

export default buildControls;