import React, { useState } from 'react';
import './SearchBar.css'; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container"> {/* Added a container for styling */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a car..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
