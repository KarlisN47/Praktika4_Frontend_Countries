import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CountryDetails from '../components/CountryDetails';

// Main component for displaying detailed information about a single country
const CountryPage = () => {
  // Access the `countryName` route parameter from the URL
  const { countryName } = useParams();
  // State to store the fetched country data
  const [country, setCountry] = useState(null);
  // useEffect to fetch country data whenever the `countryName` parameter changes
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => setCountry(response.data[0]))
      .catch(() => setCountry(null));
  }, [countryName]);

  return (
    <div style={{ padding: '20px' }}>
      <CountryDetails country={country} />
    </div>
  );
};

export default CountryPage;