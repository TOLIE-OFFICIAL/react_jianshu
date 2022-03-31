import React, {Component} from "react";
import {Agreement, MoreSign, OtherAccount, Sign_up_form} from "../style";

// import {connect} from "react-redux";

class sign_up_form extends Component {
    render() {
        return (
            <Sign_up_form>
                <ul>
                    <li>
                        <i className='icon-user iconfont'/>
                        <input type="text" placeholder="您的昵称" className='over' name='name'
                               ref={(input) => {
                                   this.name = input
                               }}/>
                    </li>
                    <li>
                        <i className='icon-phone iconfont'/>
                        <input type="tel" placeholder="手机号" name='tel'
                               ref={(input) => {
                                   this.tel = input
                               }}/>
                    </li>
                    <li>
                        <i className='icon-pwd iconfont'/>
                        <input type="password" placeholder="设置密码" name='pwd'
                               ref={(input) => {
                                   this.pwd = input
                               }}/>
                    </li>

                    <li className='sign_btn'>
                        <button type='submit'>注册</button>
                    </li>
                    <Agreement>
                        {/*<span>*/}
                        {/*     <input type="checkbox" id='remember' name='remember'/>*/}
                        {/*     <label htmlFor="remember">记住我</label>*/}
                        {/*</span>*/}
                        点击 “注册” 即表示您同意并愿意遵守简书<br/>
                        <a href="#">用户协议</a> 和 <a href="#">隐私政策</a> 。

                    </Agreement>
                    <MoreSign>社交帐号登录</MoreSign>
                    <OtherAccount>
                        <a className='iconfont icon-wb'/>
                        <a className='iconfont icon-wx'/>
                        <a className='iconfont icon-qq'/>
                    </OtherAccount>
                </ul>
            </Sign_up_form>
        );
    }
};

export default sign_up_form;