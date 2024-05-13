const API_KEY = 'c2b4b24be59193ee53efc2bab9448540';
const BASE_URL = 'https://api.themoviedb.org/3';

const MiApi = {
  async searchMovies(query) {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    return data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));
  },
};

export default MiApi;

