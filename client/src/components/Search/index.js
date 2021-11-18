import { useState } from 'react';
import { Container, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios';
import { marker, money, room } from '../../assets';
import './style.css';

function Search({ handleSearch }) {
  const [search, setSearch] = useState({
    location: '',
    price: '',
    roomNumbers: '',
    type: 'rent',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      'api/v1/estate/search',
      {
        params: {
          ...search,
        },
      },
    );

    handleSearch(result.data.data);
  };
  return (
    <Container maxWidth="xl">
      <form className="search-container" method="GET" onSubmit={handleSubmit}>
        <Button
          variant="contained"
          size="medium"
          className={`btn ${search.type === 'rent' ? 'active-search' : ''}`}
          onClick={() => setSearch({
            ...search,
            type: 'rent',
          })}
        >
          Rent
        </Button>
        <Button
          variant="contained"
          size="medium"
          className={`btn ${search.type === 'sale' ? 'active-search' : ''}`}
          onClick={() => setSearch({
            ...search,
            type: 'sale',
          })}
        >
          Sale
        </Button>
        <div className="search-bar">
          <div className="search-bar-container">
            <TextField
              InputProps={{
                startAdornment: (
                  <span>
                    <img src={marker} alt="marker" />
                  </span>
                ),
              }}
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="Enter your location"
              variant="filled"
              value={search.location}
              onChange={(e) => setSearch({
                ...search,
                location: e.target.value,
              })}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <span>
                    <img src={money} alt="marker" />
                  </span>
                ),
              }}
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder=" max price"
              variant="filled"
              value={search.price}
              onChange={(e) => setSearch({
                ...search,
                price: e.target.value,
              })}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <span>
                    <img src={room} alt="marker" />
                  </span>
                ),
              }}
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="room number"
              variant="filled"
              value={search.roomNumbers}
              onChange={(e) => setSearch({
                ...search,
                roomNumbers: e.target.value,
              })}
            />
            <Button variant="contained" size="large" className="btn btn-search" type="submit">
              Search
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Search;
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
