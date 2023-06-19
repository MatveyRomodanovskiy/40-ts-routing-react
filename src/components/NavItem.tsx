import React, {useContext, useEffect, useState} from 'react';
import {HeroInfo, Item} from "../utils/types";
import {Link, useParams} from "react-router-dom";
import {characters, defaultHero} from "../utils/constants";
import {SWContex} from "../utils/context";

interface Props {
    item: Item
}
const NavItem = ({item}: Props) => {
    const {hero} = useContext(SWContex);
    const path = (characters[hero]) ? `/${item.route}/${hero}` : '*';
    return (
        <li>
            <Link className="nav-item btn btn-danger mx-1" to={path}>{item.title}</Link>
        </li>
    );
};

export default NavItem;