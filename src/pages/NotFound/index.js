import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
	container: {
		// marginTop: '70px',
		width: "100%",
		height: "90vh",
		textAlign: "center",
		display: "flex",
		alignItems: "center",
	},
	text: {
		fontSize: "100px",
		fontWeight: "bold",
		color: "grey",
	},
});

function NotFound () {
	const classes = useStyles();

	const navigate = useNavigate();

	const goToDashBoard = () => {
		navigate("/admin/dashboard");
	};

	return (
		<div className={classes.container}>
			<Grid container>
				<Grid item sm={12} md={12} lg={12}>
					<Typography className={classes.text}>Page Not Found</Typography>
				</Grid>
				<Grid item sm={12} md={12} lg={12}>
					<Button
						variant="contained"
						color="secondary"
						classes={classes.text}
						onClick={goToDashBoard}
					>
						Go to DashBoard
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default NotFound;
