import React from "react";

export const RepositoryItem = ({ repo }) => {
    return (
        <div className="repository-item rounded-3 d-flex align-items-center">
            <div className="ps-4 ">
                <a href={repo.html_url} className="title-text text-decoration-none d-block mb-1" target="_blank">{repo.name}</a>
                <span className="desc-text">{repo.description}</span>
            </div>
        </div>
    );
};
