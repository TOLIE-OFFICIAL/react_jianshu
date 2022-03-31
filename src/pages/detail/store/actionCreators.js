import * as actionTypes from "./actionTypes";
import axios from "axios";
import {fromJS} from "immutable";

const GET_INIT = (title, content, hot, recommend) => ({
    type: actionTypes.getInit,
    title,
    content,
    hot:fromJS(hot),
    recommend:fromJS(recommend)
})

export const INIT = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then(
            (res) => {
                dispatch(GET_INIT(res.data.article.title, res.data.article.content, res.data.hot, res.data.recommend));

            }
        )
    }

}