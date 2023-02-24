import React from "react";
import { MovieContext } from "./MovieContext";
import MovieList from "./MovieList";
import ChangeContext from "./ChangeContext";
import NavBar from "./NavBar";
function ContextApp() {
  return (
    <MovieContext>
      <NavBar />
      <ChangeContext />
      <MovieList />
    </MovieContext>
  );
}

export default ContextApp;
