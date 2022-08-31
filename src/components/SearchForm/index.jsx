import React, { useState } from "react";

const SearchForm = ({ handleSubmission }) => {

    const [input, setInput] = useState("")

    const handleInput = (e) => {
        const newInput = e.target.value
        setInput(newInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSubmission(input)
    }

    return <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} value={input} required/>
            <input type="submit" value="Search"/>
            </form>

}

export default SearchForm