import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayMovies from "./MoviesList/DisplayMovies";
import SearchMovies from "./Search/SearchMovies";

function App() {
  return (
    <div>
        <SearchMovies />
        <DisplayMovies />
    </div>
  );

}

export default App;
