import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

function DisplayMovies() {
    
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const apiKey = process.env.REACT_APP_API; 

    useEffect(() => {

        nextPage();
       
    }, []);
   
    const nextPage = (pageNumber) => {

        axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`)

        .then((response) => {
            setCurrentPage(pageNumber);
            setMovies(response.data.results);
        })

        .catch(error => {
            console.log('Failed to retrieve data: ' + error);
        })
    }

    return(
        <div>
            <ul>
                {movies.map(show=> (
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} width="200px" alt="None" /><br/>
                        <b>{show.title}</b><br/>
                        <em>{show.vote_average}</em><br/>
                    </div>
                ))}
            </ul> 
          <Pagination nextPage={nextPage} currentPage={currentPage}/>
        </div>
    );
}

export default DisplayMovies;