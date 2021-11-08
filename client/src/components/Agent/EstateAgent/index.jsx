/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import {
  Container,
} from '@mui/material';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import House from '../../../assetes/house.jpeg';
import './style.css';

const AgenteEstate = ({ data }) => (
  <Container
    maxWidth="xl"
    sx={{
      width: '100%',
      height: 300,
      mb: 15,

    }}
  >

    {data.length ? data[0].estateData.map((datas) => (

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
          <img
              // src={datas.image}
            src={datas.image === null ? House : datas.image}
            alt={datas.title}
            className="img-house"
          />

          <CardContent sx={{
            display: 'flex', flexDirection: 'column', width: '100%',
          }}
          >

            <Typography sx={{ mt: -2, fontSize: 18 }}>
              {datas.title}
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
              {datas.description}
            </Typography>
            <Typography sx={{ mb: 1, display: 'flex', flexDirection: 'row' }}>

              {datas.category}
              {' '}

            </Typography>
            <Typography sx={{ mb: 1, display: 'flex', flexDirection: 'row' }}>

              {datas.type}
              {' '}

            </Typography>

          </CardContent>
        </CardContent>
        <Typography sx={{ mb: 1, display: 'flex', flexDirection: 'row' }}>
          <Button
            variant="outlined"
            sx={{
              mt: 20,
              mr: 1,
              minWidth: 0,
              padding: 0,
              border: 'none',
              '&:hover': { border: 'none' },

            }}
          >
            <DeleteIcon sx={{
              color: 'red',
              '&:hover': {
                border: '1px solid red',
                borderRadius: 1,
              },
            }}
            />
          </Button>
        </Typography>

      </Card>
    )) : ' You are still not published any estate' }

  </Container>
);

export default AgenteEstate;
