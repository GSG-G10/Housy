import Typography from '@mui/material/Typography';
import Search from '../Search';
import './style.css';

function SearchSection() {
  return (
    <>
      <div className="search-section">
        <div className="search-section__container">
          <Typography gutterBottom variant="h2" component="div">
            What are you looking for ?
          </Typography>
          <Search />
        </div>
      </div>
    </>
  );
}

export default SearchSection;
