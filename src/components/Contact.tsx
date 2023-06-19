import React, {useContext, useEffect, useState} from 'react';
import "../css_modules/contact.module.css";
import {base_url, characters, defaultHero, period_month} from "../utils/constants";
import {redirect, useParams} from "react-router-dom";
import {SWContex} from "../utils/context";

const Contact = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContex);
    const [planets, setPlanets] = useState(['wait...']);

    const fillPlanets = async (url: string) => {
        const response = await fetch(url);
        const json: Array<{name: string}> = await response.json();
        const planets = json.map(item => item.name);
        setPlanets(planets);
        const info = {
            payload: planets,
            time: Date.now()
        }
        localStorage.setItem('planets', JSON.stringify(info));
    }

    useEffect(() => {
        if(heroId && characters[heroId]) {
            changeHero(heroId);
            const planets = JSON.parse(localStorage.getItem('planets')!);
            if (planets && ((Date.now() - planets.time) < period_month)) {
                setPlanets(planets.payload);
            } else {
                fillPlanets(`${base_url}/v1/planets`);
            }
             }
        else {redirect('*')}
    }, [heroId])

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label>First Name
                    <input type="text" name="firstname" placeholder="Your name.."/>
                </label>
                <label>Planet
                    <select name="planet">{
                        planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                    }
                    </select>
                </label>
                <label>Subject
                    <textarea name="subject" placeholder="Write something.."/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Contact;