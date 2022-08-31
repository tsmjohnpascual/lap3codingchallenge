import React from "react";

const RepoCard = ({data}) => {

    console.log(data)

    return <div>
            <h2>This user has {data.length} repositories</h2>
            <div className="container">
               {data.map(i => <div className="repo-card"><a href={i.url}><h3>{i.name}</h3></a><p>Stargazers: {i.stargazers_count}</p><p>Watchers: {i.watchers_count}</p><p>Forks: {i.forks_count}</p><p>Issues: {i.open_issues_count}</p></div>)}
            </div>
            </div>
}

export default RepoCard
