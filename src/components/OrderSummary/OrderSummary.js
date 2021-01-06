import React from  'react';

import Aux from '../../hoc/Auxilary';
import Button from '../UI/Button/Button'

const orderSummary =(props) =>{

const ingredientsSummary = Object.keys(props.ingredients)
.map(igKey => {
return <li> <span style = {{textTransform: 'capitalize'}}> {igKey} </span>: {props.ingredients[igKey]}
 </li>
 })

return (
<Aux>
<h1> order Summary </h1>
<p> A delicious burger with following ingredients </p>
<ul>
  {ingredientsSummary}
</ul>
<p><strong> Total Price: </strong> {props.totalPrice.toFixed(2)} </p>
<p>Continue to Checkout: </p>

<Button type='Danger' clicked={props.purchaseCancelHandler}> Cancel</Button>
<Button type = 'Success' clicked = {props.purchaseContinueHandler}> Continue</Button>

</Aux>

)

}

export default orderSummary;