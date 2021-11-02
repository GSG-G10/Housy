/* eslint-disable import/no-extraneous-dependencies */
import {
  Container,
} from '@mui/material';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import House from '../../../asstes/house.jpeg';

const AgenteFavariot = () => (
  <Container
    maxWidth="xl"
    sx={{
      width: '45%',
      mb: 15,

    }}
  >

    <Card sx={{
      width: 400,
      marginLeft: 20,
      marginTop: 2,
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
            Favatiot Estate
            {' '}
          </Typography>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src={House} />
              </ListItemAvatar>
              <ListItemText
                primary="Rhoncus sed vestibulum"
                secondary={(
                  <>
                    <Typography
                      sx={{
                        display: 'inline',
                        fontSize: 15,
                        color: '#5e5e5e',
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in

                    </Typography>

                  </>
          )}
              />
              <Typography>
                <Button
                  variant="outlined"
                  sx={{
                    ml: 2,
                    mt: 2,
                    minWidth: 0,
                    padding: 0,
                    border: 'none',
                    color: 'red',
                    '&:hover': { border: 'none' },

                  }}
                >
                  X
                </Button>
              </Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src={House} />
              </ListItemAvatar>
              <ListItemText
                primary="Rhoncus sed vestibulum"
                secondary={(
                  <>
                    <Typography
                      sx={{
                        display: 'inline',
                        fontSize: 15,
                        color: '#5e5e5e',
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in
                    </Typography>
                  </>
          )}
              />
              <Typography>
                <Button
                  variant="outlined"
                  sx={{
                    ml: 2,
                    mt: 2,
                    minWidth: 0,
                    padding: 0,
                    color: 'red',
                    border: 'none',
                    '&:hover': { border: 'none' },

                  }}
                >
                  X
                </Button>
              </Typography>
            </ListItem>
          </List>

        </CardContent>
      </CardContent>

    </Card>

  </Container>
);

export default AgenteFavariot;
