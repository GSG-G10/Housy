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

const Signup = ({ handleClose, setLogged }) => {
  const history = useHistory();
  const [data, setData] = useState({
    Fullname: '', email: '', phone: '', location: '', password: '',
  });
  const [error, setError] = useState({
    Fullname: false, email: false, phone: false, location: false, password: false,
  });
  const [signupError, setSignupError] = useState('');
  const [signupSuccessful, setSignupSuccessful] = useState('');

  const {
    Fullname, email, phone, location, password,
  } = data;

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
  const signupForm = {
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
    if (Fullname === '' && password === '') {
      setError({ Fullname: true, password: true });
    } else if (Fullname === '') {
      setError({ Fullname: true, password: false });
    } else if (password === '') {
      setError({ Fullname: false, password: true });
    } else {
      setError({ Fullname: false, password: false });
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
      axios.post('/api/v1/user/signup', {
        Fullname,
        password,
      }).then((res) => {
        setSignupSuccessful(res);
        handleClose();
        setLogged(true);
        history.push('/');
      })
        .catch((err) => {
          setSignupError(err.response.data.message);
        });
    });
  };

  return (
    <Grid>
      <Paper style={Container}>
        <Grid align="center">
          <h2>Welcome </h2>
        </Grid>
        <Grid style={containerBtn} display="flex" justifyContent="space-between">
          <Button type="submit" color="primary" variant="contained" style={loginWithSocialMedia} fullWidth>
            <Avatar alt="Remy Sharp" style={avatar} src={Google} />

            Sign up with Google
          </Button>
          <Button type="submit" color="primary" variant="contained" style={loginWithSocialMedia} fullWidth>
            <Avatar alt="Remy Sharp" style={avatar} src={Facebook} />
            Sign up with Facebook
          </Button>

        </Grid>
        <Grid align="center">
          <Typography style={{ color: '#696969' }}>
            OR
          </Typography>
        </Grid>
        <Grid style={signupForm}>
          <TextField
            label="Fullname"
            placeholder="Your Fullname"
            fullWidth
            required
            name="Fullname"
            error={!!error.Fullname}
            value={Fullname}
            onChange={handleChange}
            helperText={error.Fullname ? 'This Field is required' : null}
            style={marginBtm}
          />
          <TextField
            label="email"
            placeholder="Your email"
            fullWidth
            required
            type="email"
            name="email"
            error={!!error.email}
            value={email}
            onChange={handleChange}
            helperText={error.email ? 'This Field is required' : null}
            style={marginBtm}
          />
          <TextField
            label="phone"
            placeholder="Enter phone"
            fullWidth
            required
            name="phone"
            error={!!error.phone}
            value={phone}
            onChange={handleChange}
            helperText={error.phone ? 'This Field is required' : null}
            style={marginBtm}
          />
          <TextField
            label="location"
            placeholder="Enter location"
            fullWidth
            required
            name="location"
            error={!!error.location}
            value={location}
            onChange={handleChange}
            helperText={error.location ? 'This Field is required' : null}
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
            {signupError}
          </Typography>
          <Button type="submit" color="primary" variant="contained" style={btnstyle} onClick={handleSubmit} fullWidth>Sign up</Button>

          <Typography>
            Do you have an account ?
            <Link to="/login" style={{ textDecoration: 'none' }}>
              login
            </Link>
          </Typography>
        </Grid>
      </Paper>

    </Grid>
  );
};

Signup.propTypes = {
  handleClose: PropTypes.func.isRequired,
  setLogged: PropTypes.func.isRequired,

};
export default Signup;
