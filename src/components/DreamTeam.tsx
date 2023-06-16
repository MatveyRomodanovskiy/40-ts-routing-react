import React from 'react';
import {friends} from "../utils/constants";
import Friend from "./Friend";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((friend, index) => <Friend key={index} pos={index + 1} picture={friend}/>)}
        </section>
    );
};

export default DreamTeam;