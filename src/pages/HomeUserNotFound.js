import React from "react";
import userNotFound from "../images/userNotFound.svg";

export const HomeUserNotFound = () => (
    <div className="align-items-center d-flex justify-content-center h-100">
        <div className="text-center m-auto">
            <img src={userNotFound} className="" alt="User not found" />
            <p className="mt-4 icons-text">User not found</p>
        </div>
    </div>
);
