import React, {useEffect, useState} from 'react';
import styles from "../css_modules/aboutMe.module.css";
import {base_url, period_month} from "../utils/constants";
import {DataForSave, HeroInfo} from "../utils/types";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();

    useEffect(() => {
        console.log('AboutMe mounted');
        const hero = JSON.parse(localStorage.getItem('hero')!);
        if (hero && ((Date.now() - hero.time) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    let info: HeroInfo | DataForSave = {
                        "name": data.name,
                        "height": data.height,
                        "mass": data.mass,
                        "hair_color": data.hair_color,
                        "skin_color": data.skin_color,
                        "eye_color": data.eye_color,
                        "birth_year": data.birth_year,
                        "gender": data.gender
                    };
                    setHero(info);
                    info = {
                        payload: info,
                        time: Date.now()
                    }
                    localStorage.setItem('hero', JSON.stringify(info));
                });
        }
        return () => console.log('AboutMe unmounted');
    }, [])

    return (
        <div>
            {(hero) &&
                <div className={`farGalaxy ${styles.hero_box}`}>
                    <p><span className={styles.hero_titles}>name:</span> {hero.name}</p>
                    <p><span className={styles.hero_titles}>height:</span> {hero.height}</p>
                    <p><span className={styles.hero_titles}>birth year:</span> {hero.birth_year}</p>
                    <p><span className={styles.hero_titles}>gender:</span> {hero.gender}</p>
                    <p><span className={styles.hero_titles}>mass:</span> {hero.mass}</p>
                    <p><span className={styles.hero_titles}>hair color:</span> {hero.hair_color}</p>
                    <p><span className={styles.hero_titles}>skin color:</span> {hero.skin_color}</p>
                    <p><span className={styles.hero_titles}>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </div>
    )
}

export default AboutMe