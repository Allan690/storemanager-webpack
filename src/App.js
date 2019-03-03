import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Login from '../src/components/Login';
import {ToastContainer} from "react-toastify";

class App extends  Component {
    render() {
        return(
            <div className="app">
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" component={Login} exact Strict/>
                        </Switch>
                        <ToastContainer/>
                    </div>
                </BrowserRouter>
            </div>
        )

    }
}

export default App;
