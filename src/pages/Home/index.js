import React from "react";
import Slider from "pages/Slider/index";
import {
  Box,
  CardMedia,
  Paper,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import StaticCard from "components/StaticCard";
import styled from "styled-components/macro";
import Review from "../About/ReviewSlider";
import ImageCard from "../../components/ImageCard";
import { useStyles, staticdata, imagecard, carddata } from "./Constants";
import Card from "./Card";


export default function Home() {
  
  const classes = useStyles();
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid xs={12} item>
          <Slider />
        </Grid>
        <Grid item xs={12} container spacing={3} style={{ marginBottom: 20}}>
          {staticdata.map((data) => 
            <Grid item xs={12} md={3} xl={3} key={data.title}>
              <Paper elevation={0} >
                <StaticCard
                  image={data.image}
                  title={data.title}
                />
              </Paper>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <Review />
        </Grid>
        <Grid item xs={12} container>
          <Grid xs={12} md={7} xl={7} item>
            <CardMedia
              style={{ height: 500 }}
              component="img"
              src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-6.jpg"
            />
          </Grid>
          <Grid xs={12} md={5} xl={5} item className={classes.background}>
            <Box className={classes.box}>
              <Box className={classes.holder}>
                <Typography variant="h3" className={classes.title}>
                  tea for two!
                </Typography>
                <Typography variant="h3" className={classes.title}>
                  enjoy it!
                </Typography>
                <Typography variant="h6" className={classes.subtitle}>
                  Stet luciliu ete laboramus quo ex. Simul eni sarcum men repre
                  et vel, sum spen onid ne definit. Mei pos.
                </Typography>
                <Discover>Discover</Discover>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.hero} container>
          <Box>
            <Typography className={classes.titles}>
              THIS MONTH’S PICK
            </Typography>
            <Typography style={{ margin: "24px 0 0" }} className={classes.body}>
              Eu mel vidisse labitur. No probo sonet est, fugit causae vix at.
              Ei duo
            </Typography>
            <Typography className={classes.body}>
              consulatu elaboraret voluptatibus, fabellas vel ne. Vela mazim
              vivendo
            </Typography>
            <Typography className={classes.body}>dissentias.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container justifyContent="center" spacing={4} style={{ marginBottom: 20}}>
            {carddata.map((data) => 
              (<Grid item key={data.title}>
              <Card title={data.title} dollar={data.dollar} />
            </Grid>))}
        </Grid>
        <Grid item xs={12} container spacing={3}>
          {imagecard.map((data) =>           
          <Grid item xs={6} md={3} xl={3} key={data.title}>
            <ImageCard
              image={data.image}
              title={data.title}
              name={data.name}
            />
          </Grid>)}
        </Grid>
      </Grid>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 30px;
  font-family: "Roboto Condensed", sans-serif;
`;

const Discover = styled.button`
  color: #fff;
  width: auto;
  border: 1px solid;
  padding: 16px 39px;
  font-size: 16px;
  background: #98a86d;
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
