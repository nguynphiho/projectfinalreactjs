import React from 'react'
import { useStyles } from './Constants';
import { Paper, Box, Typography } from '@material-ui/core';
import styled from '@emotion/styled';
import PropTypes from "prop-types";


export default function Card(props) {
  const {title, dollar } = props
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={1}>
      <Box className={classes.headerbox}>
        <Typography variant="h5" className={classes.textbox}>
          {title}
        </Typography>
      </Box>
      <Box className={classes.bodybox}>
        <Typography className={classes.dollar}>{dollar}</Typography>
        <Typography className={classes.text}>
          Est at laudem inimicus
        </Typography>
        <Typography className={classes.text}>
          Amel te ocurreret
        </Typography>
        <Typography className={classes.text}>
          Vocibus eumus omittam
        </Typography>
        <Typography
          className={classes.text}
          style={{ marginBottom: 30 }}
        >
          Quo noster mandamus
        </Typography>
        <Readmore>READ MORE</Readmore>
      </Box>
    </Paper>
  )
}

Card.defaultProps = {};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  dollar: PropTypes.string.isRequired,
};


const Readmore = styled.a`
  position: relative;
  padding: 0 !important;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #000;
  background-color: transparent;
  border: 0;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  &::before {
    color: #000;
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #98a86d;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    padding: 0 !important;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover::before {
      left: 0;
      right: auto;
      width: 100%;
      color: #000;
    }
  }
`;
