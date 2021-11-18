import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button } from '@mui/material';
import axios from 'axios';
import PropTypes from 'prop-types';
import './style.css';

function FilterComponent({ handleSearch }) {
  const [search, setSearch] = useState({
    category: '',
    price: 1000,
    roomNumbers: 2,
    bathRooms: 3,
    bedRooms: 1,
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
    <aside className="filter-wrapper">
      <form method="get" className="filter-form" onSubmit={handleSubmit}>
        <div className="group">
          <Typography gutterBottom variant="h4" component="div">
            Price Range
          </Typography>
          <Box sx={{ width: 120 }}>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={search.price}
              onChange={(e, newValue) => {
                setSearch({ ...search, price: newValue });
              }}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={1000}
              max={50000}
            />
          </Box>
        </div>
        <div className="group">
          <Typography gutterBottom variant="h4" component="div">
            Property Type
          </Typography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Category
              </InputLabel>
              <NativeSelect
                value={search.category}
                onChange={(e) => {
                  setSearch({ ...search, category: e.target.value });
                }}
              >
                <option value="whole house">Whole House</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div className="group">
          <Typography gutterBottom variant="h4" component="div">
            More Details
          </Typography>
          <div className="col">
            <Typography gutterBottom variant="h6" component="div">
              Room
            </Typography>
            <div>
              <button
                type="button"
                className="operation"
                onClick={() => setSearch({
                  ...search,
                  roomNumbers: search.roomNumbers - 1,
                })}
              >
                -

              </button>
              <span>{search.roomNumbers}</span>
              <button
                type="button"
                className="operation"
                onClick={() => setSearch({
                  ...search,
                  roomNumbers: search.roomNumbers + 1,
                })}
              >
                +

              </button>
            </div>
          </div>
          <div className="col">
            <Typography gutterBottom variant="h6" component="div">
              Bedroom
            </Typography>
            <div>
              <button
                type="button"
                className="operation"
                onClick={() => setSearch({
                  ...search,
                  bedRooms: search.bedRooms - 1,
                })}
              >
                -

              </button>
              <span>{search.bedRooms}</span>
              <button
                type="button"
                className="operation"
                onClick={() => setSearch({
                  ...search,
                  bedRooms: search.bedRooms + 1,
                })}
              >
                +

              </button>
            </div>
          </div>
          <div className="col">
            <Typography gutterBottom variant="h6" component="div">
              Bathroom
            </Typography>
            <div>
              <button
                type="button"
                className="operation"
                onClick={() => setSearch({
                  ...search,
                  bathRooms: search.bathRooms - 1,
                })}
              >
                -

              </button>
              <span>{search.bathRooms}</span>
              <button
                type="button"
                className="operation"
                onClick={() => setSearch({
                  ...search,
                  bathRooms: search.bathRooms + 1,
                })}
              >
                +

              </button>
            </div>
          </div>
        </div>
        <Button variant="contained" size="medium" type="submit" className="btn btn-search">
          See Results
        </Button>
      </form>
    </aside>
  );
}

FilterComponent.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default FilterComponent;
