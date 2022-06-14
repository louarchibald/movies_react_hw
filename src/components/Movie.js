import React from "react";
// import MovieList from "./MovieList";

const Movie = ({movie}) => {

    return (
        <>
            <h4><a href={movie.url}>{movie.name}</a></h4>
            {/* <p>Movie Title</p> */}
        </>
    )
  
}

export default Movie;