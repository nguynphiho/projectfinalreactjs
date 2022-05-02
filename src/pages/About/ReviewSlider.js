// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const useStyles = makeStyles((theme) => ({
  section: {
    position: "relative",
    margin: "0 auto",
    zIndex: 20,
  },
  hero: {
    display: "table-cell",
    verticalAlign: "middle",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    textAlign: "center",
    marginBottom: 100,
  },
  title: {
    textTransform: "uppercase",
    fontFamily: '"Roboto Condensed", sans-serif !important',
    "@media (min-width:900px)": {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem"
    },
  },
  body: {
    color: "#000",
    fontFamily: '"Roboto Condensed", sans-serif !important',
    fontWeight: 100,
    "@media (min-width:900px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem"
    },
  },
  author: {
    display: "block",
    margin: "27px 0 0",
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: ".03rem",
    fontFamily: '"Roboto Condensed", sans-serif !important',
    color: "#000",
    textTransform: "uppercase",
  },
}));
export default function ReviewSlider() {
  const classes = useStyles();

  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        loop={true}
        modules={[Pagination, Autoplay]}
        className={classes.section}
      >
        <SwiperSlide className={classes.hero}>
          <Grid>
            <Typography className={classes.title}>It's reviews time</Typography>
            <Typography style={{ margin: "24px 0 0" }} className={classes.body}>
              "Impedit sententiae mea cu, at cum dicat molestiae philosophia. Et
              quo illum vituperatoribus.
            </Typography>
            <Typography className={classes.body}>
              Insolens persequeris ut usu. Qui no nostro audire vocibus."
            </Typography>
            <Typography className={classes.author}>Mary Carter</Typography>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className={classes.hero}>
          <Grid>
            <Typography className={classes.title}>Lovely customers</Typography>
            <Typography style={{ margin: "24px 0 0" }} className={classes.body}>
              "Impedit sententiae mea cu, at cum dicat molestiae philosophia. Et
              quo illum vituperatoribus.
            </Typography>
            <Typography className={classes.body}>
              Insolens persequeris ut usu. Qui no nostro audire vocibus."
            </Typography>
            <Typography className={classes.author}>Cory Johnson</Typography>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className={classes.hero}>
          <Grid>
            <Typography className={classes.title}>It's reviews time</Typography>
            <Typography style={{ margin: "24px 0 0" }} className={classes.body}>
              "Impedit sententiae mea cu, at cum dicat molestiae philosophia. Et
              quo illum vituperatoribus.
            </Typography>
            <Typography className={classes.body}>
              Insolens persequeris ut usu. Qui no nostro audire vocibus."
            </Typography>
            <Typography className={classes.author}>Clarie Morales</Typography>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
