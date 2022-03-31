import React, {PureComponent} from "react";
import {Sign_tab} from "../style";
import {Link} from "react-router-dom";

class Sign_in_tab extends PureComponent {
    render() {
        return (
            <Sign_tab>
                <Link to="/sign_in" className='selected'>登录</Link>
                <i>·</i>
                <Link to="/sign_up">注册</Link>
            </Sign_tab>
        )
    }
}

export default Sign_in_tab;
