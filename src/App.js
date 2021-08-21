import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import CustomLoader from "./components/Loader/Loader";

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

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<CustomLoader />}>
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

          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </Suspense>
    </Container>
  );
}
