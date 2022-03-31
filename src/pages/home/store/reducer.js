import * as actionTypes from "./actionTypes";
import {fromJS} from "immutable";
//d导入formJS方法，将state转化为immutable对象
const defaultState = fromJS({
    showBackTop: false,
    authorListPage: 1,
    authorListPageNum: 1,
    articleListPage: 1,
    authorList: [],
    articleList: []
});

//对SwitchCase进行精简,对方法进行封装
const getInit = (state, action) => {
    return state.merge({
        authorList: action.authorList,
        articleList: action.articleList,
        authorListPageNum: action.authorListPageNum
    })
};
const getArticle = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.moreArticle),
        articleListPage: action.articleListPage
    })
};

//对immutable对象调用set方法，返回一个新的修改过的immutable对象
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.getInit:
            return getInit(state, action);

        case actionTypes.getArticle:
            return getArticle(state, action);

        case actionTypes.handleMoreAuthorClick:
            return state.set('authorListPage', action.authorListPage);

        case actionTypes.handleShow:
            return state.set('showBackTop', action.showBackTop);

        default:
            return state;
    }
};

export default reducer;
