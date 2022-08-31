import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import { loadRepositoryAction } from "../../actions"
import { Header, SearchForm, RepoCard } from "../../components"

const HomePage = () => {

    const dispatch = useDispatch()
    
    const repositoryData = useSelector(state => state.repository)
    const [username, setUserName] = useState("getfutureproof")

    useEffect(() => {
        dispatch(loadRepositoryAction(username))
    }, [username])

    const handleSearch = (userInput) => {
        setUserName(userInput)
    }

    return <>
            <Header />
            <SearchForm handleSubmission={handleSearch}/>
            <RepoCard data={repositoryData}/>
            </>

}

export default HomePage