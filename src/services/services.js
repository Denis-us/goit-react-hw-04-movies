import axios from "axios";
export function searchMovies(search = "", currentPage = 1) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=b4cae661bd383c29838501f5623954e9&query=${search}&page=${currentPage}`
    )
    .then((response) => response.data);
}

export function getTrending() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=b4cae661bd383c29838501f5623954e9`
    )
    .then((response) => response.data.results);
}

export function getMovieDetales(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=b4cae661bd383c29838501f5623954e9`
    )
    .then((response) => response.data);
}

export function getMovieCredits(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b4cae661bd383c29838501f5623954e9`
    )
    .then(({ data }) => data);
}

export function getMovieReviews(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b4cae661bd383c29838501f5623954e9`
    )
    .then(({ data }) => data);
}

//   export const imgpath = 'https://image.tmdb.org/t/p/w185';
//   export const posterimgpath = `https://image.tmdb.org/t/p/w342/`;
