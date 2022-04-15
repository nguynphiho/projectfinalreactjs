import PropTypes from "prop-types";
import styled from "styled-components/macro";

import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    "&:hover $whitebox": {
      transition: ".5s ease",
      opacity: 1,
    },
  },
  whitebox: {
    position: "absolute",
    width: "80%",
    height: "80%",
    background: "#fff",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "30vh",
    transition: ".5s ease",
    opacity: 0,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 30,
    fontWeight: 300,
    textTransform: "uppercase",
    fontFamily: '"Roboto Condensed", sans-serif !important',
  },
  name: {
    textAlign: "center",
    fontFamily: '"Roboto Condensed", sans-serif !important',
  },
}));
function ImageCard (props) {
  const classes = useStyles();
  const { title, image, name } = props;

  return (
    <Container>
      <Box style={{ position: "relative" }} className={classes.box}>
        <Box className={classes.img} component="img" src={image}></Box>
        <Box className={classes.whitebox}>
          <Box>
            <Typography className={classes.text}>{title}</Typography>
            <Typography className={classes.name}>{name}</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

ImageCard.defaultProps = {};

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ImageCard;

const Container = styled.div`
  max-width: 500px;
`;
