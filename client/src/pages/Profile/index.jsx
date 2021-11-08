/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container, Box,
} from '@mui/material';
import AgentInfo from '../../components/Agent/Info';
import AgenteFavariot from '../../components/Agent/Favroit';

import ProfileTabs from '../../components/tab';

const AgentProfile = () => {
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const getData = async () => {
      await axios.get(`/api/v1/user/${userId}/estates`)
        .then((res) => {
          setData([res.data]);
        })
        .catch((err) => {
          setError(err);
        });
    };
    getData();
  }, [userId]);

  return (

    <Container maxWidth="xl">
      {
        data.length
          ? (
            <AgentInfo
              name={data[0].agentData[0].name}
              email={data[0].agentData[0].email}
              phone={data[0].agentData[0].phone}
              avater={data[0].agentData[0].avater}
            />
          )
          : 'loading'
      }
      <Box sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
      }}
      >
        <ProfileTabs data={data} />
        <AgenteFavariot />
      </Box>

      {' '}

    </Container>

  );
};

export default AgentProfile;
