
'use client';

import React from 'react';

export default function MovieCard({ movie }) {
    return (
        <div className="border rounded shadow p-4">
            <h3 className="text-lg font-bold">{movie['#TITLE']}</h3>
            <p><strong>Year:</strong> {movie['#YEAR']}</p>
            <p><strong>Actors:</strong> {movie['#ACTORS']}</p>
            <img
                src={movie['poster'] || 'https://dummyimage.com/150x200/000/fff&text=No+Image'}
                alt={`${movie['#TITLE']} poster`}
                width="150"
                height="200"
                className="rounded mb-2"
            />
            <p>{movie['#OVERVIEW'] || 'No description available.'}</p>
        </div>
    );
}
