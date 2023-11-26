import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    padding: '8px',
    marginRight: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '4px',
    border: '1px solid #007BFF',
    background: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    outline: 'none',
  },
};

export default SearchBar;
