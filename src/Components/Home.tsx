import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Hearder from "./Hearder";
import "../Assest/Css/Home.css";
import "../Assest/Css/Responsive.Home.css";
import SideBar from "./SideBar";
import ProductView from "./ProductView";
import CategoryView from "./CategoryView";



const Home = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!localStorage.getItem('login_data')) {
    //         navigate('/');
    //     }
    // }, []);


    return (<>

        <Hearder />
        <div className="d-flex">
            <SideBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/product" element={<ProductView />} />
                <Route path="/category" element={<CategoryView />} />
            </Routes>
        </div>

    </>);
};
export default Home;;