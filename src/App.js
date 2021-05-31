import React, { Fragment } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { RepositoryList } from "./components/RepositoryList";

import { Home } from "./pages/Home";
import { HomeUserNotFound } from "./pages/HomeUserNotFound";
import { Persons } from "./components/Persons";
import { Loader } from "./components/Loader";

function App() {
    const [existUser, setExistUser] = React.useState(1);
    const [inputSmth, setinputSmth] = React.useState(false);
    const [person, setPerson] = React.useState();
    const [repository, setRepository] = React.useState();
    const [loading, setLoading] = React.useState(true);

    function showPersonInfo(info) {
        let personName = info.login;
        if (personName == undefined) {
            setExistUser(0);
            setinputSmth(false);
        } else {
            getRepositories(personName);
            setExistUser(1);
            setPerson(info);
            setinputSmth(true);
        }
    }

    async function getRepositories(name) {
        setLoading(true);
        let fullResult = [];
        let page = 1;
        while (page) {
            let url = `https://api.github.com/users/${name}/repos?per_page=100&sort=updated&page=${page}`;
            let response = await fetch(url);
            let pageResult = await response.json();
            if (pageResult == "") {
                page = 0;
            } else {
                page++;
                Array.prototype.push.apply(fullResult, pageResult);
            }
        }
        setLoading(false);
        setRepository(fullResult);
    }

    return (
        <BrowserRouter>
            <Navbar onShow={showPersonInfo} />
            <div className="container h-75 mt-4">
                <Route exact path={"/"}>
                    {existUser ? (
                        inputSmth ? (
                            loading ? (
                                <Loader />
                            ) : (
                                <Fragment>
                                    <div className="row h-100">
                                        <Persons personInfo={person} />
                                        <RepositoryList repos={repository} />
                                    </div>
                                </Fragment>
                            )
                        ) : (
                            <div className="align-items-center d-flex justify-content-center h-100">
                                <Home />
                            </div>
                        )
                    ) : (
                        <Redirect to="/NotFound" />
                    )}
                </Route>
                <Route exact path={"/notFound"}>
                    {existUser ? <Redirect to="/" /> : <HomeUserNotFound />}
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
