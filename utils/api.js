// utils/api.js
import axios from 'axios';

const BASE_URL = 'https://imdb.iamidiotareyoutoo.com';

export const getMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { q: query },
    });
    console.log('API Response:', response.data);
    return response.data.description;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
