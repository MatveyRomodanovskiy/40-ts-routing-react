import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {navItems} from "../utils/constants";
import {Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";

const Main = () => {

   return(
       <Routes>
           {[`/`, `/${navItems[0].route}`].map(path =>  <Route key={path} path={path} element={<Home/>}/>)}
           <Route path={`/${navItems[1].route}`} element={<AboutMe/>}/>
           <Route path={`/${navItems[2].route}`} element={<StarWars/>}/>
           <Route path={`/${navItems[3].route}`} element={<Contact/>}/>
           <Route path={`*`} element={<NotFound/>}/>
       </Routes>
   )

}

export default Main;