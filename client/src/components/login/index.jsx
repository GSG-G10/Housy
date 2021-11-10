/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Grid, Paper, Avatar, TextField, Button, Typography,
} from '@mui/material';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Facebook from '../../assets/Iconfacebook.png';
import Google from '../../assets/Icongoogle.png';

const Login = ({ handleClose, setLogged }) => {
  const history = useHistory();
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: false, password: false });
  const [LoginError, setLoginError] = useState('');
  const [LoginSuccessful, setLoginSuccessful] = useState('');

  const { email, password } = data;

  const marginBtm = { marginBottom: 10 };
  const btnstyle = {
    margin: '8px 0',
    backgroundColor: '#CBA41B',
  };
  const loginWithSocialMedia = {
    margin: '8px ',
    backgroundColor: '#2E72DB',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textTransform: 'none',
  };
  const loginWithEmail = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',

  };
  const Container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: 'none',

  };
  const containerBtn = {
    width: '90%',
    display: 'flex',
    alignItems: 'center',

  };
  const avatar = {
    borderRadius: 0,
    width: '30px',
    height: '30px',

  };

  const handleError = (callback) => {
    if (email === '' && password === '') {
      setError({ email: true, password: true });
    } else if (email === '') {
      setError({ email: true, password: false });
    } else if (password === '') {
      setError({ email: false, password: true });
    } else {
      setError({ email: false, password: false });
      callback();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleError(() => {
      axios.post('/api/v1/user/login', {
        email,
        password,
      }).then((res) => {
        setLoginSuccessful(res);
        handleClose();
        setLogged(true);
        history.push('/');
      })
        .catch((err) => {
          setLoginError(err.response.data.message);
        });
    });
  };
  return (
    <Grid>
      <Paper style={Container}>
        <Grid align="center">
          <h2>Welcome Back</h2>
        </Grid>
        <Grid style={containerBtn} display="flex" justifyContent="space-between">
          <Button type="submit" color="primary" variant="contained" style={loginWithSocialMedia} fullWidth>
            <Avatar alt="Remy Sharp" style={avatar} src={Google} />

            Sign in with Google
          </Button>
          <Button type="submit" color="primary" variant="contained" style={loginWithSocialMedia} fullWidth>
            <Avatar alt="Remy Sharp" style={avatar} src={Facebook} />
            Sign in with Facebook
          </Button>

        </Grid>
        <Grid align="center">
          <Typography style={{ color: '#696969' }}>
            OR
          </Typography>
        </Grid>
        <Grid style={loginWithEmail}>
          <TextField
            label="email"
            placeholder="Enter email"
            fullWidth
            required
            name="email"
            error={!!error.email}
            value={email}
            onChange={handleChange}
            helperText={error.email ? 'This Field is required' : null}
            style={marginBtm}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            name="password"
            required
            error={!!error.password}
            onChange={handleChange}
            helperText={error.password ? 'This Field is required' : null}
          />

          <Typography style={{ color: 'red' }}>
            {LoginError}
          </Typography>
          <Button type="submit" color="primary" variant="contained" style={btnstyle} onClick={handleSubmit} fullWidth>Sign in</Button>
          {/* <Typography> */}
          <Link to="/" style={{ color: '#696969', textDecoration: 'none' }}>
            Forgot password ?
          </Link>
          {/* </Typography> */}
          <Typography>
            Do you have an account ?
            <Link to="/singup" style={{ textDecoration: 'none' }}>
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Paper>

    </Grid>
  );
};

Login.propTypes = {
  handleClose: PropTypes.func.isRequired,
  setLogged: PropTypes.func.isRequired,

};
export default Login;
