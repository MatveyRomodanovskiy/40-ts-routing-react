import React from "react";
import {defaultHero} from "./constants";
import hero from "../components/Hero";

export const SWContex = React.createContext({
    hero: defaultHero,
    changeHero: (hero: string) =>{}
});