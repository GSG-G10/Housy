import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import {
  image, foregroundIMG, bath, couch, beds,
} from '../../assets';
import './style.css';

export default function MediaCard() {
  return (
    <>
      <Card className="card-house" sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <div className="card-type">For Sale</div>
        <CardContent>
          <div className="row">
            <Typography gutterBottom variant="h4" component="div">
              $100.00
            </Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon color="primary" />
            </IconButton>
          </div>
          <Typography gutterBottom variant="h3" component="div">
            Shami House
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New
            Wood Floors,
            Newly Renovated With New Wood Floors,
          </Typography>
        </CardContent>
        <div className="card-details">
          <div className="row">
            <div className="col">
              <img src={couch} alt="number room" />
              <span>
                2 RM
              </span>
            </div>
            <div className="col">
              <img src={beds} alt="number beds" />
              <span>
                2 BR
              </span>
            </div>
            <div className="col">
              <img src={bath} alt="number bath" />
              <span>
                2 Bth
              </span>
            </div>
            <div className="col">
              <img src={foregroundIMG} alt="area" />
              <span>
                1200 Sqft
              </span>
            </div>
          </div>
        </div>

      </Card>
    </>
  );
}
