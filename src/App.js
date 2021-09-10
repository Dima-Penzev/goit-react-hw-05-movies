import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import fetchMovies from "./services/MoviesApi";

// const key = "f28ce7fd4a56a9d9b3f011fdbf76b4a2";

function App() {
  fetchMovies();
  return (
    <div>
      <AppBar />
    </div>
  );
}

export default App;
