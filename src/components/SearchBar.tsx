import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (summonerName: string, tagline: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [summonerName, tagline] = inputValue.split('#');
    if (summonerName.trim()) {
      onSearch(summonerName.trim(), tagline ? tagline.trim() : '');
    }
  };

  return (
    <div className="search-bar-wrapper">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Enter summoner name#tagline..." required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
