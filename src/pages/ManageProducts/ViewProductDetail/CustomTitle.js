import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2,0),
  },

  title: {
    fontSize: 18,
    color: 'Grey',
    fontWeight: 600,
    textShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)'
  },

  name: {
    marginLeft: theme.spacing(3),
    fontSize: 24,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    color: '#696cff',
    textShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)'
  },
  descContainer: {
    marginTop: theme.spacing(1),
    border: 'solid 2px grey',
    borderRadius: 20,
    width: '100%',
    minHeight: '200px',
    padding: theme.spacing(2),
  },

  description: {
    fontSize: 18,
    fontFamily: 'poppins',
    color: '#696cff'
  }
}));

function CustomTitle (props) {
  const {title, name, desc} =props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid>
        <Typography className={classes.title}>{`${title} :`}</Typography>
        <Typography className={classes.name}>{name}</Typography>
        {
          desc && (
            <div className={classes.descContainer}>
              <Typography className={classes.description}>{desc}</Typography>
            </div>
          )
        }
      </Grid>
    </div>
  );
}

export default CustomTitle;