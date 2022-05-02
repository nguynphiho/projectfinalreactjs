import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

import { Grid, makeStyles, CardMedia } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  box: {
    color: "#566d8b",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  des: {
    fontWeight: "550",
    fontSize: "15px",
  },
  parent: {
    "&:hover $title": {
      padding: "15px 70px 15px 44px",
    },
  },
  media: {
    height: "100%",
    transform: "scale(1)",
    WebkitTransform: "scale(1)",
    WebkitTransition: ".3s ease-in-out",
    transition: ".3s ease-in-out",
    "&:hover": {
      WebkitTransform: "scale(1.02)",
      transform: "scale(1.02)",
    },
  },
  title: {
    fontSize: 15,
    float: "right",
    position: "absolute",
    zIndex: 10,
    top: "25px",
    right: 0,
    maxWidth: "70%",
    padding: "15px 50px 15px 44px",
    margin: 0,
    background: "#98a86d",
    color: "#fff",
    transition: "0.5s",
  },
  banner: {
    position: "relative",
    display: "inline-block",
    verticalAlign: "middle",
    overflow: "hidden",
  },
}));
function StaticCard(props) {
  const classes = useStyles();
  const { title, image } = props;

  return (
    <Container>
      <Grid item xs className={classes.banner}>
        <Grid item xs className={classes.parent}>
          <span className={classes.title}>{title}</span>
          <CardMedia className={classes.media} component="img" image={image} />
        </Grid>
      </Grid>
    </Container>
  );
}

StaticCard.defaultProps = {};

StaticCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default StaticCard;

const Container = styled.div`
  color: #566d8b;
  background: #ffffff;
`;
