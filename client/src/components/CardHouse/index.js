import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import truncateFun from '../../utils/truncateFun';
import
{
  image, foregroundIMG, bath, couch, beds,
} from '../../assets';
import './style.css';

export default function MediaCard({
  estate: {
    title,
    price,
    description,
    bathrooms,
    bedrooms,
    rooms,
    space,
    type,
    // id,
  },
}) {
  return (
    <>
      <Card className="card-house" sx={{ maxWidth: 250 }}>
        {/* <Link to={`/estate/${id}`}> */}
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <div className="card-type">
          For
          {' '}
          {type}
        </div>
        <CardContent>
          <div className="row">
            <Typography gutterBottom variant="h4" component="div">
              $
              {price}
            </Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon color="primary" />
            </IconButton>
          </div>
          <Typography gutterBottom variant="h3" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">

            {truncateFun(description)}
          </Typography>
        </CardContent>
        <div className="card-details">
          <div className="row">
            <div className="col">
              <img src={couch} alt="number rooms" />
              <span>
                {rooms}
                RM
              </span>
            </div>
            <div className="col">
              <img src={beds} alt="number beds" />
              <span>
                {bedrooms}
                BR
              </span>
            </div>
            <div className="col">
              <img src={bath} alt="number bath" />
              <span>
                {bathrooms}
                Bth
              </span>
            </div>
            <div className="col">
              <img src={foregroundIMG} alt="area" />
              <span>
                {space}
                Sqft
              </span>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </Card>
    </>
  );
}

MediaCard.propTypes = {
  estate: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bathrooms: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    rooms: PropTypes.number.isRequired,
    space: PropTypes.number.isRequired,
  }).isRequired,
};
