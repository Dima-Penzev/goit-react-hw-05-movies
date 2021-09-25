import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Spiner from "./components/Loader/Loader";
const HomePage = lazy(() =>
  import("./views/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviePage = lazy(() =>
  import("./views/MoviePage/MoviePage.js" /* webpackChunkName: "movie-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <div>
      <AppBar />

      <Suspense fallback={<Spiner />}>
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
      </Suspense>
    </div>
  );
}

export default App;
