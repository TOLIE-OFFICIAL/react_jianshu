import React, {PureComponent} from "react";
import {ContainItem, HomeContain} from "../style";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import {Link} from "react-router-dom";

class MainList extends PureComponent {
    render() {
        return (
            <HomeContain>
                {/*防止数据未更新，导致页面无法渲染*/}
                {this.props.articleList && this.props.articleList.map((item) => {
                    //使用Link替换a标签，实现一文档应用，不再次请求另一个文档
                    return (
                        <li key={item.get('id')}>
                            <h4><Link to={'/detail/' + item.get('id')}>{item.get('title')}</Link></h4>
                            <p>{item.get('desc')}</p>
                            <ContainItem>
                                <a href="#" className='diamond'> <i className='icon-diamond iconfont'/>64.7</a>
                                <a href="#" className='cover'>雨人的伞</a>
                                <a href="#" className='cover'> <i className='iconfont icon-comment'/> 68</a>
                                <a href="#"> <i className=' iconfont icon-heart'/>375</a>
                            </ContainItem>

                        </li>


                    )
                })}


                <li
                    className='getMoreArticle'
                    onClick={() => this.props.getMoreArticle(this.props.articleListPage)}
                >阅读更多
                </li>
            </HomeContain>
        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    articleListPage: state.getIn(['home', 'articleListPage']),
});
const mapDispatchProps = (dispatch) => {
    return {
        getMoreArticle(articleListPage) {
            const action = actionCreators.HANDLE_MORE_ARTICLE_CLICK(articleListPage);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchProps)(MainList);