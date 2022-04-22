// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import styled from "styled-components/macro";

import { makeStyles, Typography } from "@material-ui/core";

// Import Swiper styles
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay, Navigation } from "swiper";
import { Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  whitebox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "40%",
    left: "20%",
    transform: "translate(-10%,-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: ".5s ease",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: "2rem",
    "@media (min-width:900px)": {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.2rem",
    },
    fontWeight: 300,
    fontFamily: '"Roboto Condensed", sans-serif !important',
  },
  name: {
    fontFamily: '"Roboto Condensed", sans-serif !important',
    fontSize: "0.8rem",
    "@media (min-width:900px)": {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    fontWeight: 300,
  },
  headertext: {
    maxWidth: "40%",
  },
  boxtext: {
    maxWidth: "50%",
  },
}));
export default function Slider () {
  const classes = useStyles();
  return (
    <>
      <Swiper
        effect={"fade"}
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
        style={{ maxHeight: 650 }}
      >
        <SwiperSlide>
          <Box>
            <Box
              className={classes.img}
              component="img"
              src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/home-4-rev-img-1.jpg"
            ></Box>
            <Box className={classes.whitebox}>
              <Box className={classes.headertext}>
                <Typography className={classes.text}>IT&apos;S TEA TIME</Typography>
              </Box>
              <Box className={classes.boxtext}>
                <Typography className={classes.name}>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Typography>
              </Box>
              <Discover>Discover</Discover>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Box
              className={classes.img}
              component="img"
              src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/home-4-rev-img-4.jpg"
            ></Box>
            <Box className={classes.whitebox}>
              <Box className={classes.headertext}>
                <Typography className={classes.text}>THE TEA EMPIRE</Typography>
              </Box>
              <Box className={classes.boxtext}>
                <Typography className={classes.name}>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Typography>
              </Box>
              <Discover>Discover</Discover>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Box
              className={classes.img}
              component="img"
              src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/home-4-rev-img-3.jpg"
            ></Box>
            <Box className={classes.whitebox}>
              <Box className={classes.headertext}>
                <Typography className={classes.text}>
                  THIS IS TEALICIOUS
                </Typography>
              </Box>
              <Box className={classes.boxtext}>
                <Typography className={classes.name}>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Typography>
              </Box>
              <Discover>Discover</Discover>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
// // const textfade = keyframes`
// //   0% {
// //     opacity: 0;
// //   }
// //   80% {
// //     opacity: 0.5;
// //   }
// //   100% {
// //     opacity: 1;
// //   }
// `

// const Title = styled.span`
//   animation: ${textfade} 2s 0.1s  ease-in-out;
//   opacity: 1;
// `

// const Caption = styled.p`
//   animation: ${textfade} 2s 0.9s forwards ease-in-out;
//   opacity: 0;
// `

const Discover = styled.button`
  margin-top: 30px;
  max-width: 160px;
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
`;
