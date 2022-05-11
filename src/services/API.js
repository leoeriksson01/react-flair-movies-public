import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  // return content
  return {
    results: response.data,
  };
};

export const getPopularMovies = async (page) => {
  return await get(
    `/movie/popular?${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
  );
};

export const getLatestMovies = async (page) => {
  return await get(
    `/movie/now_playing?${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
  );
};

export const getTopRatedMovies = async (page) => {
  return await get(
    `/movie/top_rated?${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
  );
};

export const getMovieById = async (id) => {
  return await get(
    `/movie/${id}?${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=credits,images,similar_movies`
  );
};

export const getPersonById = async (id) => {
  return await get(
    `/person/${id}?${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=credits`
  );
};

export const getMoviesByGenreId = async (id, page) => {
  return await get(
    `/discover/movie?${process.env.REACT_APP_TMDB_API_KEY}&sort_by_popularity&with_genre=${id}&page=${page}`
  );
};

export const getMoviesBySearch = async (page, searchText) => {
  return await get(
    `/search/movie?${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchText}&page=${page}`
  );
};

export const getGenres = async (page, id) => {
  return await get(
    `/genre/movie/list?${process.env.REACT_APP_TMDB_API_KEY}`
  );
};

export default {
  getPopularMovies,
  getLatestMovies,
  getPersonById,
  getMovieById,
  getMoviesByGenreId,
  getMoviesBySearch,
};
