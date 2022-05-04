import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 20,
    },
    background: {
      height: 500,
      backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-5.jpg")`,
      backgroundRepeat: "no-repeat",
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
      padding: 50,
    },
    holder: {
      position: "relative",
      display: "inline-block",
      width: "100%",
      verticalAlign: "middle",
      WebkitBoxSizing: "border-box",
      boxSizing: "border-box",
    },
    title: {
      textTransform: "uppercase",
      fontWeight: 300,
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
    subtitle: {
      margin: "27px 0px 46px 0px",
      fontFamily: '"Roboto Condensed", sans-serif !important',
      fontWeight: 200,
      maxWidth: 400,
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
    hero: {
      display: "table-cell",
      verticalAlign: "middle",
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      textAlign: "center",
      marginBottom: 100,
      marginTop: 100,
    },
    titles: {
      fontWeight: 400,
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
      fontSize: 20,
      fontWeight: 100,
      fontFamily: '"Roboto Condensed", sans-serif !important',
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
      color: "#000",
      textTransform: "uppercase",
    },
    paper: {
      height: "100%",
      width: 400,
    },
    headerbox: {
      backgroundColor: "#98a86d",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      color: "#fff",
      fontSize: "18px",
      textAlign: "center",
      padding: 15,
    },
    textbox: {
      margin: "20px 0",
      fontFamily: '"Roboto Condensed",sans-serif',
      fontWeight: 200,
      textTransform: "uppercase",
    },
    bodybox: {
      backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-5.jpg")`,
      backgroundRepeat: "no-repeat",
      padding: "30px 0",
      textAlign: "center",
    },
    text: {
      padding: 12,
      fontSize: 18,
      fontFamily: '"Roboto Condensed", sans-serif !important',
    },
    dollar: {
      fontSize: 45,
      marginBottom: 30,
      fontFamily: '"Roboto Condensed", sans-serif !important',
      fontWeight: 300,
    },
    boxwhite: {
      backgroundColor: "#fff",
      opacity: 1,
    },
  }));
export const staticdata = [
    {
      image: "https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/h4-banner-img-1.jpg",
      title: "Fruit tea",
    },
    {
      image: "https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-banner-img-2.jpg",
      title: "Honey tea",
    },
    {
      image: "https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-banner-img-3.jpg",
      title: "Mint tea",
    },
    {
      image: "https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/h4-banner-img-4.jpg",
      title: "Black tea",
    }
  ]
export const imagecard = [
    {
      image: "https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-12-300x300.jpg",
      title: "organic tea",
      name: "Food",
    },
    {
        image: "https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-2-300x300.jpg",
        title: "indian tea",
        name: "Herbal",
    },
    {
        image:"https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-3-300x300.jpg",
        title:"chinese tea",
        name:"Food",
    },
    {
        image:"https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-4-300x300.jpg",
        title:"tea culture",
        name:"Food",
    },
    {
        image:"https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-5-300x300.jpg",
        title:"tea scent",
        name:"Herbal",
    },
    {
        image:"https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-6-300x300.jpg",
        title:"tea taste",
        name:"Food",
    },
    {
        image:"https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-7-300x300.jpg",
        title:"premium tea",
        name:"Organic",
    },
    {
        image:"https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/Portfolio-img-8-300x300.jpg",
        title:"artisan tea",
        name:"Healthy",
    },
  ]
export const carddata = [
    {
        title: "HERBAL TEA",
        dollar: "$ 99",
    },
    {
        title: "FRUIT TEA",
        dollar: "$ 109",
    },
    {
      title: "MIXED TEA",
      dollar: "$ 199"
    }

] 