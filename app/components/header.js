// components/header.js
'use client';

import React, { useState } from 'react';

export default function Header({ onSearch, onSort }) {
  const [query, setQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
    onSort(e.target.value);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Movie Database</h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="p-2 rounded mr-2 bg-white text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 p-2 rounded">Search</button>
      </form>
      <div className="ml-4 flex items-center">
        <select onChange={handleSort} value={sortOption} className="p-2 rounded bg-white text-black">
          <option value="">Sort By</option>
          <option value="titleAsc">Title (A-Z)</option>
          <option value="titleDesc">Title (Z-A)</option>
          <option value="yearAsc">Year (Oldest to Newest)</option>
          <option value="yearDesc">Year (Newest to Oldest)</option>
        </select>
      </div>
    </header>
  );
}
