import React, {Component} from "react";
import {MoreSign, OtherAccount, RememberMe, Sign_in_form} from "../style";
import {connect} from "react-redux";

class sign_in_form extends Component {
    render() {
        return (
            <Sign_in_form>
                <ul>
                    <li>
                        <i className='icon-user iconfont'/>
                        <input type="text" placeholder="手机号或邮箱" className='over' name='name'
                               ref={(input) => {
                                   this.name = input
                               }}/>
                    </li>
                    <li>
                        <i className='icon-pwd iconfont'/>
                        <input type="password" placeholder="密码" name='pwd'
                               ref={(input) => {
                                   this.pwd = input
                               }}/>
                    </li>
                    <RememberMe>
                                    <span>
                                         <input type="checkbox" id='remember' name='remember'/>
                                         <label htmlFor="remember">记住我</label>
                                    </span>
                        <a href="#">登录遇到问题？</a>
                    </RememberMe>
                    <li className='sign_btn'>
                        {/*<button type='submit' onClick={this.props.sign(this.name, this.pwd)}>登录</button>*/}
                        <button type='submit'>登录</button>
                    </li>
                    <MoreSign>社交帐号登录</MoreSign>
                    <OtherAccount>
                        <a className='iconfont icon-wb'/>
                        <a className='iconfont icon-wx'/>
                        <a className='iconfont icon-qq'/>
                    </OtherAccount>
                </ul>
            </Sign_in_form>
        );
    }
};
const mapStateToProps = (state) => ({
    flag: state.getIn(['sign', 'flag'])
});
const mapDispatchToProps = (dispatch) => {
    return {
        // sign(name, pwd) {
        //     console.log(name, pwd);
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(sign_in_form);