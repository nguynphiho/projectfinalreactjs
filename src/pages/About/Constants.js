import { makeStyles } from "@material-ui/core";
import styled from "styled-components/macro";
export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 20,
    },
    bodybox: {
      backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/p4-title-img.jpg")`,
      backgroundRepeat: "no-repeat",
      padding: "140px 0",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      position: "relative",
      marginBottom: "20px",
      border: "none",
    },
    holder: {
      position: "relative",
      display: "inline-block",
      width: "100%",
      verticalAlign: "middle",
      WebkitBoxSizing: "border-box",
      boxSizing: "border-box",
    },
    background: {
      backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-img-2.jpg")`,
      backgroundRepeat: "no-repeat",
    },
    text: {
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "4.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem"
      },
      fontWeight: 300,
      fontFamily: '"Roboto Condensed", sans-serif !important',
    },
    img: {
      width: "100%",
      height: "100%",
    },
    box: {
      width: "100%",
      verticalAlign: "middle",
      WebkitBoxSizing: "border-box",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "45vh",
      padding: "0 100px",
    },
    title: {
      textTransform: "uppercase",
      fontWeight: 300,
      fontFamily: '"Roboto Condensed", sans-serif !important',
      color: "#fff",
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem"
      },
    },
    subtitle: {
      margin: "27px 0px 46px 0px",
      fontFamily: '"Roboto Condensed", sans-serif !important',
      fontWeight: 200,
      maxWidth: 400,
      color: "#fff",
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    bg: {
      backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/p1-testimonials-img.jpg")`,
      backgroundRepeat: "no-repeat",
    },
    box_center: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "100px 0",
    },
  })); 

export const Container = styled.div`
  margin-top: 5vh;
  font-family: "Roboto Condensed", sans-serif;
  width: 100%;
`;

export const Discover = styled.button`
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