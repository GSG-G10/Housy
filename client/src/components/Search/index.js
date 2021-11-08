<<<<<<< HEAD
import { Container, Button, TextField } from '@mui/material';
import { marker, money, room } from '../../assets';
=======
>>>>>>> bd9b5bfc5e4604324830c85f38b4d2402a280d6a
import './style.css';

function Search() {
  return (
<<<<<<< HEAD
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
=======
    <div>
      Hello
    </div>
>>>>>>> bd9b5bfc5e4604324830c85f38b4d2402a280d6a
  );
}

export default Search;
