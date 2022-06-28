import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import DisplayMovies from "./MoviesList/DisplayMovies";
import SearchMovies from "./Search/SearchMovies";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <DisplayMovies /> },
    { path: "search", element: <SearchMovies /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  return(
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper;
