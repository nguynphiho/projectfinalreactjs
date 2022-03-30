import React, { useState } from "react";
import { Grid, makeStyles, Modal, Paper, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Login from "./SignIn";
import Signup from "./SignUp";
import { useNavigate } from "react-router-dom";

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
}));

const LoginAndRegister = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const [tab, setTab] = useState("signin");
	const [open, setOpen] = React.useState(true);
	const handleClose = () => {
		setOpen(false);
		navigate("/");
	};

	const handleChange = (event, newTab) => {
		setTab(newTab);
	};

	return (
		<div className={classes.root}>
			<Modal open={open} onClose={handleClose}>
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
				</Grid>
			</Modal>
		</div>
	);
};

export default LoginAndRegister;
