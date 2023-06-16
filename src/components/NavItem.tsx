import React, {useContext} from 'react';
import {Item} from "../utils/types";
import {Link} from "react-router-dom";

interface Props {
    item: Item
}
const NavItem = ({item}: Props) => {
    return (
        <li>
            <Link className="nav-item btn btn-danger mx-1" to={`/${item.route}`}>{item.title}</Link>
        </li>
    );
};

export default NavItem;