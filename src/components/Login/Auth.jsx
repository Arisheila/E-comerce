/** @format */

import React from 'react';
import LoginForm from './Forms/Login';
import RegisterForm from './Forms/Register';
import { Grid } from '@mui/material';
import classes from './login.module.css';

export default function AuthLogin() {
  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <LoginForm />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <RegisterForm />
      </Grid>
    </Grid>
  );
}
