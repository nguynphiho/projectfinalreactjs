import React from 'react'
import Slider from './Slider'
import {  Box, CardMedia, makeStyles, Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import StaticCard from '../../components/StaticCard';
import styled from 'styled-components/macro';
import Review from './ReviewSlider'
import ImageCard from '../../components/ImageCard';

const useStyles = makeStyles((theme => ({
  root:{
    flexGrow: 1,
    marginTop: 20,
  },
  background:{
    height: 500,
    backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-5.jpg")`,
    backgroundRepeat: 'no-repeat',
  },
  box:{
    width: '100%',
    verticalAlign: 'middle',
    WebkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '45vh',
    padding: 50,
  },
  holder:{
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    verticalAlign: 'middle',
    WebkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
  },
  title:{  
    textTransform: 'uppercase',
    fontWeight:300,
    fontFamily: '"Roboto Condensed", sans-serif !important',
  },
  subtitle:{
    margin: '27px 0px 46px 0px',
    fontFamily: '"Roboto Condensed", sans-serif !important',
    fontWeight: 200,
    maxWidth: 400,
  },
  hero:{
    display: 'table-cell',
    verticalAlign: 'middle',
    height: '100%',
    backgroundPosition:'center',
    backgroundSize: 'cover',
    textAlign: 'center',
    marginBottom: 100,
    marginTop:100,
  },
  titles:{
      fontSize: 60,
      fontWeight: 400,
      textTransform: 'uppercase',
      fontFamily: '"Roboto Condensed", sans-serif !important',
  },
  body:{
      color: '#000',
      fontSize: 20,
      fontWeight: 100,
      fontFamily: '"Roboto Condensed", sans-serif !important',
  },
  author:{
      display: 'block',
      margin: '27px 0 0',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '.03rem',
      color: '#000',
      textTransform: 'uppercase',
  },
  paper: {
    height: '100%',
    width:400,
  },
  headerbox:{
    backgroundColor: '#98a86d',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    color: '#fff',
    fontSize: '18px',
    textAlign:'center',
    padding:15,
  },
  textbox:{
    margin: '20px 0',
    fontFamily: '"Roboto Condensed",sans-serif',
    fontWeight: 200,
    textTransform: 'uppercase',
  },
  bodybox:{
    backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-5.jpg")`,
    backgroundRepeat: 'no-repeat',
    padding:'30px 0',
    textAlign:'center',
  },
  text: {
    padding: 12,
    fontSize: 18,
    fontFamily: '"Roboto Condensed", sans-serif !important',
  },
  dollar: {
    fontSize : 45, 
    marginBottom: 30,
    fontFamily: '"Roboto Condensed", sans-serif !important',
    fontWeight: 300,
  },
  boxwhite:{
    backgroundColor: '#fff',
    opacity: 1, 
  }
})));
export default function Home() {
  const classes = useStyles();
  return (
    <Container>
        <Grid container spacing={3}>
          <Grid xs={12} item>
            <Slider />
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <Paper elevation={0}>
              <StaticCard image='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/h4-banner-img-1.jpg' title='Fruit tea'></StaticCard>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <Paper elevation={0}>
              <StaticCard image='https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-banner-img-2.jpg' title='Honey tea'></StaticCard>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <Paper elevation={0}>
              <StaticCard image='https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-banner-img-3.jpg' title='Mint tea'></StaticCard>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <Paper elevation={0}>
              <StaticCard image='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/h4-banner-img-4.jpg' title='Black tea'></StaticCard>
            </Paper>
          </Grid>
          <Grid item xs={12} style={{marginTop:50}}>      
            <Review />
          </Grid>
          <Grid item xs={12} container style={{marginTop:100,}}>
            <Grid xs={12} md={7} xl={7} item>
              <CardMedia style={{height: 500}} component="img" src='https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-6.jpg'/>
            </Grid>
            <Grid xs={12} md={5} xl={5} item className={classes.background}>
              <Box className={classes.box}>
                <Box className={classes.holder}>
                    <Typography variant='h3' className={classes.title}>tea for two!</Typography>
                    <Typography variant='h3' className={classes.title}>enjoy it!</Typography>
                    <Typography variant='h6' className={classes.subtitle}>Stet luciliu ete laboramus quo ex. Simul eni sarcum men repre et vel, sum spen onid ne definit. Mei pos.</Typography>
                    <Discover>Discover</Discover>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.hero} container>
            <Box>
              <Typography className={classes.titles}>THIS MONTH’S PICK</Typography>
              <Typography style={{margin: '24px 0 0',}} className={classes.body}>Eu mel vidisse labitur. No probo sonet est, fugit causae vix at. Ei duo</Typography>
              <Typography className={classes.body}>consulatu elaboraret voluptatibus, fabellas vel ne. Vela mazim vivendo</Typography>
              <Typography className={classes.body}>dissentias.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={6}>
                  <Grid item>
                    <Paper className={classes.paper} elevation={1}>
                      <Box className={classes.headerbox}>
                        <Typography variant='h5' className={classes.textbox}>HERBAL TEA</Typography>
                      </Box>
                      <Box className={classes.bodybox}>
                        <Typography className={classes.dollar}>$ 99</Typography>
                        <Typography className={classes.text}>Est at laudem inimicus</Typography>
                        <Typography className={classes.text}>Amel te ocurreret</Typography>
                        <Typography className={classes.text}>Vocibus eumus omittam</Typography>
                        <Typography className={classes.text} style={{marginBottom: 30}}>Quo noster mandamus</Typography>
                        <Readmore>READ MORE</Readmore>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper} elevation={1}>
                        <Box className={classes.headerbox}>
                          <Typography variant='h5' className={classes.textbox}>FRUIT TEA</Typography>
                        </Box>
                        <Box className={classes.bodybox}>
                          <Typography className={classes.dollar}>$ 99</Typography>
                          <Typography className={classes.text}>Est at laudem inimicus</Typography>
                          <Typography className={classes.text}>Amel te ocurreret</Typography>
                          <Typography className={classes.text}>Vocibus eumus omittam</Typography>
                          <Typography className={classes.text} style={{marginBottom: 30}}>Quo noster mandamus</Typography>
                          <Readmore>READ MORE</Readmore>
                        </Box>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper} >
                          <Box className={classes.headerbox}>
                            <Typography variant='h5' className={classes.textbox}>MIXED TEA</Typography>
                          </Box>
                          <Box className={classes.bodybox}>
                            <Typography className={classes.dollar}>$ 199</Typography>
                            <Typography className={classes.text}>Est at laudem inimicus</Typography>
                            <Typography className={classes.text}>Amel te ocurreret</Typography>
                            <Typography className={classes.text}>Vocibus eumus omittam</Typography>
                            <Typography className={classes.text} style={{marginBottom: 30}}>Quo noster mandamus</Typography>
                            <Readmore>READ MORE</Readmore>
                          </Box>
                    </Paper>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12} container spacing={3} style={{marginTop: 100}}>
            <Grid item xs={6} md={3} xl={3}>
              <ImageCard image="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-12-300x300.jpg" title='organic tea' name='Food' />
            </Grid>
            <Grid item xs={6} md={3} xl={3}>
              <ImageCard image="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-2-300x300.jpg" title='indian tea' name='Herbal' />
            </Grid>
            <Grid item xs={6} md={3} xl={3}>
              <ImageCard image="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-3-300x300.jpg" title='chinese tea' name='Food' />
            </Grid>
            <Grid item xs={6} md={3} xl={3}>
              <ImageCard image="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-4-300x300.jpg" title='tea culture' name='Food' />
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={3}>
            <Grid item xs={6} md={3} xl={3}>
              <ImageCard image="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-5-300x300.jpg" title='tea scent' name='Herbal' />
            </Grid>
            <Grid item xs={6} md={3} xl={3}>
              <ImageCard image="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-6-300x300.jpg" title='tea taste' name='Food' />
            </Grid>
            <Grid item xs={6} md={3} xl={3}>
              <ImageCard image="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-7-300x300.jpg" title='premium tea' name='Organic' />
            </Grid>
            <Grid item xs={6} md={3} xl={3}>
              <ImageCard image="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-8-300x300.jpg" title='artisan tea' name='Healthy' />
            </Grid>
          </Grid>
        </Grid>
    </Container>
  )
}
const Container = styled.div`
  margin-top: 30px;
  font-family: 'Roboto Condensed', sans-serif;
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
    letter-spacing: .08em;
    text-transform: uppercase;
    vertical-align: middle;
    fontFamily: '"Roboto Condensed", sans-serif !important';
`;

const Readmore = styled.a`
  position: relative;
  padding: 0!important;
  font-size: 14px;
  letter-spacing: .04em;
  color: #000;
  background-color: transparent;
  border: 0;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  &::before{
  color: #000;
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  background-color: #98a86d;
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  padding: 0!important;
}

@media (hover: hover) and (pointer: fine) {
  &:hover::before{
    left: 0;
    right: auto;
    width: 100%;
    color: #000;
  }
}
`;
