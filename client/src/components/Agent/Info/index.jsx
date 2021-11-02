/* eslint-disable import/no-extraneous-dependencies */
import {
  Container, Avatar,
} from '@mui/material';
import Card from '@mui/material/Card';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RoomIcon from '@mui/icons-material/Room';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PresonImg from '../../../asstes/avatar.png';

const AgentInfo = () => (
  <Container
    maxWidth="xl"
    sx={{
      width: '100%',
      height: 300,
      backgroundColor: '#404d77',
      padding: 5,

    }}
  >

    <Card sx={{
      width: 500,
      height: 200,
      border: 'none',
      marginLeft: 15,
      display: 'flex',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      color: '#fff',

    }}
    >
      <CardContent sx={{
        display: 'flex', width: '100%',

      }}
      >
        <Avatar
          src={PresonImg}
          sx={{
            width: 100,
            height: 100,
            margin: 1,
          }}

        />
        <CardContent sx={{
          display: 'flex', flexDirection: 'column', width: '100%',
        }}
        >

          <Typography sx={{ mb: 1.5, fontSize: 18 }}>
            Mohammed M. Salah
          </Typography>
          <Typography component="div" sx={{ mb: 1.5, display: 'flex', flexDirection: 'row' }}>
            <PhoneAndroidIcon />
            {' '}
            0597777777
          </Typography>
          <Typography sx={{ mb: 1.5, display: 'flex', flexDirection: 'row' }}>

            <RoomIcon />
            Palestine, Gaza
          </Typography>
          <Typography sx={{ mb: 1.5, display: 'flex', flexDirection: 'row' }}>

            <EmailIcon />
            moh2020@gmail.com
          </Typography>

        </CardContent>
      </CardContent>
      <Typography sx={{ mb: 1.5, display: 'flex', flexDirection: 'row' }}>

        <Button
          variant="contained"
          endIcon={<EditIcon />}
          sx={{
            width: 80,
            height: 30,
            mt: 20,
            mr: 1,
          }}
        >
          Edit
        </Button>
      </Typography>

    </Card>

  </Container>
);

export default AgentInfo;
