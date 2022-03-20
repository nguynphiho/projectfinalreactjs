import React, { useState } from "react";
import { Grid, makeStyles, Paper, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Login from "../components/Login";
import Signup from "../components/Signup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    height: "100vh",
    width: "100vw",
  },
  paper: {
    width: "40vh",
    height: "60vh",
    margin: "20px auto",
  },
  content: {
    width: "100%",
    height: "100%",
  },
  tabPanel: {
    height: "calc(100% - 48px)",
  },
}));

const SignInOutContainter = () => {
  const classes = useStyles();

  const [tab, setTab] = useState("signin");

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.main}
      >
        <TabContext value={tab}>
          <Paper elevation={20} className={classes.paper}>
            <Grid container direction="column" className={classes.content}>
              <Grid item container justifyContent="center">
                <TabList onChange={handleChange}>
                  <Tab label="Sign In" value="signin" />
                  <Tab label="Sign Up" value="signup" />
                </TabList>
              </Grid>
              <Grid item xs>
                <TabPanel value="signin" className={classes.tabPanel}>
                  <Login toggle={handleChange} />
                </TabPanel>
                <TabPanel value="signup" className={classes.tabPanel}>
                  <Signup />
                </TabPanel>
              </Grid>
            </Grid>
          </Paper>
        </TabContext>
      </Grid>
    </div>
  );
};

export default SignInOutContainter;
