import { Fragment, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { useState, queryParams } from "react";

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const history = useNavigate();
    const {search:queryString} = useLocation();

    // console.log("search.location => ",search); // search.location = Undifined
    
    useEffect(() => {
        
        const queryParams = new URLSearchParams(search).get("search")
        setSearch(queryParams || "")

    }, [queryString])  // when there is a change in queryString the useEffect method will be executed

    const handleFormSubmission = e => {
        e.preventDefault();
        history({search: `search=${search}`})
    }
    const handleInput = e => {
        setSearch(e.target.value);
    }

    return (
        <Fragment>
            <form className="d-flex" role="search" onSubmit={handleFormSubmission}>
                <input className="form-control me-4" type="search" 
                    placeholder="Search" aria-label="Search" 
                    value={search}
                    onChange={handleInput}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </Fragment>
    )
}

export default SearchBox;