import axios from "axios";
// const axios = require('axios');
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b4cae661bd383c29838501f5623954e9";

export function fetchTrend() {
  return axios
    .get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then((response) => response.data.results);
}

export function fetchMoviesBySearch(search, page = 1) {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}&page=${page}include_adult=false`
    )
    .then((response) => response.data);
}

export function fetchMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

export function fetchMovieCredits(movieId) {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(({ data }) => data);
}

export function fetchMoviesReviews(movieId, page = 1) {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then(({ data }) => data);
}
