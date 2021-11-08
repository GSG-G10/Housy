/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState } from 'react';
import {
  Grid, Paper, Avatar, TextField, Button, Typography,
} from '@mui/material';
import { useHistory, Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import axios from 'axios';

const Login = ({ handleClose, setLogged }) => {
  // console.log(handleClose);
  const history = useHistory();
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: false, password: false });
  const [LoginError, setLoginError] = useState('');
  const [LoginSuccessful, setLoginSuccessful] = useState('');

  const { email, password } = data;

  const marginBtm = { marginBottom: 10 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = {
    margin: '8px 0',
    backgroundColor: '#CBA41B',
  };
  const btnTopstyle = {
    margin: '8px ',
    backgroundColor: '#2E72DB',
  };
  const box = {
    border: '1px solid red',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',

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
    // console.log('yes');
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
      <Paper>
        <Grid align="center">
          <h2>Welcome Back</h2>
        </Grid>
        <Grid display="flex" justifyContent="space-between">
          <Button type="submit" color="primary" variant="contained" style={btnTopstyle} fullWidth>
            Sign in with Google
            {' '}

          </Button>
          <Button type="submit" color="primary" variant="contained" style={btnTopstyle} fullWidth>
            Sign in with Facebook

          </Button>

        </Grid>
        <Grid align="center" style={box}>

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
            fullWidth
            required
            error={!!error.password}
            onChange={handleChange}
            helperText={error.password ? 'This Field is required' : null}
          />

          <Typography style={{ color: 'red' }}>
            {LoginError}
          </Typography>
          {/* <Link to="/"> */}
          <Button type="submit" color="primary" variant="contained" style={btnstyle} onClick={handleSubmit} fullWidth>Sign in</Button>
          {/* </Link> */}
          <Typography>
            <Link to="/">
              Forgot password ?
            </Link>
          </Typography>
          <Typography>
            Do you have an account ?
            <Link to="/singup">
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
