import React from "react";
import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ReviewSlider from "pages/About/ReviewSlider";
import { useStyles, Container, Discover } from "./Constants";

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
