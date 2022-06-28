import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchResults from "../SearchResults/SearchResults";

function SearchMovies () {

    let navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchMovies, setSearchMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const apiKey = process.env.REACT_APP_API; 

    const numbeOfPages = Math.floor(totalResults / 20);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)

        .then((response) => {
           setSearchMovies(response.data.results);
           setTotalResults(response.data.total_results);
        })

        .catch(error => {
            console.log('Failed to get the search results: ' + error);
        })

    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const adjacentPage = (pageNumber) => {

        axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&page=${pageNumber}`)

        .then((response) => {
            setCurrentPage(pageNumber);
            setSearchMovies(response.data.results);
        })

    }

    const displayPage = () => {
        navigate("/")
    }

    return(
        <div>
            <h1>Movie Search Engine</h1>
            <form action="" onSubmit={handleSubmit}>
            <label>Search Movie:</label>
            <input type="text" placeholder="Type movie title" onChange={(e) => handleSearch(e)}/>
            </form>
            <ul>
                {searchMovies.map( data => (
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} width="200px" alt="None" /><br/>
                            <b>{data.title}</b><br/>
                            <em>{data.vote_average}</em><br/>
                        </div>
                ))}
            </ul>
            <button onClick={displayPage}>Go to start page</button>
            { totalResults > 20 ? <SearchResults pages={numbeOfPages} currentPage={currentPage} adjacentPage={adjacentPage} /> : '' }
        </div>
    );
}

export default SearchMovies;

