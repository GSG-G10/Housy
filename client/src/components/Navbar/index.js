/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
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
          <Link to="/" style={{ color: '#797B7D', textDecoration: 'none' }}>
            <ListItem button style={{ textDecoration: 'none' }}>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <Link to="/signup" style={{ color: '#797B7D', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link to="/" style={{ color: '#797B7D', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="Buy" />
            </ListItem>
          </Link>
          <Link to="/" style={{ color: '#797B7D', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemText primary="Rent" />
            </ListItem>
          </Link>
        </List>

        <div className="agent">
          <Button style={{
            marginRight: '30px', alignSelf: 'center', backgroundColor: '#3781CB', color: '#FFFFFF', textTransform: 'none',
          }}
          >
            {' '}
            <Link to="/login" className="btn-host">
              <ListItemText primary="Host my House" style={{ color: '#fff' }} />
            </Link>
          </Button>
          {logged ? (
            <Link to="/">
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
