import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/detail/:id' element={<Detail/>} exact/>
            <Route path='/sign_in' element={<SignIn/>} exact/>
            <Route path='/sign_up' element={<SignUp/>} exact/>
        </Routes>
    );
}

export default App;
