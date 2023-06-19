import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {useParams} from "react-router-dom";
import {characters, defaultHero} from "../utils/constants";
import {SWContex} from "../utils/context";

const Home = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContex);

    useEffect(() => {
        if(characters[heroId]){changeHero(heroId);}
        else {changeHero(defaultHero);}
    }, [heroId])

    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;