import React from "react";
import { Grid, makeStyles, Modal, Paper, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import EnterEmail from "./EnterEmail";
import ChangePassword from "./ChangePassword";
import BackgroundModal from "components/BackgroundModal";
import VerifyCode from "./VerifyCode";
import useInput, { useCheckbox } from "hooks/input.hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
  },
  paper: {
    width: 500,
  },
  content: {
    width: "100%",
    height: "100%",
  },
  tabPanel: {
    height: "100%",
  },
  zIndex: {
    zIndex: 200,
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { value: emailStore, setValue: setEmailStore } = useInput("");
  const { value: tab, setValue: setTab } = useInput("enter email");
  const { value: open, setValue: setOpen } = useCheckbox(true);

  const handleClose = (pathname) => {
    setOpen(false);
    navigate(pathname);
  };

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <div className={classes.root}>
      <BackgroundModal />
      <Modal
        open={open}
        onClose={() => handleClose("/login")}
        className={classes.zIndex}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          className={classes.main}
        >
          <Grid item>
            <TabContext value={tab}>
              <Paper elevation={20} className={classes.paper}>
                <Grid container direction="column" className={classes.content}>
                  <Grid item container justifyContent="center">
                    <TabList>
                      <Tab label="Enter email" value="enter email" />
                      <Tab label="Verify code" value="verify code" />
                      <Tab label="Change Password" value="change password" />
                    </TabList>
                  </Grid>
                  <Grid item xs>
                    <TabPanel value="enter email" className={classes.tabPanel}>
                      <EnterEmail
                        toggle={handleChange}
                        close={handleClose}
                        setEmailStore={setEmailStore}
                      />
                    </TabPanel>
                    <TabPanel value="verify code" className={classes.tabPanel}>
                      <VerifyCode
                        toggle={handleChange}
                        close={handleClose}
                        emailStore={emailStore}
                      />
                    </TabPanel>
                    <TabPanel
                      value="change password"
                      className={classes.tabPanel}
                    >
                      <ChangePassword
                        toggle={handleChange}
                        close={handleClose}
                        emailStore={emailStore}
                      />
                    </TabPanel>
                  </Grid>
                </Grid>
              </Paper>
            </TabContext>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
