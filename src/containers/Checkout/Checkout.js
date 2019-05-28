import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {


    onCheckoutContinue = () => {
        this.props.history.replace("/checkout/contact-data")
    };
    onCheckoutCancel = () => {
        this.props.history.goBack()
    };

    render() {
        let redirect = this.props.redirect ? <Redirect to={"/"}/> : null;
        let summary = <Redirect to={"/"}/>;
        if (this.props.ingredients) {
            summary = (<div>

                <CheckoutSummary
                    checkoutCancel={this.onCheckoutCancel}
                    checkoutContinue={this.onCheckoutContinue}
                    ingredients={this.props.ingredients}/>
                <Route path={this.props.match.url + "/contact-data"} component={ContactData}/>)}/>
            </div>)
        }
        return (
            <React.Fragment>
                {redirect}
                {summary}
            </React.Fragment>


        )
    }
};
const mapStateToProps = state => {
    return {
        ingredients: state.ing.ingredients,
        price: state.ing.price,
        redirect: state.orders.redirect
    }
};

export default connect(mapStateToProps)(Checkout);