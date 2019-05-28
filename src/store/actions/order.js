import * as actionTypes from './actionTypes';
import { purchaseSuccess } from './index';
import axios from '../../axiosOrders';
import {purchaseFalse} from "./IngActions";

const fetchOrdersSuccess = (orders) => {
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        payload: {
            orders
        }
    }
};
const fetchOrderFail = () => {
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS
    }
};

export const fetchOrdersInit = () =>{
    return dispatch => {
        axios.get("/orders.json")
            .then(res => {
                const fetchedOrders = [];
                for(let order in res.data){
                    fetchedOrders.push({
                        ...res.data[order],
                        id: order
                    })                }
                 dispatch(fetchOrdersSuccess(fetchedOrders))


            })
            .catch(err => {
                dispatch(fetchOrderFail())
            })
    }
};
const purchaseBurgerSuccess = (id,order) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        payload: {
            order,
            id
        }
    }
};
const purchaseBurgerFail = () => {
    return{
        type: actionTypes.PURCHASE_BURGER_FAIL
    }
};

export const purchaseBurgerInit =(order) =>{
    return dispatch => {
        axios.post("/orders.json", order)
            .then(res => {
                console.log(res)
                dispatch(purchaseBurgerSuccess(res.data.name,order));
                dispatch(purchaseFalse());
                dispatch(fetchOrdersInit())
            })
            .catch(err => {
                dispatch(purchaseBurgerFail())
            })
    }
};
export const purchaseInit = () => {
    return{
        type: actionTypes.PURCHASE_INIT
    }
}