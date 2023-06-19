import React, {useContext, useEffect} from 'react';
import {characters, defaultHero, starWarsInfo} from '../utils/constants';
import style from '../css_modules/farGalaxy.module.css';
import {useParams} from "react-router-dom";
import {SWContex} from "../utils/context";

const StarWars = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContex);

    useEffect(() => {
        if(characters[heroId]){changeHero(heroId);}
        else {changeHero(defaultHero);}
    }, [heroId])
    return (
        <div className={style.farGalaxy}>
            <p>{starWarsInfo}</p>
        </div>
    );
};

export default StarWars;