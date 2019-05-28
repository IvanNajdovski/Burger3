import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addIngredient, purchaseInit, removeIngredient, purchaseSuccess, purchaseFalse, isPurchasable, fetchIngredients } from '../../store/actions/index';

import Burger from '../../components/Burger/Burger';
import BulidControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axiosOrders';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 1.2,
    meat: 1.4
};

class BurgerBuilder extends Component {

    componentDidMount() {
        this.props.fetchIngredients()


    }

    purchasingHandler = () => {
        this.props.purchaseInit()
        this.props.purchaseTrue()
    };
    onPurchasingCancel = () => {
        this.props.purchaseFalse()
        this.props.history.push("/")
    };
    onPurchaseContinue = () => {

        this.props.history.push("/checkout")
    };

    addIngredientHandler = (type) => {
        this.props.addIngredient(type, INGREDIENT_PRICES[type]);
        this.props.isPurchasable()
    };
    removeIngredientHandler = (type) => {
        this.props.removeIngredient(type, INGREDIENT_PRICES[type]);
        this.props.isPurchasable()

    };

    render() {
        let orderSummary = null;
        let burger = this.props.error ? <p>Cant Show Ingredients</p>: <Spinner/>;
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        if(this.props.ingredients !== null){
            console.log(this.props.ingredients)
            orderSummary = <OrderSummary
                price={this.props.price}
                purchaseContinue={this.onPurchaseContinue}
                purchaseCancel={this.onPurchasingCancel}
                ingredients={this.props.ingredients}
            />
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.props.ingredients}/>
                    <BulidControls
                        ordered={this.purchasingHandler}
                        isPurchasable={this.props.purchasable}
                        price={this.props.price}
                        removeIng={this.removeIngredientHandler}
                        addIng={this.addIngredientHandler}
                        disabled={disabledInfo}
                    />
                </React.Fragment>
            )
        }
        if (this.props.loading) {
            orderSummary = <Spinner/>
        }
        return (
            <React.Fragment>
                <Modal
                    hide={this.onPurchasingCancel}
                    show={this.props.purchasing}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return{
        ingredients: state.ing.ingredients,
        price: state.ing.price,
        loading: state.ing.loading,
        purchasable: state.ing.purchasable,
        purchasing: state.ing.purchasing,
        error: state.ing.error
    }
};
const mapDispatchToProps = dispatch => {
    return{
        addIngredient: (type, typePrice) => dispatch(addIngredient(type, typePrice)),
        removeIngredient: (type, typePrice) => dispatch(removeIngredient(type, typePrice)),
        purchaseTrue: () => dispatch(purchaseSuccess()),
        purchaseFalse: () => dispatch(purchaseFalse()),
        isPurchasable: () => dispatch(isPurchasable()),
        fetchIngredients: () => dispatch(fetchIngredients()),
        purchaseInit: () => dispatch(purchaseInit())


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));