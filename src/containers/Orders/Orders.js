import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrdersInit } from "../../store/actions";
import axios from '../../axiosOrders';

import Order from '../../components/Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component{

    componentDidMount(){
        this.props.initOrders()
    };
    render(){
        const orders = this.props.orders.map(order => {
            return(
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={+order.price.toFixed(2)}
                />
            )
        });
        return(
            <div>
                {orders}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        orders: state.orders.orders,
        loading: state.orders.loading,
        error: state.orders.error
    }
};
const mapDispatchToProps = dispatch => {
    return {
        initOrders: () => dispatch(fetchOrdersInit())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));