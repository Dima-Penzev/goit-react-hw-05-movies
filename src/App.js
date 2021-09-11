import "./App.css";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./views/HomePage/HomePage";
import MoviePage from "./views/MoviePage/MoviePage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";

// const key = "f28ce7fd4a56a9d9b3f011fdbf76b4a2";

function App() {
  return (
    <div>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <MoviePage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
