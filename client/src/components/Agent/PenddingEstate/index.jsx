/* eslint-disable import/no-extraneous-dependencies */
import {
  Container,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import House from '../../../asstes/house.jpeg';

const PenddingEstate = () => (
  <Container
    maxWidth="xl"
    sx={{
      width: '100%',
      height: 300,
      mb: 15,

    }}
  >

    <Card sx={{
      width: 500,
      height: 200,
      border: 'none',
      marginTop: 2,
      display: 'flex',
      color: '#000',

    }}
    >
      <CardContent sx={{
        display: 'flex', width: '100%',

      }}
      >
        <img src={House} alt="publish house" className="img-house" />

        <CardContent sx={{
          display: 'flex', flexDirection: 'column', width: '100%',
        }}
        >

          <Typography sx={{ mt: -2, fontSize: 18 }}>
            Rhoncus sed vestibulum
            {' '}

          </Typography>
          <Typography
            component="div"
            sx={{
              mb: 1,
              display: 'flex',
              flexDirection: 'row',
              fontSize: 15,
              color: '#5e5e5e',
            }}
          >
            massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in
          </Typography>
          <Typography sx={{ mb: 1, display: 'flex', flexDirection: 'row' }}>

            Apartment
            {' '}

          </Typography>
          <Typography sx={{ mb: 1, display: 'flex', flexDirection: 'row' }}>

            Rent
            {' '}

          </Typography>

        </CardContent>
      </CardContent>

    </Card>

  </Container>
);

export default PenddingEstate;
