'use client';

import { useState, useEffect } from 'react';
import { getMovies } from '../utils/api';
import Header from './components/header';
import MovieCard from './components/moviecard';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    setLoading(true);
    const movieData = await getMovies(query);
    setMovies(movieData);
    setFilteredMovies(movieData);
    setLoading(false);
  };

  const handleSort = (sortOption) => {
    let sortedMovies = [...filteredMovies];
    if (sortOption === 'titleAsc') {
      sortedMovies.sort((a, b) => a['#TITLE'].localeCompare(b['#TITLE']));
    } else if (sortOption === 'titleDesc') {
      sortedMovies.sort((a, b) => b['#TITLE'].localeCompare(a['#TITLE']));
    } else if (sortOption === 'yearAsc') {
      sortedMovies.sort((a, b) => a['#YEAR'] - b['#YEAR']);
    } else if (sortOption === 'yearDesc') {
      sortedMovies.sort((a, b) => b['#YEAR'] - a['#YEAR']);
    }
    setFilteredMovies(sortedMovies);
  };

  useEffect(() => {
    fetchMovies('inception');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={fetchMovies} onSort={handleSort} />
      <div className="container mx-auto py-8">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-center">No movies found or there was an error fetching data.</p>
        )}
      </div>
    </div>
  );
}
