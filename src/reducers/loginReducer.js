import {LOGGED_IN_USER} from "../actions/actionTypes/loginActionTypes";

const initialState = {
    isAuthenticated : false
};

export default function(state = initialState, action){
    switch(action.type){
        case LOGGED_IN_USER:
            console.log(action.payload);
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload)
            };
        default:
            return state;
    }
};

const isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);


