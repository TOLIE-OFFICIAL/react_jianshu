import {RecommendedAuthors, AuthorList, AuthorName,} from '../style'
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";

class Writers extends PureComponent {
    render() {
        const {authorListPage, authorListPageNum, authorList, handleMoreAuthorClick} = this.props;
        const pageList = [];
        let jsList = [];
        //防止数据未更新，导致页面无法渲染
        if (authorList) {
            jsList = authorList.toJS();
        }

        if (jsList.length) {
            for (let i = (authorListPage - 1) * 5; i < authorListPage * 5; i++) {
                pageList.push(
                    <li key={jsList[i].id}>
                        <a href="#"><img src={jsList[i].url} alt="头像"/></a>
                        <div>
                            <AuthorName><a href="#">{jsList[i].name}</a><i>+关注</i></AuthorName>
                            {jsList[i].describe}
                        </div>
                    </li>)
            }
        }

        return (
            <RecommendedAuthors>
                <div>推荐作者
                    <i className='icon-reset iconfont'
                       onClick={() => handleMoreAuthorClick(authorListPage, authorListPageNum)}
                    >换一批</i></div>
                <AuthorList>
                    {pageList}
                    <li className='getMore icon-right iconfont'>查看全部</li>
                </AuthorList>
            </RecommendedAuthors>
        )
    }

}

const mapStateToProps = (state) => ({
    authorList: state.getIn(['home', 'authorList']),
    authorListPage: state.getIn(['home', 'authorListPage']),
    authorListPageNum: state.getIn(['home', 'authorListPageNum']),
});
const mapDispatchToProps = (dispatch) => {
    return {
        handleMoreAuthorClick(authorListPage, authorListPageNum) {
            if (authorListPage === authorListPageNum) {
                dispatch(actionCreators.HANDLE_MORE_AUTHOR_CLICK(1));
            } else {
                dispatch(actionCreators.HANDLE_MORE_AUTHOR_CLICK(authorListPage + 1));
            }
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Writers);