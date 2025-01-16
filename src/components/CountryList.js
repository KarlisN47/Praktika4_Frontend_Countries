import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';

// Functional component to display a list of countries
const CountryList = ({ countries }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  // Updates the page when the user interacts with the pagination component
  const handlePageChange = (event, value) => setPage(value);
  // Calculates the countries to display on the current page
  const displayedCountries = countries.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Region</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedCountries.map((country) => (
              <TableRow key={country.name.common}>
                <TableCell>
                  <img src={country.flags.svg} alt={country.name.common} width="50" />
                </TableCell>
                <TableCell>
                  <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
                </TableCell>
                <TableCell>{country.region}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(countries.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};

export default CountryList;