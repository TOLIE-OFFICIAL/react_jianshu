// 设置index的目的主要是设置一个header/store出口文件
//不再多次引入相同文件夹下的文件，优化代码

import reducer from "./reducer";
import * as actionTypes from "./actionTypes";
import * as actionCreators from "./actionCreators";


export {reducer, actionCreators, actionTypes}