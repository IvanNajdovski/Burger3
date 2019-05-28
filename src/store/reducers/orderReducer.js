import * as actionTypes from '../actions/actionTypes';


const initialState = {
    orders: [],
    loading: false,
    error: "",
    redirect: true
};

export default ( state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return{
                ...state,
                orders: action.payload.orders,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_FAILED:
            return{
                ...state,
                loading: false,
                error: "Cannot Get Orders"
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder ={
                ...action.payload.order,
                id: action.payload.id
            }
            return{
                ...state,
                orders: state.orders.concat(newOrder),
                loading: false,
                redirect: true
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return{
                ...state,
                error: true,
                loading: false,

            }
        case actionTypes.PURCHASE_INIT:
            return{
                ...state,
                redirect: false
            }
        default:
            return state;
    }

}