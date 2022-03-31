import React, {Component} from "react";
import {connect} from 'react-redux';
import HeaderUI from './HeaderUI'
//从store下的index引入需要的内容
import {actionCreators} from './store'

class Header extends Component {
    render() {
        return <HeaderUI
            focus={this.props.focus}
            flag={this.props.flag}
            page={this.props.page}
            pageNum={this.props.pageNum}
            mouseIn={this.props.mouseIn}
            searchList={this.props.searchList}
            handleMouseEnter={this.props.handleMouseEnter}
            handleMouseLeave={this.props.handleMouseLeave}
            handlePageNum={this.props.handlePageNum}
            searchFocus={this.props.searchFocus}
            searchBlur={this.props.searchBlur}
        />
    }
}

//通过immutable对象的get方法获取属性值
const mapStateToProps = (state) => ({
    // focus: state.header.get('focus'),
    // focus: state.get('header').get('focus'),
    searchList: state.getIn(['header', 'searchList']),
    focus: state.getIn(['header', 'focus']),
    page: state.getIn(['header', 'page']),
    pageNum: state.getIn(['header', 'pageNum']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    angle: state.getIn(['header', 'angle']),
    flag: state.getIn(['sign', 'flag'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        searchFocus(searchList) {
            //不重复发送ajax请求，提高性能
            // if (searchList.size === 0) {
            //     dispatch(actionCreators.ININ_SEARCHLIST());
            // }
            (searchList.size === 0) && dispatch(actionCreators.INIT_SEARCHLIST());
            dispatch(actionCreators.SEARCH_FOCUS());
        },
        searchBlur() {
            const action = actionCreators.SEARCH_BLUR();
            dispatch(action);
        },
        handleMouseEnter() {
            const action = actionCreators.MOUSE_ENTER();
            dispatch(action);
        },
        handleMouseLeave() {
            const action = actionCreators.MOUSE_LEAVE();
            dispatch(action);
        },
        handlePageNum(page, pageNum,) {
            if (page < pageNum) {
                dispatch(actionCreators.PAGE_NUM_CHANGE(page + 1));
            } else {
                dispatch(actionCreators.PAGE_NUM_CHANGE(1));
            }
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);