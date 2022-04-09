import React, { useState } from "react";
import DisplayMovies from "./MoviesList/DisplayMovies";
import SearchMovies from "./Search/SearchMovies";

function App() {

  const [show, setShow] = useState(true);

  return (
    <div>

    { show ? <div><SearchMovies /><DisplayMovies /></div> : <SearchMovies /> }
      
    </div>
  );

}

export default App;
