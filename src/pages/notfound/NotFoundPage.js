import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    // marginTop: '70px',
    width: '100%',
    height: '90vh',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center'
    
  },
  text: {
    fontSize: '100px',
    fontWeight: 'bold',
    color: 'grey',
    [theme.breakpoints.down('sm')] :{
      fontSize: '70px',
    },
    [theme.breakpoints.down('xs')] :{
      fontSize: '30px',
    }
  }
}));

function NotFoundPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item sm={12} md={12} lg={12}>
          <Typography className={classes.text}>Page Not Found</Typography>
        </Grid>
        <Grid item sm={12} md={12} lg={12}>
          <Button variant="contained" color="secondary" classes={classes.text}>Go to DashBoard</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default NotFoundPage