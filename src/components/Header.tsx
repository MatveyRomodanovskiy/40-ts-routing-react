import React, {useContext, useEffect} from 'react';
import Navigation from "./Navigation";
import {SWContex} from "../utils/context";
import {characters, defaultHero} from "../utils/constants";
import {useParams} from "react-router-dom";

const Header = () => {
    const {hero} = useContext(SWContex);
    const {changeHero} = useContext(SWContex);
    const {heroId = defaultHero} = useParams();
    useEffect(() => {
        changeHero(heroId)
      },[]);

    const heroName = (characters[hero]) ?  characters[hero].name : "Unfortunately you make a mistake in the name"
    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-4">{heroName}</h1>
        </header>
    );
};

export default Header;
