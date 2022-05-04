import { Breadcrumbs, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles({
	label: {
		fontSize: "16px",
		color: "grey",
	},

	labelActive: {
		fontSize: "16px",
	},
});

function BreadcrumbsCustom({ breadCrumbsList }) {
	const classes = useStyles();
  
	return (
		<>
			<Breadcrumbs aria-label="breadcrumb">
				{breadCrumbsList.list && breadCrumbsList.list.map((item) => {
					return (
						<Link
							color="inherit"
							key={item.name}
							to={item.path}
							className={classes.label}
						>
							{item.name}
						</Link>
					);
				})}
				<Typography className={classes.labelActive} color="textPrimary">
					{breadCrumbsList.active}
				</Typography>
			</Breadcrumbs>
		</>
	);
}

BreadcrumbsCustom.propsTypes = {
	breadCrumbsList: PropTypes.object.isRequired,
};

export default BreadcrumbsCustom;
