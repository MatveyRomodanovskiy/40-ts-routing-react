import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {navItems} from "./utils/constants";


const App = () => {

    return (
        <div className="container-fluid">

                <Header/>
                <Main/>
                <Footer/>

        </div>
    );
}

export default App;

