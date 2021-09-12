import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const apiKey = "f28ce7fd4a56a9d9b3f011fdbf76b4a2";

async function fetchMovies(config) {
  const response = await axios
    .get(config)
    .then((response) => response)
    .catch((error) => {
      alert(`При загрузке данных произошла ошибка ${error}`);
    });

  return response;
}

export function fetchPopularMovies() {
  return fetchMovies(`/trending/movie/day?api_key=${apiKey}`);
}

export function fetchMovieById(id) {
  return fetchMovies(`/movie/${id}?api_key=${apiKey}`);
}

export function fetchCastById(id) {
  return fetchMovies(`/movie/${id}/credits?api_key=${apiKey}`);
}

export function fetchReviewsById(id) {
  return fetchMovies(`/movie/${id}/reviews?api_key=${apiKey}`);
}

export function fetchMoviebyQuery(query) {
  return fetchMovies(`/search/movie/?api_key=${apiKey}&query=${query}`);
}
