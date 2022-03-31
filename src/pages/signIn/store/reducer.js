import * as actionTypes from "./actionTypes";
import {fromJS} from "immutable";
//d导入formJS方法，将state转化为immutable对象
const defaultState = fromJS({
    flag: false,
});

//对SwitchCase进行精简,对方法进行封装
// const getInit = (state, action) => {
//     return state.merge({
//         authorList: action.authorList,
//         articleList: action.articleList,
//         authorListPageNum: action.authorListPageNum
//     })
// };

//对immutable对象调用set方法，返回一个新的修改过的immutable对象
const reducer = (state = defaultState, action) => {
    switch (action.type) {
       
        default:
            return state;
    }
};

export default reducer;
