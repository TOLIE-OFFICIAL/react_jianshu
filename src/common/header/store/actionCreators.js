import * as actionTypes from "./actionTypes";
import {fromJS} from "immutable";
import axios from 'axios'

const GET_LIST = (searchList) => ({
    type: actionTypes.getList,
    searchList: fromJS(searchList),
    pageNum: Math.ceil(searchList.length / 10)
});
export const SEARCH_FOCUS = () => ({
    type: actionTypes.searchFocus
});
export const SEARCH_BLUR = () => ({
    type: actionTypes.searchBlur
});
export const MOUSE_ENTER = () => ({
    type: actionTypes.mouseIn
});
export const MOUSE_LEAVE = () => ({
    type: actionTypes.mouseOut
});
export const PAGE_NUM_CHANGE = (page) => ({
    type: actionTypes.pageNumChange,
    page
});
export const INIT_SEARCHLIST = () => {
    // type: actionTypes.initSearchList
    return (dispatch) => {
        axios.get('/api/searchList.json').then(
            (res) => {
                //这里的data是个普通数组，而我们的state是个immutable对象
                //所以需要对其进行转化
                dispatch(GET_LIST(res.data));
            }
        )
        //     .catch(
        //
        // )
    }
};