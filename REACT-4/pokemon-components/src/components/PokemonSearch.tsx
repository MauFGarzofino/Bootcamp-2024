import React, { useState } from 'react';

interface PokemonSearchProps {
  onSearch: (query: string) => void;
}

const PokemonSearch = ({ onSearch }: PokemonSearchProps ) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };

  return (
    <div className="pokemon-search">
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search by ID or name" 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default PokemonSearch;
