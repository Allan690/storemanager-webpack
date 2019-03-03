import {ADD_PRODUCT, PRODUCT_ERRORS} from "../actionTypes/productActionTypes";
import {toast} from 'react-toastify'
import axios from 'axios';

export const addProduct = data => dispatch => {
    if(!localStorage.getItem('token')){
        toast.error('Please login with your admin credentials to proceed!');
        return;
    }
    const token = localStorage.getItem('token');
    axios.post('https://store-manager-api-app-v2.herokuapp.com/api/v2/products', data, {
        headers: {
            'AUTHORIZATION': `Bearer ` + token,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        dispatch({
            type: ADD_PRODUCT,
            payload: data
        });
        toast.success('Product added successfully!');
        window.location.assign('/allProducts')
    })
        .catch( error =>{
            dispatch({
                type: PRODUCT_ERRORS,
                payload: error
            });
            toast.error('Something went wrong! Open redux devtools for more information');
        })
};
