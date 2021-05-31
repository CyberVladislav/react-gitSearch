import React from "react";
import search from "../images/search.svg";

export const Home = () => (
    <div className="text-center">
        <img src={search} className="" alt="logo" />
        <p className="mt-4 icons-text">
            Start with searching
            <br />a GitHub user
        </p>
    </div>
);
