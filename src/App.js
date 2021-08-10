import {lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from './Components/Container/Container';
import AppBar from './Components/AppBar/AppBar';

const HomePage = lazy(() => import('./Views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./Views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./Views/MovieDetailsPage/MovieDetailsPage'));
const PageNotFound = lazy(() => import('./Views/PageNotFound/PageNotFound'));


export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h2>Loading...</h2>}>
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

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  )
}