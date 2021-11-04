import {
  Card,
  CardContent,
} from '@mui/material';

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
function PropertyCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{ backgroundColor: '#F1F1F1' }}>
      <CardContent className="row">
        <div className="rectangle">
          For sales
        </div>
        <div className="loveicon" style={{ width: '50%' }}>
          <FavoriteBorderIcon />
        </div>
        <h1 className="price">
          1000000$
        </h1>
      </CardContent>

      <CardContent className={classes.icons}>
        <div className="bathroom">
          <img
            src={Bath}
            alt="space"
          />
          2 Bathrooms
        </div>
        <div className="rooms">
          <img
            src={Rooms}
            alt="space"
          />
          2 Rooms
        </div>
        <div className="beds">
          <img
            src={Bed}
            alt="space"
          />
          23 Beds
        </div>
        <div className="sqft">
          <img
            src={Space}
            alt="space"
          />

          1200 Sqft
        </div>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
