import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button } from '@mui/material';
import './style.css';

function FilterComponent() {
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <aside className="filter-wrapper">
      <div className="group">
        <Typography gutterBottom variant="h4" component="div">
          Price Range
        </Typography>
        <Box sx={{ width: 120 }}>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
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
              defaultValue={30}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
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
            <button type="button" className="operation">-</button>
            <span>2</span>
            <button type="button" className="operation">+</button>
          </div>
        </div>
        <div className="col">
          <Typography gutterBottom variant="h6" component="div">
            Bedroom
          </Typography>
          <div>
            <button type="button" className="operation">-</button>
            <span>2</span>
            <button type="button" className="operation">+</button>
          </div>
        </div>
        <div className="col">
          <Typography gutterBottom variant="h6" component="div">
            Bathroom
          </Typography>
          <div>
            <button type="button" className="operation">-</button>
            <span>2</span>
            <button type="button" className="operation">+</button>
          </div>
        </div>
      </div>
      <Button variant="contained" size="medium" className="btn btn-search">
        See Results
      </Button>
    </aside>
  );
}

export default FilterComponent;
