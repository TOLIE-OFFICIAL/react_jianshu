// import {combineReducers} from "redux";
// 取代从前，代之以从redux-immutable引用combineReducers方法
import {combineReducers} from "redux-immutable";
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store';
import {reducer as signReducer} from '../pages/signIn/store';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    sign: signReducer
})
