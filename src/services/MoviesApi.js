// import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3";
const apiKey = "f28ce7fd4a56a9d9b3f011fdbf76b4a2";
// const query = "rembo"

function fetchMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/1370/credits?api_key=${apiKey}`
  )
    .then((response) => response.json())
    .then((response) => console.log(response));
}

export default fetchMovies;
