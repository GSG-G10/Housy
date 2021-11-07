import {
  Card,
  CardContent,
} from '@mui/material';
import PropTypes from 'prop-types';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from '@mui/styles';
import Space from '../../assets/space.png';
import Bath from '../../assets/bath.png';
import Rooms from '../../assets/rooms.png';
import Bed from '../../assets/beds.png';
import './PropertyCard.css';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#F1F1F1',
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
});
function PropertyCard({
  data: {
    type, price, beds, baths, rooms, space,
  },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{ backgroundColor: '#F1F1F1' }}>
      <CardContent className="row">
        <div className="rectangle">
          {type}
        </div>
        <div className="loveicon" style={{ width: '50%' }}>
          <FavoriteBorderIcon />
        </div>
        <h1 className="price">
          {price}
        </h1>
      </CardContent>

      <CardContent className={classes.icons}>
        <div className="bathroom">
          <img
            src={Bath}
            alt="space"
          />
          {baths}
          {' '}
          Bathrooms
        </div>
        <div className="rooms">
          <img
            src={Rooms}
            alt="space"
          />
          {rooms}
          {' '}
          Rooms
        </div>
        <div className="beds">
          <img
            src={Bed}
            alt="space"
          />
          {beds}
          {' '}
          Beds
        </div>
        <div className="sqft">
          <img
            src={Space}
            alt="space"
          />
          {space}
          Sqft
        </div>
      </CardContent>
    </Card>
  );
}
PropertyCard.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    price: PropTypes.string,
    beds: PropTypes.string,
    baths: PropTypes.string,
    rooms: PropTypes.string,
    space: PropTypes.string,
  }).isRequired,
};

export default PropertyCard;
