import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from "../actions/actionCreators/loginAction";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            'email': '',
            'password': '',
            'loading': 'false'
        };
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(e.target);
        const data = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(data);
        this.setState({
            loading: true
        });
    };

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {
        return(
            <div className="login-container">
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                           placeholder="email"
                           id="email"
                           name="email"
                    onChange={this.onChange}
                    required/>
                    <input type="password"
                           placeholder="Password"
                           id="password"
                           name="psw"
                           onChange={this.onChange}
                    required/>
                    <button>Login</button>
                </form>
            </div>
        )
    }

}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired
};


export default connect(null, {loginUser})(Login)
