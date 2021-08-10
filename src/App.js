import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import Cast from "./views/Cast";
import Reviews from "./views/Reviews";
import NotFoundView from "./views/NotFoundView";

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies/:movieId/cast" exact>
          <Cast />
        </Route>

        <Route path="/movies/:movieId/reviews" exact>
          <Reviews />
        </Route>

        <Route path="/movies/:movieId" exact>
          <MovieDetailsPage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
