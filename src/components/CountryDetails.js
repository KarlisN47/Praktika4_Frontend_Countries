import React from 'react';

// Functional component to display detailed information about a country
const CountryDetails = ({ country }) => {
  if (!country) return <p>Loading...</p>;
  // Destructure key properties from the country object
  const { name, flags, capital, population, area, languages, currencies } = country;

  return (
    <div>
      <img src={flags.svg} alt={name.common} width="200" />
      <h2>{name.common}</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Area:</strong> {area.toLocaleString()} km²</p>
      <p><strong>Languages:</strong> {Object.values(languages).join(', ')}</p>
      <p><strong>Currencies:</strong> {Object.values(currencies).map((currency) => currency.name).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;