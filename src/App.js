import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Login from '../src/components/Login';
import SignUp from '../src/components/Signup';

import {ToastContainer} from "react-toastify";

class App extends  Component {
    render() {
        return(
            <div className="app">
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/login" component={Login} exact Strict/>
                            <Route path="/" component={SignUp} exact Strict/>
                        </Switch>
                        <ToastContainer/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
