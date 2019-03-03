import {combineReducers} from "redux";
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import addProductReducer from './addProductReducer';

export default combineReducers({
loginReducer, signupReducer, addProductReducer
});
