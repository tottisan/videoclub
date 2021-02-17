import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";

process.env.VUE_APP_TMDB_API;

export function HeroMovies() {
  return axios.get(
    `${baseURL}movie/popular?api_key=${process.env.VUE_APP_TMDB_API}&language=en-US&page=1`
  );
}

export function trendingMovies() {
  return axios.get(
    `${baseURL}trending/movie/week?api_key=${process.env.VUE_APP_TMDB_API}&language=en-US&page=1`
  );
}

export function trendingSeries() {
  return axios.get(
    `${baseURL}tv/popular?api_key=${process.env.VUE_APP_TMDB_API}&language=en-US&page=1`
  );
}

export function moviesById(event) {
  return axios.get(
    `${baseURL}movie/${event}?api_key=${process.env.VUE_APP_TMDB_API}&append_to_response=credits,watch/providers,videos&language=en-US`
  );
}

export function seriesById(event) {
  return axios.get(
    `${baseURL}tv/${event}?api_key=${process.env.VUE_APP_TMDB_API}&append_to_response=credits,watch/providers,videos&language=en-US`
  );
}

export function searchAll(event) {
  return axios.get(
    `${baseURL}search/multi/?api_key=${process.env.VUE_APP_TMDB_API}`,
    {
      params: {
        query: event
      }
    }
  );
}
