/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItemText, Button, Avatar, Container, List,
} from '@mui/material';
import './style.css';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Login from '../login';
import Logo from '../../assets/logo.png';
import PresonImg from '../../assets/avatar.png';
import LinkComponent from '../common/LinkComponent';

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };
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

            <Button onClick={handleOpen} style={{ color: '#fff', textTransform: 'none' }}>Login</Button>

          </Button>

          <Link to="/">
            <Avatar src={PresonImg} />
          </Link>

        </div>

      </nav>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Login handleClose={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </Container>

  );
}
export default NavBar;
