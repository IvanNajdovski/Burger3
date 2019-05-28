import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    componentWillUpdate(){
        console.log("Updated order")
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingKey =>{
                return <li key={ingKey}>
                <span

                    style={{textTransform: "capitalize"}}
                >{ingKey}</span>: {this.props.ingredients[ingKey]}</li>
            });

        return(
            <React.Fragment>
                <h3>Your Order</h3>
                <p>Your Burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Price for this burger is: <strong>{this.props.price.toFixed(2)}</strong> $$</p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCancel} buttonType={"Danger"}>CANCEL</Button>
                <Button clicked={this.props.purchaseContinue} buttonType={"Success"}>CONTINUE</Button>
            </React.Fragment>
        )
    }
}

export default OrderSummary;