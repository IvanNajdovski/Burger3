import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/updateObject";

const initialState = {
    ingredients: null,
    price: 4,
    purchasable: true,
    purchasing: false,
    loading: false,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.type]: state.ingredients[action.payload.type] + 1
                },
                price: state.price + action.payload.typePrice
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.type]: state.ingredients[action.payload.type] - 1
                },
                price: state.price - action.payload.typePrice
            };
        case actionTypes.PURCHASE_FALSE:
            return updateObject(state, {purchasing: false});
        case actionTypes.PURCHASE_TRUE:
            return updateObject(state, {purchasing: true});
        case actionTypes.IS_PURCHASABLE:
            let arrayIngredients = [];
            for (let ingredient in state.ingredients) {
                arrayIngredients.push(state.ingredients[ingredient])
            }
            const sum = arrayIngredients.reduce((start, val) => {
                return start + val;
            }, 0);
            return updateObject(state, {purchasable: sum > 0});

        case actionTypes.PURCHASING_FINISH:
            return {
                ...state,
                purchasing: false
            };
        case actionTypes.GET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload.ingredients,
                price: 4,
                error: false
            };
        case actionTypes.FAILED_TO_GET_INGREDIENTS:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}