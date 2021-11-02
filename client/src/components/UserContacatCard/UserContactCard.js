import {
  Card,
  CardContent,
  Typography,
  Avatar,
  colors,

} from '@mui/material';
import MdPhone from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'secondary',
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  icon: {
    marginRight: '0.5rem',
  },
});
const contentStyles = { display: 'flex', marginBottom: '15px', alignItems: 'center' };
function userContactCard({ image }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{ backgroundColor: '#F1F1F1' }}>

      <Avatar
        sx={{ bgcolor: colors.green[500], width: 124.02, height: 129.66 }}
        src={image}
        variant="rounded"
      />
      <CardContent className={classes.card}>
        <Typography gutterBottom variant="h5" component="div">
          Mohammed haroon
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Building Owner
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Contact Info:
        </Typography>

        <Typography sx={contentStyles} variant="body2" color="text.secondary">
          <LocationOnIcon className={classes.icon} />
          gaza , palestine
        </Typography>

        <Typography sx={contentStyles} variant="body2" color="text.secondary">
          <MdPhone className={classes.icon} />
          +970595222222
        </Typography>

        <Typography sx={contentStyles} variant="body2" color="text.secondary">
          <EmailIcon className={classes.icon} />
          info@gmail.com
        </Typography>

      </CardContent>
    </Card>
  );
}

export default userContactCard;
