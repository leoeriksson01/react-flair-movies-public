import axios from "axios";

const url =
  "https://api.themoviedb.org/3/discover/movie?${process.env.REACT_APP_TMDB_API_KEY}&with_genres=";

const get = async (endpoint) => {
  const res = await axios.get(url + endpoint);
  return {
    results: res.data,
  };
};

// Endpoint to get all pages from a genre
export const getGenrePages = async (prop, page = 1) => {
  const endpoint = `${prop}&page=${page}`;
  return get(endpoint);
};

//eslint-disable-next-line
export default {
  getGenrePages,
};
