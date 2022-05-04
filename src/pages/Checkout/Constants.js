import { makeStyles } from "@material-ui/core";
import styled from "styled-components/macro";
export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: 20,
	},
	bodybox: {
		backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/title-area-img-1.jpg")`,
		backgroundRepeat: "no-repeat",
		padding: "140px 0",
		textAlign: "center",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	loginbtn: {
		width: 100,
	},
	text: {
		fontSize: "3rem",
		"@media (min-width:900px)": {
			fontSize: "3rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "4.5rem",
		},
		fontWeight: 300,
		fontFamily: '"Roboto Condensed", sans-serif !important',
	},
	paper: {
		border: "0.1px solid #000222",
		padding: 37,
		marginBottom: 50,
	},
	papersm: {
		border: "0.1px solid #000222",
		padding: 10,
		marginBottom: 30,
	},
	input: {
		marginTop: 10,
		width: "100%",
	},
	top: {
		marginTop: 10,
	},
	button: {
		color: "#333",
		fontFamily: '"Roboto Condensed", sans-serif !important',
		fontSize: 16,
		fontWeight: 500,
	},
	menu: {
		borderBottom: "1px solid #333",
	},
}));


export const Container = styled.div`
	margin-top: 5vh;
	font-family: "Roboto Condensed", sans-serif;
	width: 100%;
`;

export const ApplyCoupon = styled.button`
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

export const LoginButton = styled.button`
	color: #fff;
	width: auto;
	border: 1px solid;
	padding: 10px 20px;
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

export const PlaceOrder = styled.button`
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