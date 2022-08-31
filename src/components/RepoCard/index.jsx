import React from "react";

const RepoCard = ({data}) => {

    console.log(data)

    return <div>
            <h2>This user has {data.length} repositories</h2>
            <div>
               {data.map(i => <div>{i.name}</div>)}
            </div>
            </div>
}

export default RepoCard
