import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import(
    "./pages/MoviesPage/MoviesPage.js" /* webpackChunkName: "movies-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);

const NotFoundPage = lazy(() =>
  import(
    "./pages/NotFoundPage/NotFoundPage.js" /* webpackChunkName: "NotFound-page" */
  )
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          {/* <Route>
            <NotFoundPage />
            <Redirect to="/" />
          </Route> */}

          <Route render={() => <Redirect to={{ pathname: "/" }} />} />

          {/* <Route path="*">
            <HomePage />
          </Route> */}
        </Switch>
      </Suspense>
    </Container>
  );
}
