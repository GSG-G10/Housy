/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import {
  ListItem, ListItemText, Button, Avatar, Container, List,
} from '@mui/material';
import './style.css';

import Logo from '../../asstes/logo.png';
import PresonImg from '../../asstes/avatar.png';

function NavBar() {
  const [logged, setLogged] = useState(true);
  return (
    <Container maxWidth="xl">
      <nav className="container">
        <Link component={RouterLink} to="/">
          <img src={Logo} alt="logo-housy" className="img-logo" />
        </Link>
        {' '}
        <List
          className="list"
          sx={{ justifyContent: 'space-between' }}
          style={{
            marginRight: '150px', alignSelf: 'center', color: '#797B7D',
          }}
        >
          <Link component={RouterLink} to="/" style={{ color: '#797B7D', textDecoration: 'none' }}>
            <ListItem button style={{ textDecoration: 'none' }}>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <Link component={RouterLink} to="/signup" style={{ color: '#797B7D', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link component={RouterLink} to="/" style={{ color: '#797B7D', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="Buy" />
            </ListItem>
          </Link>
          <Link component={RouterLink} to="/" style={{ color: '#797B7D', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="Rent" />
            </ListItem>
          </Link>
        </List>
        {/* </Stack> */}

        <div className="agent">
          <Button style={{
            marginRight: '30px', alignSelf: 'center', backgroundColor: '#3781CB', color: '#FFFFFF', textTransform: 'none',
          }}
          >
            {' '}
            <Link component={RouterLink} to="/login" className="btn-host">
              <ListItemText primary="Host my House" style={{ color: '#fff' }} />
            </Link>
          </Button>
          {logged ? (
            <Link component={RouterLink} to="/">
              <Avatar src={PresonImg} />
            </Link>
          ) : (
            ''
          )}
        </div>

      </nav>
    </Container>

  );
}
export default NavBar;
