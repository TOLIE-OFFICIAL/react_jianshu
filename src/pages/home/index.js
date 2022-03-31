//使用PureComponent替换Component，
// 其内置了一个shouldComponentUpdate方法，减少不必要的渲染
//因为本项目使用了immutable.js，所以才可以直接将component替换为PureComponent
//否则就有可能遇到一些问题
import React, {Fragment, PureComponent} from "react";
import {connect} from "react-redux";
import {HomeWrapper, HomeLeft, HomeRight, Banner, BackTOTop} from './style';
import * as animation from '../../animation'
import * as components from './components'
import * as images from '../../statics'
import {actionCreators} from "./store";
import Header from "../../common/header";

class Home extends PureComponent {
    componentDidMount() {
        this.props.init();
        this.bindEvents();
    }

    //注意组件移除的时候，一定要对事件进行解绑
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeShow);
    }

    BackTop() {
        //添加缓动动画
        animation.moveUp(window, 0)
        // window.scrollTo(0, 0);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeShow)
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <HomeWrapper className='clearfix'>
                    <HomeLeft>
                        <Banner>
                            <a href="#">
                                <img src={images.banner} alt="banner"/>
                            </a>
                        </Banner>
                        <components.MainList/>
                    </HomeLeft>
                    <HomeRight>
                        <components.InfoBorder/>
                        <components.Writers/>
                    </HomeRight>

                    {this.props.showBackTop ? <BackTOTop className='icon-top iconfont' onClick={this.BackTop}/> : null}
                </HomeWrapper>
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => ({
    showBackTop: state.getIn(['home', 'showBackTop']),
});

const mapDispatchToProps = (dispatch) => {
    return {
        init() {
            dispatch(actionCreators.INIT());
        },
        changeShow() {
            // console.log(document.documentElement.scrollTop);
            if (document.documentElement.scrollTop > 400) {
                dispatch(actionCreators.handleShow(true));
            } else {
                dispatch(actionCreators.handleShow(false));
            }
        },

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);