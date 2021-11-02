import {
  Container, Box,
} from '@mui/material';
import AgentInfo from '../../components/Agent/Info';
import AgenteFavariot from '../../components/Agent/Favroit';

import ProfileTabs from '../../components/tab';

const AgentProfile = () => (

  <Container maxWidth="xl">
    <AgentInfo />
    <Box sx={{
      display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
    }}
    >
      <ProfileTabs />
      <AgenteFavariot />
    </Box>

    {' '}

  </Container>

);

export default AgentProfile;
