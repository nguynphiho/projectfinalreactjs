import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components/macro';
import ReviewSlider from 'pages/Home/ReviewSlider';

const useStyles = makeStyles((theme => ({
  root:{
    flexGrow: 1,
    marginTop: 20,
  },
  bodybox:{
    backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/p4-title-img.jpg")`,
    backgroundRepeat: 'no-repeat',
    padding:'140px 0',
    textAlign:'center',
    height: '100%',
    justifyContent: 'center',
    alignItems:'center',
  },
  center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
  card: {
    position: 'relative',
    marginBottom: '20px',
    border: 'none',
  },
  holder:{
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    verticalAlign: 'middle',
    WebkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
  },
  background:{
    height: 500,
    backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-img-2.jpg")`,
    backgroundRepeat: 'no-repeat',
  },
  text: {
    fontSize: '3rem',
    '@media (min-width:900px)': {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4.5rem',
    },
    fontWeight: 300,
    fontFamily: '"Roboto Condensed", sans-serif !important',
  },
  img: {
      width: '100%',
      height: '100%',
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
    padding: '40px 100px',
  },
  title:{  
    textTransform: 'uppercase',
    fontWeight:300,
    fontFamily: '"Roboto Condensed", sans-serif !important',
    color : '#fff',
    fontSize: '2.8rem',
    '@media (min-width:900px)': {
      fontSize: '2.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  subtitle:{
    margin: '27px 0px 46px 0px',
    fontFamily: '"Roboto Condensed", sans-serif !important',
    fontWeight: 200,
    maxWidth: 400,
    color : '#fff',
    fontSize: '1.3rem',
    '@media (min-width:900px)': {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
    },
  },
  bg: {
    backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-testimonials-img.jpg")`,
    maxHeight: 500,
    backgroundRepeat: 'no-repeat',
  },
  box_center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '100px 0',
  },
})));
export default function About() {
  const classes = useStyles();
  return (
    <Container>
        <Grid item container>
            <Grid xs={12} item container style={{ marginBottom : 30}}>
            <Grid xs={12} item style={{ maxHeight :  400 , height: '100%'}}>
                <Box className={classes.bodybox}>
                    <Typography className={classes.text}>ABOUT US</Typography>
                </Box>
            </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item xs={12} md={6} xl={6}>
                    <Box className={classes.img} component="img" src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-img-1.jpg">

                    </Box>
                </Grid>
                <Grid xs={12} md={6} xl={6} item className={classes.background}>
                <Box className={classes.box}>
                    <Box className={classes.holder}>
                        <Typography variant='h3' className={classes.title}>we wanted the best</Typography>
                        <Typography variant='h6' className={classes.subtitle}>
                            Modus debet expetendis ne mea, ei duo posse aeque de interesset. Ex zril virtute intelebat nam, inum eum tation aliquid acuman, est an scaevola pericula tractatos. 
                            Pro utis quem munere saperet, everti volumus ipsum. 
                        </Typography>
                        <Box style={{ maxWidth: '180px'}} component="img" src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-img-3.png">
                        </Box>
                    </Box>
                </Box>
                </Grid>
            </Grid>
            <Grid xs item className={classes.bg} style={{marginTop: 30, marginBottom: 30}}>
                <Grid item xs className={classes.box_center}>
                    <ReviewSlider />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid xs={12} md={6} xl={6} item className={classes.background}>
                    <Box className={classes.box}>
                        <Box className={classes.holder}>
                            <Typography variant='h3' className={classes.title}>our golds in 2022</Typography>
                            <Typography variant='h6' className={classes.subtitle}>
                                Modus debet expetendi ne mea, ei duo posse aeque de interesset. 
                                Ex zril virtute intelebat nam, inum eum tation aliquid acuman, est an scaevola pericula tractatos. 
                                Pro utis quem munere saperet, everti volumus ipsum.
                            </Typography>
                            <Discover>Discover</Discover>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                    <Box className={classes.img} component="img" src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-img-4.jpg">

                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Container>
  )
}
const Container = styled.div`
  margin-top: 5vh;
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
`;

const Discover = styled.button`
    color: #98a86d;
    width: auto;
    border: 1px solid;
    padding: 16px 39px;
    font-size: 16px;
    background: #fff;
    box-sizing: border-box;
    font-weight: 300;
    line-height: 1.15em;
    border-radius: 0;
    letter-spacing: .08em;
    text-transform: uppercase;
    vertical-align: middle;
    fontFamily: '"Roboto Condensed", sans-serif !important';
`;