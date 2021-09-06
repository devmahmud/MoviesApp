import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '2e89540085d682a31ab096142c61c45a';

// Get popular movies
export const getPopularMovies = async () => {
  const res = await axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`);
  return res.data.results;
};

// Get Upcoming movies
export const getUpcomingMovies = async () => {
  const res = await axios.get(`${apiUrl}/movie/upcoming?api_key=${apiKey}`);
  return res.data.results;
};

// Get Popular TV
export const getPopularTv = async () => {
  const res = await axios.get(`${apiUrl}/tv/popular?api_key=${apiKey}`);
  return res.data.results;
};

// Get Family Movies
export const getFamilyMovies = async () => {
  const res = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10751`,
  );
  return res.data.results;
};
