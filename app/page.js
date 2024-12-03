'use client';

import { useState, useEffect } from 'react';
import { getMovies } from '../utils/api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movieData = await getMovies('inception');
      console.log('Fetched Movie Data:', movieData);
      if (movieData.length > 0) {
        console.log('Sample Movie Object:', movieData[0]);
      }
      setMovies(movieData);
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Movie Database</h1>
      {movies.length > 0 ? (
        <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {movies.map((movie, index) => (
            <div key={index} className="movie-item" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '200px' }}>
              <h3 style={{ fontSize: '1.2em', margin: '0 0 10px' }}>{movie['#TITLE']}</h3>
              <p><strong>Year:</strong> {movie['#YEAR']}</p>
              <p><strong>Actors:</strong> {movie['#ACTORS']}</p>
              <img
                src={movie['poster'] || 'https://dummyimage.com/150x200/000/fff&text=No+Image'}
                alt={`${movie['#TITLE']} poster`}
                width="150"
                height="200"
                style={{ borderRadius: '5px', marginBottom: '10px' }}
              />
              <p>{movie['#OVERVIEW'] || 'No description available.'}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found or there was an error fetching data.</p>
      )}
    </div>
  );
}
