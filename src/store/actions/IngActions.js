import * as actionTypes from './actionTypes';
import axios from "../../axiosOrders";

export const addIngredient = (type, typePrice) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: {
            type,
            typePrice
        }
    }
};
export const removeIngredient = (type, typePrice) => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        payload: {
            type,
            typePrice
        }
    }
};
export const purchaseSuccess = () => {
    return{
        type: actionTypes.PURCHASE_TRUE
    }
};
export const purchaseFalse = () => {
    return{
        type: actionTypes.PURCHASE_FALSE
    }
};

export const isPurchasable = () => {
    return{
        type: actionTypes.IS_PURCHASABLE
    }
};
export const purchasingDone = () => {
    return{
        type: actionTypes.PURCHASING_FINISH
    }
};
const getIngredients = (ingredients) => {

    return{
        type: actionTypes.GET_INGREDIENTS,
        payload:{
            ingredients
        }
    }
};
const failedToGetIngredients =  () => {

    return {
        type: actionTypes.FAILED_TO_GET_INGREDIENTS,
        payload: {
            error : true
        }
    }
};
export const fetchIngredients = () => {
    return dispatch => {
        axios.get("https://myburger-ea099.firebaseio.com/ingredients.json")
            .then(res => {
                dispatch(getIngredients(res.data))
            })
            .catch(err => {

                dispatch(failedToGetIngredients(err))
            })
    }
};