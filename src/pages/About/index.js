import React from "react";
import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components/macro";
import ReviewSlider from "pages/About/ReviewSlider";
import { useStyles } from "./Constants";

export default function About() {
  const classes = useStyles();
  return (
    <Container>
      <Grid item container>
        <Grid xs={12} item container>
          <Grid xs={12} item style={{ maxHeight: 400, height: "100%", marginBottom: 50 }}>
            <Box className={classes.bodybox}>
              <Typography className={classes.text}>ABOUT US</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid xs={12} item container style={{ marginBottom: 50}}>
          <Grid item xs={12} md={6} xl={6}>
            <Box
              className={classes.img}
              component="img"
              src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-img-1.jpg"
            ></Box>
          </Grid>
          <Grid xs={12} md={6} xl={6} item className={classes.background}>
            <Box className={classes.box}>
              <Box className={classes.holder}>
                <Typography variant="h3" className={classes.title}>
                  we wanted the best
                </Typography>
                <Typography variant="h6" className={classes.subtitle}>
                  Modus debet expetendis ne mea, ei duo posse aeque de
                  interesset. Ex zril virtute intelebat nam, inum eum tation
                  aliquid acuman, est an scaevola pericula tractatos. Pro utis
                  quem munere saperet, everti volumus ipsum.
                </Typography>
                <Box
                  style={{ maxWidth: "180px" }}
                  component="img"
                  src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-img-3.png"
                ></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          item
          className={classes.bg}
          style={{ marginBottom: 50}}
        >
          <Grid item xs={12} className={classes.box_center}>
            <ReviewSlider />
          </Grid>
        </Grid>
        <Grid xs={12} item container >
          <Grid xs={12} md={6} xl={6} item className={classes.background}>
            <Box className={classes.box}>
              <Box className={classes.holder}>
                <Typography variant="h3" className={classes.title}>
                  our golds in 2022
                </Typography>
                <Typography variant="h6" className={classes.subtitle}>
                  Modus debet expetendi ne mea, ei duo posse aeque de
                  interesset. Ex zril virtute intelebat nam, inum eum tation
                  aliquid acuman, est an scaevola pericula tractatos. Pro utis
                  quem munere saperet, everti volumus ipsum.
                </Typography>
                <Discover>Discover</Discover>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Box
              className={classes.img}
              component="img"
              src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-img-4.jpg"
            ></Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 5vh;
  font-family: "Roboto Condensed", sans-serif;
  width: 100%;
`;

const Discover = styled.button`
  color: #98a86d;
  width: auto;
  border: 1px solid;
  padding: 16px 39px;
  margin-bottom: 10px;
  font-size: 16px;
  background: #fff;
  box-sizing: border-box;
  font-weight: 300;
  line-height: 1.15em;
  border-radius: 0;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  vertical-align: middle;
  fontfamily: '"Roboto Condensed", sans-serif !important';
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
    transition: 0.5s ease;
  }
  &:hover {
    background-color: $green;
  }
  &:hover::before {
    transform: translateX(0);
  }
`;
