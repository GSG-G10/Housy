import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Search from '../Search';
import './style.css';

function SearchSection({ handleSearch }) {
  return (
    <>
      <div className="search-section">
        <div className="search-section__container">
          <Typography gutterBottom variant="h2" component="div">
            What are you looking for ?
          </Typography>
          <Search handleSearch={handleSearch} />
        </div>
      </div>
    </>
  );
}

export default SearchSection;
SearchSection.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
