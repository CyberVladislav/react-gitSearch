import React, { Fragment } from "react";
import { RepositoryItem } from "./RepositoryItem";
import repositoryEmpty from "../images/repositoryEmpty.svg";
import ReactPaginate from "react-paginate";

export const RepositoryList = (props) => {
    let [posts, setPosts] = React.useState([]);
    let obj = [];
    let pageCount;
    let repositoriesCount;
    if (Object.is(props.repos, undefined)) {
        repositoriesCount = 0;
    } else {
        repositoriesCount = Object.keys(props.repos).length;
        pageCount = repositoriesCount / 4;
        obj = props.repos.slice(0, 4);
    }

    function loadCommentsFromServer(offset) {
        obj = [];
        let position = offset + 4;
        if (offset == 0) position = 4;
        if (position > repositoriesCount) position = repositoriesCount;
        let allRepos = props.repos.slice(offset, position);
        for (var prop in allRepos) {
            Array.prototype.push.call(obj, allRepos[prop]);
        }
        setPosts(obj);
    }

    const handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 4);
        loadCommentsFromServer(offset);
    };

    return (
        <Fragment>
            {repositoriesCount ? (
                <div className="col-lg-8">
                    <h1 className="mb-4 mt-3 mt-lg-0">
                        Repositories ({repositoriesCount})
                    </h1>
                    {posts.length
                        ? posts.map((repository, index) => {
                              return (
                                  <RepositoryItem
                                      repo={repository}
                                      key={index}
                                  />
                              );
                          })
                        : obj.map((repository, index) => {
                              return (
                                  <RepositoryItem
                                      repo={repository}
                                      key={index}
                                  />
                              );
                          })}
                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                    />
                </div>
            ) : (
                <div className="col-lg-8 align-items-center d-flex justify-content-center">
                    <div className="text-center">
                        <img src={repositoryEmpty} alt="Repository not found" />
                        <p className="mt-4 icons-text">
                            Repository list is empty
                        </p>
                    </div>
                </div>
            )}
        </Fragment>
    );
};
