import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Globalstyle} from "./style";
import {IconStyle} from "./iconStyle";
import {Provider} from "react-redux";
import store from "./store";
import App from './App';
import {BrowserRouter as Router, } from "react-router-dom";

ReactDOM.render(
    <Fragment>
        <Globalstyle/>
        <IconStyle/>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </Fragment>,
    document.getElementById('root')
)
;
