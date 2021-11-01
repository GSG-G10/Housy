<<<<<<< HEAD
import React from 'react'
import "./style.css"
function Search() {
    return (
        <div>
            Hello
        </div>
    )
}

export default Search
=======
import { Container, Button, TextField } from '@mui/material';
import { marker, money, room } from '../../assets';
import './style.css';

function Search() {
  return (
    <Container maxWidth="xl">
      <div className="search-container">
        <Button variant="contained" size="medium" className="btn active-search">
          Rent
        </Button>
        <Button variant="contained" size="medium" className="btn">
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
            />
            <Button variant="contained" size="large" className="btn btn-search">
              Search
            </Button>
          </div>
        </div>

      </div>
    </Container>
  );
}

export default Search;
>>>>>>> 7698c3f01aafec919de73f27b26cee8de9d7d3c4
