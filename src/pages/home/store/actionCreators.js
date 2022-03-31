import * as actionTypes from "./actionTypes";
import axios from "axios";
import {fromJS} from "immutable";

const GET_INIT = (data) => ({
    type: actionTypes.getInit,
    authorList: fromJS(data.authorList),
    articleList: fromJS(data.articleList),
    authorListPageNum: Math.ceil(data.authorList.length / 5)
});

const GET_ARTICLE = (data, nextPage) => ({
    type: actionTypes.getArticle,
    moreArticle: fromJS(data),
    articleListPage: nextPage
});

export const HANDLE_MORE_AUTHOR_CLICK = (authorListPage) => ({
    type: actionTypes.handleMoreAuthorClick,
    authorListPage
});
export const handleShow = (showBackTop) => ({
    type: actionTypes.handleShow,
    showBackTop
});
export const HANDLE_MORE_ARTICLE_CLICK = (articleListPage) => {
    return (dispatch) => {
        axios.get('/api/articleList.json?page' + articleListPage).then(
            (res) => {
                dispatch(GET_ARTICLE(res.data.data, articleListPage + 1));
            }
        )
    }
};

export const INIT = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(
            (res) => {
                dispatch(GET_INIT(res.data.data));
            }
        )
    }
};