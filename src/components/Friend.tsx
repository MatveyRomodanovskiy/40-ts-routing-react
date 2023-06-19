import React, {useContext} from 'react';
import style from '../css_modules/bottomRound.module.css'
import {characters, navItems} from "../utils/constants";
import {Link} from "react-router-dom";

interface Props {
    friend: string,
    pos: number
}

const Friend = ({friend, pos}: Props) => {
    let styles = "col-4 p-1";
    if (pos === 7) {
        styles = `${styles} ${style.bottomLeft}`;
    }
    if (pos === 9) {
        styles = `${styles} ${style.bottomRight}`;
    }
    return (
        <Link className={styles} to={`/${navItems[0].route}/${friend}`}>
            <img className={'w-100'} src={characters[friend].img} alt="Friend"/>
        </Link>
    );
};

export default Friend;