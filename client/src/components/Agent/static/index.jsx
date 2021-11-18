/* eslint-disable import/no-extraneous-dependencies */
import {
  Container,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const StaticEstate = () => (
  <Container
    maxWidth="xl"
    sx={{
      width: '100%',
      height: '100%',
      mb: 15,

    }}
  >

    <Card sx={{
      width: 300,
      height: 100,
      border: 'none',
      display: 'flex',
      color: '#000',

    }}
    >
      <CardContent sx={{
        display: 'flex', width: '100%',

      }}
      >

        <CardContent sx={{
          display: 'flex', flexDirection: 'column', width: '100%',
        }}
        >

          <Typography sx={{ mb: 1.5, fontSize: 18 }}>
            NO. Published estate : 5
            {' '}

          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }}>
            NO. Pindding estate : 2
            {' '}

          </Typography>

        </CardContent>
      </CardContent>

    </Card>

  </Container>
);

export default StaticEstate;
