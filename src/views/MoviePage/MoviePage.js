// import { useState } from "react";
// import { Link, useParams, Switch, Route } from "react-router-dom";
// import { fetchMoviebyQuery } from "../../services/MoviesApi";

function MoviePage() {
  // const [movieSearch, setMovieSearch] = useState("");

  // useEffect(() => {
  //   if (!movieSearch) {
  //     return;
  //   }
  //   fetchMoviebyQuery(movieSearch).then((response) => setMovieSearch(response));
  // }, [movieSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = e.target.elements.query.value;
    console.log(movie);

    // if (movieSearch.trim() === "") {
    //   alert("Введите запрос в строку для поиска");
    //   return;
    // }
    // // onSubmit(movieSearch);
    // setMovieSearch("");
  };

  // console.log(movieSearch);

  return (
    <div>
      <h1>Movie Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          placeholder="Search movies"
          // onChange={(e) => {
          //   setMovieSearch(e.currentTarget.value.toLowerCase());
          // }}
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default MoviePage;
