import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {defaultHero, navItems} from "./utils/constants";
import {Characters} from "./utils/types";
import {SWContex} from "./utils/context";


const App = () => {

    const[hero, setHero] = useState(defaultHero);
    return (
        <div className="container-fluid">
        <SWContex.Provider value={{
            hero,
            changeHero: setHero
        }}>
                <Header/>
                 <Main/>
                    </SWContex.Provider>
                <Footer/>

        </div>
    );
}

export default App;

