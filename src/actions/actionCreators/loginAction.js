import {LOGIN_ERRORS, LOGGED_IN_USER} from "../actionTypes/loginActionTypes";
import axios from 'axios';
import { toast } from 'react-toastify';

export const setLoggedInUser = data => {
    return {
        type: LOGGED_IN_USER,
        payload: data
    }
};

export const loginErrors = errors => {
    return {
        type: LOGIN_ERRORS,
        payload: errors
    }
};


export const loginUser = data => dispatch => {
    axios.post('https://store-manager-api-app-v2.herokuapp.com/api/v2/auth/login', data, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
        }
    })
        .then( response => {
            const token = response.data['token'];
            localStorage.setItem("token", token);
            toast.success('Welcome '+data.email, { autoClose: 10000 });
            dispatch({
                type: LOGGED_IN_USER,
                payload: data.email
            })
        })
        .catch(error =>{
            dispatch(loginErrors(error));
            toast.error('Sorry, something wrong happened!');
        });
};

export const setAuthHeader = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = token;

    }
    else{
        delete axios.defaults.headers.common['Authorization'] ;
    }
};
