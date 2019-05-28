import { combineReducers } from 'redux';
import ingReducer from './IngReducers';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    ing: ingReducer,
    orders: orderReducer
});

export default rootReducer;

