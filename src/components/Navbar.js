import React from "react";
import { Form } from "../components/Form";
import logo from "../images/logo.svg";

export const Navbar = (props) => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            <a href="/">
                <img src={logo} className="ps-5" alt="logo" />
            </a>
        </div>
        <Form onShow={props.onShow} />
    </nav>
);
