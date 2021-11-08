/* eslint-disable no-console */
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
import PropTypes from 'prop-types';

import PresonImg from '../../../asstes/avatar.png';

const AgentInfo = ({
  name, email, phone, avater,
}) => (
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
          src={avater === null ? PresonImg : avater}
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
            {name}
          </Typography>
          <Typography component="div" sx={{ mb: 1.5, display: 'flex', flexDirection: 'row' }}>
            <PhoneAndroidIcon />
            {' '}
            {phone}
          </Typography>
          <Typography sx={{ mb: 1.5, display: 'flex', flexDirection: 'row' }}>

            <RoomIcon />
            Palestine, Gaza
          </Typography>
          <Typography sx={{ mb: 1.5, display: 'flex', flexDirection: 'row' }}>

            <EmailIcon />
            {email}
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
AgentInfo.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  avater: PropTypes.string.isRequired,
};

export default AgentInfo;
