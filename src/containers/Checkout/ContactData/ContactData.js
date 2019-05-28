import React, {Component} from 'react';
import axios from '../../../axiosOrders';
import { connect } from 'react-redux';
import {purchasingDone, purchaseBurgerInit, fetchIngredients} from "../../../store/actions";

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import './ContactData.modules.css';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Your Name"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Street"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "ZIP Code"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Country"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: "Your Email"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: "Fastest"},
                        {value: 'normal', displayValue: "Normal"},
                        {value: 'cheapest', displayValue: "Cheapest"},
                    ]
                },
                validation:{},
                value: "fastest",
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false

    };

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        return isValid
    }


    orderHandler = (e) => {
        e.preventDefault();
        const orderData = {};
        for (let item in this.state.orderForm) {
            orderData[item] = this.state.orderForm[item].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: orderData
        };
        this.props.purchaseBurgerInit(order)


    };
    onChangeHandler = (e, inputName) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedInputElement = {...updatedOrderForm[inputName]}
        updatedInputElement.value = e.target.value;
        updatedInputElement.valid = this.checkValidity(updatedInputElement.value, updatedInputElement.validation)
        updatedInputElement.touched = true;
        updatedOrderForm[inputName] = updatedInputElement;

        let formIsValid = true;
        for(let inputName in updatedOrderForm){
            formIsValid = updatedOrderForm[inputName].valid && formIsValid
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});

    };


    render() {
        const formElements = [];
        for (let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        const inputs = formElements.map(input => {
            return (
                <Input
                    shouldValidate={input.config.validation}
                    invalid={!input.config.valid}
                    name={input.id}
                    touched={input.config.touched}
                    changed={(e) => this.onChangeHandler(e, input.id)}
                    key={input.id}
                    elementType={input.config.elementType}
                    elementConfig={input.config.elementConfig}
                    value={input.config.value}
                />
            )
        });


        let form = (
            <form
                onSubmit={this.orderHandler}
                style={{width: "100%"}}>
                {inputs}
                <Button disabled={!this.state.formIsValid} buttonType={"Success"}>ORDER</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner/>
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        ingredients: state.ing.ingredients,
        price: state.ing.price,
        loading: state.orders.loading
    }
}

export default connect(mapStateToProps, { purchasingDone, purchaseBurgerInit, fetchIngredients })(ContactData);