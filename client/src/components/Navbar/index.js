/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItemText, Button, Avatar, Container, List,
} from '@mui/material';
import './style.css';

import Logo from '../../asstes/logo.png';
import PresonImg from '../../asstes/avatar.png';
import LinkComponent from '../common/LinkComponent';

function NavBar() {
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
          <LinkComponent to="/" name="Home" />
          <LinkComponent to="/about" name="About" />
          <LinkComponent to="/buy" name="Buy" />
          <LinkComponent to="/rent" name="Rent" />

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

          <Link to="/">
            <Avatar src={PresonImg} />
          </Link>

        </div>

      </nav>
    </Container>

  );
}
export default NavBar;
