import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';

const Home = () => {
  // State to store the fetched list of countries
  const [countries, setCountries] = useState([]);
  // State to store the fetched list of countries
  const [searchQuery, setSearchQuery] = useState('');
  // useEffect hook to fetch country data from the REST API when the component mounts
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => setCountries(response.data));
  }, []);
  // Filter the countries based on the search query
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredCountries.length === 0 ? (
        <p>No countries found.</p>
      ) : (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
};

export default Home;