import React, { Fragment } from "react";
import following from "../images/following.svg";
import followers from "../images/followers.svg";

export const Persons = (props) => {
    return (
        <Fragment>
            {props.personInfo ? (
                <div className="align-items-center col-lg-4 d-flex flex-column d-lg-block">
                    <img
                        className="avatar rounded-circle"
                        src={props.personInfo.avatar_url}
                        alt="Person's avatar"
                    />
                    <h3 className="mt-4">{props.personInfo.name}</h3>
                    <a
                        className="text-decoration-none"
                        href={props.personInfo.html_url} target="_blank"
                    >
                        {props.personInfo.login}
                    </a>
                    <div className="d-flex mt-3">
                        <div className="me-5">
                            <img
                                className="pe-1"
                                src={followers}
                                alt="Person's followers"
                            />
                            {props.personInfo.followers} followers
                        </div>
                        <div>
                            <img src={following} alt="Person's following" />
                            {props.personInfo.following} following
                        </div>
                    </div>
                </div>
            ) : (
                <h1>No</h1>
            )}
        </Fragment>
    );
};
