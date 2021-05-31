import React, { Fragment, useState } from "react";
import search from "../images/inputSearch.svg";

export const Form = (props) => {
    const [value, setValue] = useState("");

    async function submitHandler(event) {
        event.preventDefault();
        if (value.trim()) {
            const url = "https://api.github.com/users/" + value;
            const response = await fetch(url);
            const responseStatus = response;
            if (responseStatus.status != 200) {
                props.onShow("error");
            } else {
                const result = await response.json();
                props.onShow(result);
            }
        }
    }

    return (
        <Fragment>
            <form className="pe-4 form-search" onSubmit={submitHandler}>
                <div className="form-group form-search-group d-flex">
                    <img src={search} alt="search" />
                    <input
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        type="text"
                        className="search-input ps-2"
                        placeholder="Enter GitHub username"
                    />
                </div>
            </form>
        </Fragment>
    );
};
