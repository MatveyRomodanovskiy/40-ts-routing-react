import React, {useContext, useEffect, useState} from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {characters, defaultHero, navItems} from "../utils/constants";
import {Route, Routes, useParams, redirect} from "react-router-dom";
import NotFound from "./NotFound";

import {SWContex} from "../utils/context";
const Main = () => {

   return(
       <Routes>
           {[`/`, `/${navItems[0].route}`,`/${navItems[0].route}/:heroId`].map(path =>  <Route key={path} path={path} element={<Home/>}/>)}
           {[`/${navItems[1].route}`, `/${navItems[1].route}/:heroId`].map(path => <Route key={path} path={path} element={<AboutMe/>}/>)}
           {[`/${navItems[2].route}`, `/${navItems[2].route}/:heroId`].map(path => <Route key={path} path={path} element={<StarWars/>}/>)}
           {[`/${navItems[3].route}`, `/${navItems[3].route}/:heroId`].map(path => <Route key={path} path={path} element={<Contact/>}/>)}
           <Route path={`*`} element={<NotFound/>}/>
       </Routes>
   )
}

export default Main;