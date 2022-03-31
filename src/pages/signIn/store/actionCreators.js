import * as actionTypes from "./actionTypes";
// import axios from "axios";
// import {fromJS} from "immutable";

// export const INIT = () => {
//     return (dispatch) => {
//         axios.get('/api/home.json').then(
//             (res) => {
//                 dispatch(GET_INIT(res.data.data));
//             }
//         )
//     }
// };
export const handleSignInTab = (signTab) => ({
    type: actionTypes.handleSignInTab,
    signTab
});
export const handleSignUpTab = (signTab) => ({
    type: actionTypes.handleSignUpTab,
    signTab
});