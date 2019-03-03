import {SIGNUP_SUCCESSFUL} from "../actions/actionTypes/signupActionTypes";

const initialState = {
    signedUpUser: ''
};

export default function(state=initialState, action){
    switch(action.type){
        case SIGNUP_SUCCESSFUL:
            return{
                ...state,
                signedUpUser: action.payload
            };
        default:
            return state
    }
}

