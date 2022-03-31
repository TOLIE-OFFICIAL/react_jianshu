import React, {Fragment} from "react";
import {
    HeaderBtn,
    HeaderContain,
    HeaderWrapper,
    HotTitle,
    Search,
    SearchContain,
    SearchUl,
    StyledUl
} from "./style";
import {Link} from "react-router-dom";

// 搜索框下方展开是否展示
const getListArea = (props) => {
    const {focus, page, pageNum, searchList, mouseIn, handleMouseLeave, handleMouseEnter, handlePageNum} = props;
    //调用toJS将immutable对象转化为普通对象
    const jsList = searchList.toJS();
    const pageList = [];
    //页面初始化的时候列表为空，不执行循环，提高性能
    if (jsList.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            pageList.push(
                <li key={i}><span>{jsList[i]}</span></li>
            );
        }
    }

    if (focus || mouseIn) {
        return (
            <SearchContain
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <HotTitle>热门搜索
                    <div
                        className='icon-reset iconfont'
                        onClick={() => handlePageNum(page, pageNum)}
                    >换一批</div>
                </HotTitle>
                <SearchUl className='clearfix'>
                    {pageList}
                </SearchUl>
            </SearchContain>
        )
    } else {
        return null;
    }
}

const HeaderUI = (props) => {
    const {searchBlur, searchFocus, focus, searchList, flag} = props;
    return (
        <Fragment>
            <HeaderWrapper>
                <HeaderContain>
                    {/*左侧logo*/}
                    <Link to='/' className='fl'/>

                    {/*nav导航栏*/}
                    <StyledUl>
                        <li className='iconfont icon-zhinanzhen index'><span className='navIcon'>首页</span></li>
                        <li className='cover iconfont icon-icon-app'><span className='navIcon'>下载APP</span></li>
                        <li className='cover iconfont icon-icon-member'><span className='navIcon'>会员</span></li>
                        <li className='cover iconfont icon-icon-it'><span className='navIcon'>IT技术</span></li>
                        <li>
                            <Search
                                placeholder='搜索'
                                className={focus ? 'focus' : ''}
                                onFocus={() => searchFocus(searchList)}
                                onBlur={searchBlur}
                            />
                            <i className={focus ? 'iconfont focus' : 'iconfont'}>&#xe612;</i>
                        </li>
                    </StyledUl>

                    {/*搜索框下方展开内容,注意这里props的传递*/}
                    {getListArea(props)}

                    {/*右侧btn*/}
                    <HeaderBtn className='write iconfont icon-icon-pencil'><span
                        className='navIcon'>写文章</span></HeaderBtn>
                    <Link to='/sign_up'><HeaderBtn className='register'>注册</HeaderBtn></Link>
                    {flag ? <HeaderBtn className='login'>登出</HeaderBtn> :
                        <Link to='/sign_in'><HeaderBtn className='login'>登录</HeaderBtn></Link>}
                    <HeaderBtn className='Aa icon-Aa iconfont'/>
                </HeaderContain>
            </HeaderWrapper>
        </Fragment>
    )
}

export default HeaderUI;