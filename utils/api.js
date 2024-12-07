import axios from 'axios';

const BASE_URL_IMDBOT = 'https://imdb.iamidiotareyoutoo.com';
const PHOTO_URL_IMDBOT = 'https://imdb.iamidiotareyoutoo.com/photo';
const OMDB_API_KEY = '16de450f';  

console.log('OMDB_API_KEY:', OMDB_API_KEY);

export const getMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL_IMDBOT}/search`, {
      params: { q: query },
    });
    const movies = response.data.description;

    const moviesWithPosters = await Promise.all(movies.map(async (movie) => {
      try {
        if (movie['#IMDB_ID']) {
          const posterUrl = `${PHOTO_URL_IMDBOT}/${movie['#IMDB_ID']}`;
          return {
            ...movie,
            poster: posterUrl
          };
        }
        
        return movie;
      } catch (imdbError) {
        console.error('Error fetching poster:', imdbError.response ? imdbError.response.data : imdbError.message);
        return movie;
      }
    }));

    return moviesWithPosters;
  } catch (error) {
    console.error('Error fetching movies:', error.response ? error.response.data : error.message);
    return [];
  }
};
