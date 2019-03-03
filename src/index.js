import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from "react-redux/es/components/Provider";
import store from '../src/store/storeConfig'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

