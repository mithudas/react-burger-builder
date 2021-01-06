import React, {Component} from 'react';

import Aux from '../../hoc/Auxilary';
import Burger  from '../../components/Burger/Burger';
import BurgerControl from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';


const INGREDIENT_PRICES = {
salad: 0.5,
cheese: 0.4,
meat: 1.3,
bacon: 0.7
};
class BurgerBuilder extends Component{

  state ={

  ingredients :{
  salad:0,
  bacon:0,
  cheese:0,
  meat:0
  },

  totalPrice:4,
  purchasable: false,
  purchasing: false
  }

  updatePurchaseState (ingredients){
//          const ingredients = {
//            ...this.state.ingredients
//          };
          const sum = Object.keys(ingredients)
          .map(igkey=>{
          return ingredients[igkey];
          })
          .reduce((sum,el)=>{
          return sum+el;
          }, 0);
          this.setState({purchasable: sum>0});
  }

  purchaseHandler= ()=>{
  this.setState({purchasing: true});
  }


  purchaseCancelHandler =()=>{
  this.setState({purchasing: false});
  }

  purchaseContinueHandler = () =>{
  alert('You continue');
  }

  addIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
     const updatedIngredients = {
            ...this.state.ingredients
    }

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice+ priceAddition;
    this.setState({totalPrice:newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) =>{
  const oldCount = this.state.ingredients[type];
  const updatedCount = oldCount >0? oldCount-1:0;
  const updatedIngredients = {
  ...this.state.ingredients
  }
  updatedIngredients[type] = updatedCount;
  const priceDeduction = INGREDIENT_PRICES[type];
  const newPrice = this.state.totalPrice-priceDeduction >=0 ? this.state.totalPrice-priceDeduction :0;;
  this.setState({totalPrice:newPrice, ingredients: updatedIngredients});
      this.updatePurchaseState(updatedIngredients);

  }
  render (){
     return (
     <Aux>
            <Modal show={this.state.purchasing}  modalClosed = {this.purchaseCancelHandler}>
                 <OrderSummary  totalPrice = {this.state.totalPrice} ingredients = {this.state.ingredients} purchaseCancelHandler={this.purchaseCancelHandler} purchaseContinueHandler = {this.purchaseContinueHandler}> </OrderSummary>
            </Modal>
            <Burger  ingredients={this.state.ingredients}/>
            <BurgerControl ingredientAdded={this.addIngredientHandler}
            ingredientRemoved = {this.removeIngredientHandler}
            totalPrice = {this.state.totalPrice}
            purchasable = {this.state.purchasable}
            purchaseHandler = {this.purchaseHandler}

            />
     </Aux>

     );

  }

}

export default BurgerBuilder;