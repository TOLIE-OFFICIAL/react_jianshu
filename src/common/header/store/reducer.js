import * as actionTypes from "./actionTypes";
import {fromJS} from "immutable";
//d导入formJS方法，将state转化为immutable对象
const defaultState = fromJS({
    focus: false,
    mouseIn: false,
    searchList: [],
    page: 1,
    pageNum: 1,
    angle:0
});
//对immutable对象调用set方法，返回一个新的修改过的immutable对象
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.searchFocus:
            return state.set('focus', true);
        case actionTypes.searchBlur:
            return state.set('focus', false);

        case actionTypes.mouseIn:
            return state.set('mouseIn', true);
        case actionTypes.mouseOut:
            return state.set('mouseIn', false);

        case actionTypes.getList:
            //使用merge()方法，同时改变多个值，不再重复使用set方法
            // return state.set('searchList', action.searchList).set('pageNum', );
            return state.merge({
                searchList: action.searchList,
                pageNum: action.pageNum
            });
        case actionTypes.pageNumChange:
            return state.set('page', action.page);
        default:
            return state;
    }
};
export default reducer;
