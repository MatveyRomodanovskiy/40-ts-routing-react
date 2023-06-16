import React from 'react';
import style from '../css_modules/bottomRound.module.css'

interface Props {
    picture: string,
    pos: number
}
const Friend = ({picture, pos}: Props) => {
    let styles = "col-4 p-1";
    if (pos === 7) {
        styles = `${styles} ${style.bottomLeft}`;
    }
    if (pos === 9) {
        styles = `${styles} ${style.bottomRight}`;
    }
    return (
        <img className={styles} src={picture} alt="Friend"/>
    );
};

export default Friend;