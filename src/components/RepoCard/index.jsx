import React from "react";

const RepoCard = ({data}) => {

    console.log(data[0])

    return <div>
            <h2>This user has {data.length} repositories</h2>
            </div>
}

export default RepoCard