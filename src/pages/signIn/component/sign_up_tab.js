import React, {PureComponent} from "react";
import {Sign_tab} from "../style";
import {Link} from "react-router-dom";

class Sign_up_tab extends PureComponent {
    render() {
        return (
            <Sign_tab>
                <Link to="/sign_in">登录</Link>
                <i>·</i>
                <Link to="/sign_up" className='selected'>注册</Link>
            </Sign_tab>
        )
    }
}

export default Sign_up_tab;