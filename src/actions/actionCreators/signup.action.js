import {SIGNUP_ERRORS, SIGNUP_SUCCESSFUL} from "../actionTypes/signupActionTypes";
import axios from 'axios';
import {toast} from 'react-toastify'

export const signUpErrors = errors => {
    return {
        type: SIGNUP_ERRORS,
        payload: errors
    }
};

export const signUpUser = data => dispatch =>{
      if (!localStorage.getItem('token')){
          toast.error('Please login with your admin credentials to proceed!');
      }
      const token = localStorage.getItem('token');
      axios.post('https://store-manager-api-app-v2.herokuapp.com/api/v2/auth/signup', data, {
          headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Authorization': `Bearer ` + token
      }
      }

      )
          .then(response => {
              dispatch({
                  type: SIGNUP_SUCCESSFUL,
                  payload: data.email
              });
              toast.success('User registered successfully!');
              window.location.assign('/login');
          })
          .catch(error =>{
              console.log(error);
              dispatch({
                  type: SIGNUP_ERRORS,
                  payload: error
              });
              toast.error('Something went awry. Please check your signup credentials');
          })
};
