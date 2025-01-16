import React from 'react';
import { TextField } from '@mui/material';

// Functional component for the search bar
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search for a country"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ marginBottom: '20px' }}
    />
  );
};
// Exporting the SearchBar component as the default export
export default SearchBar;