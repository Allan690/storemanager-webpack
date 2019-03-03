import React, {Component } from 'react';
import PropTypes from 'prop-types';
import {toast} from "react-toastify";
import {signUpUser} from '../actions/actionCreators/signup.action';
import {connect} from 'react-redux';

class UserSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'password': '',
            'confirmPassword': '',
            'email': '',
            'loading': false
        }
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
           toast.error('Password and confirm password fields must match');
            return;
        }
        const data = {
            'password': this.state.password,
            'confirmPassword': this.state.confirmPassword,
            'email': this.state.email
        };
        this.props.signUpUser(data);
        this.setState({
            loading: true
        })
    };

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });

    };

    render() {
        return (
            <div className="registration-form">
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                           placeholder="email"
                           name="email"
                           id="email"
                           onChange={this.onChange}
                           required/>
                    <input type="password"
                           placeholder="password"
                           id="password"
                           name="password"
                           onChange={this.onChange}
                           required/>
                    <input type="password"
                           placeholder="confirm password"
                           onChange={this.onChange}
                           id="confirmPassword"
                           name="password-rpt" required/>
                           <button>Create User</button>
                </form>
            </div>
        );
    }

}

UserSignUp.propTypes = {
    signUpUser: PropTypes.func.isRequired
};


export default connect(null, {signUpUser})(UserSignUp)
