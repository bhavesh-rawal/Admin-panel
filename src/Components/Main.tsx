
import React, { createContext, useEffect, useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Log from './Login';
import Home from './Home';
import { Provider } from 'react-redux';
import Store from '../Assest/Redux/Store';
import '../Assest/Css/Static.Style.css'

const Main = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem('login_data')) {
    //         navigate("/home");
    //     }
    // }, []);


    return (<>
        <Provider store={Store}>
            <Routes>

                {/* <Route path='/' element={ <Log /> } />
                    <Route path='/home/*' element={ <Home /> } /> */}
                {/* <Route
                    path="/"
                    element={localStorage.getItem('login_data') ? <Home /> : <Log />}
                /> */}

                <Route path='/*' element={<Home />} />
            </Routes>
        </Provider>
    </>);
};
export default Main;;