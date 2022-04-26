import React, { useState, useEffect } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components/macro";
import { TextField, CircularProgress } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import useInput from "hooks/input.hooks";
import { useCheckbox } from "hooks/input.hooks";
import { useDispatch, useSelector } from "react-redux";
import requestSigin from "redux/authentication/signin/actions";
import authenticationService from "services/authenticationService";
import { SIGNIN_RESET } from "redux/authentication/signin/constants";
import { useNavigate } from "react-router-dom";
import { cartClear } from "redux/cart/actions";

const useStyles = makeStyles((theme) => ({
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

export default function Checkout() {
	const classes = useStyles();
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);

	// coupon
	const { value: coupon, onChange: onChangeCoupon } = useInput("");
	const [messErr, setMessErr] = useState("");
	const { value: errorMess, setValue: setError } = useCheckbox(false);

	// login
	const { value: isError, setValue: setIsError } = useCheckbox(false);
	const { value: message, setValue: setMessage } = useInput("");

	const [loginOpen, setloginOpen] = useState(false);
	const handleChangeloginOpen = () => {
		setloginOpen(!loginOpen);
	};

	// submit coupon
	const submitCoupon = async (e) => {
		setError(false);
		if (!coupon || coupon.trim().length === 0) {
			setError(true);
			setOpen(!open);
			setMessErr("Please enter a coupon code.");
			e.preventDefault();
		} else {
			setError(true);
			setOpen(!open);
			setMessErr('Coupon "' + coupon + '" does not exist!');
			e.preventDefault();
		}
	};

	// Check open
	const handleChangeOpen = () => {
		setOpen(!open);
	};

	// password
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// login
	const { loading, user, error, messageError } = useSelector(
		(state) => state.signinReducer
	);
	const dispatch = useDispatch();

	// products cart
	const cartStore = useSelector((state) => state.cartReducer.carts);
	const [isEmpty, setIsEmpty] = useState(true);

	useEffect(() => {
		if (cartStore.length > 0) {
			setIsEmpty(false);
		} else {
			setIsEmpty(true);
		}
	}, [cartStore]);

	const subTotal = cartStore.reduce((prev, item) => {
		return prev + item.amount * item.price;
	}, 0);

	// remember password
	const userLocalStore = authenticationService.getUserRemember();

	// login
	const [account, setAccount] = useState({
		username: userLocalStore ? userLocalStore.username : "",
		password: userLocalStore ? userLocalStore.password : "",
	});

	// remember
	const {
		value: rememberMe,
		onChange: onChangeRememberMe,
		reset: resetRememberMe,
	} = useCheckbox(false);

	const { value: showPassword, setValue: setShowPassword } = useCheckbox(false);

	// login - remember
	useEffect(() => {
		if (!!user) {
			authenticationService.updateUser(user);
			authenticationService.updateUserRemember(
				rememberMe
					? {
							username: account.username,
							password: account.password,
					  }
					: null
			);
			setAccount({ username: "", password: "" });
			resetRememberMe(false);
			dispatch({ type: SIGNIN_RESET });
		}
	}, [
		account.password,
		account.username,
		dispatch,
		rememberMe,
		resetRememberMe,
		user,
	]);

	const handleChangeInput = (e) => {
		setAccount({ ...account, [e.target.name]: e.target.value });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	// submit login
	const handleSubmitLogin = (e) => {
		setIsError(false);
		if (
			!account.username ||
			!account.password ||
			account.username.trim().length === 0 ||
			account.password.trim().length === 0
		) {
			setIsError(true);
			setMessage("Please input username or password.");
		} else {
			dispatch(requestSigin(account));
		}
	};

	// checkout
	const { value: fname, onChange: onChangefName } = useInput("");
	const { value: lname, onChange: onChangelName } = useInput("");
	const { value: street, onChange: onChangeStreet } = useInput("");
	const { value: town_city, onChange: onChangeCity } = useInput("");
	const { value: phone, onChange: onChangePhone } = useInput("");
	const { value: email, onChange: onChangeEmail } = useInput("");
	const { value: messErrCheckOut, setValue: setMessErrCheckOut } = useInput("");
	const { value: errorCheckOut, setValue: setErrorCheckOut } =
		useCheckbox(false);

	// submit checkout
	const handleSubmitPlaceOrder = (e) => {
		setErrorCheckOut(false);
		if (
			!fname ||
			!lname ||
			!street ||
			!town_city ||
			!phone ||
			!email ||
			fname.trim().length === 0 ||
			street.trim().length === 0 ||
			town_city.trim().length === 0 ||
			phone.trim().length === 0 ||
			lname.trim().length === 0 ||
			email.trim().length === 0
		) {
			setErrorCheckOut(true);
			setMessErrCheckOut("Please required fields.");
		} else {
			dispatch(cartClear());
		}
	};
  
	return (
		<Container>
			{isEmpty ? (
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					style={{ marginTop: 100 }}
				>
					<Grid container xs={10} item className={classes.paper}>
						<Grid style={{ flexGrow: 1, padding: 10 }} xs container item>
							<span style={{ fontWeight: 300 }}>
								Checkout is not available whilst your cart is empty.
							</span>
						</Grid>
					</Grid>
					<Grid container xs={10} item className={classes.paper}>
						<Grid
							style={{ flexGrow: 1, padding: 10 }}
							xs
							container
							item
							justifyContent="center"
						>
							<Typography variant="h5">
								Your cart is currently empty.
							</Typography>
						</Grid>
					</Grid>
					<Grid
						style={{ flexGrow: 1 }}
						xs
						container
						item
						justifyContent="center"
					>
						<PlaceOrder onClick={() => navigate("/products")}>
							RETURN TO SHOP
						</PlaceOrder>
					</Grid>
				</Grid>
			) : (
				<>
					<Grid xs item container>
						<Grid xs={12} item container style={{ marginBottom: 30 }}>
							<Grid xs={12} item style={{ maxHeight: 400, height: "100%" }}>
								<Box className={classes.bodybox}>
									<Typography className={classes.text}>CHECK OUT</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justifyContent="center"
						style={{ marginTop: 100 }}
					>
						{isError
							? isError && (
									<Grid container xs={10} item className={classes.paper}>
										<Grid
											style={{ flexGrow: 1, padding: 10 }}
											xs
											container
											item
											justifyContent={"flex-start"}
										>
											<span
												style={{
													fontWeight: 700,
													fonrSize: 28,
													marginRight: 5,
												}}
											>
												Error :
											</span>
											{message}
										</Grid>
									</Grid>
							  )
							: error && (
									<Grid container xs={10} item className={classes.paper}>
										<Grid
											style={{ flexGrow: 1, padding: 10 }}
											xs
											container
											item
											justifyContent={"flex-start"}
										>
											<span
												style={{
													fontWeight: 700,
													fonrSize: 28,
													marginRight: 5,
												}}
											>
												Error :
											</span>
											{messageError}
										</Grid>
									</Grid>
							  )}
						{!user ? (
							<Grid container xs={10} item className={classes.paper}>
								<Grid
									style={{ flexGrow: 1, padding: 10 }}
									container
									item
									xs
									justifyContent={"flex-start"}
								>
									Returning customer?
								</Grid>
								<Grid item container xs justifyContent={"flex-end"}>
									<Button
										onClick={handleChangeloginOpen}
										value={loginOpen}
										variant="text"
										className={classes.button}
									>
										Click here to login
									</Button>
								</Grid>
							</Grid>
						) : null}
						{loginOpen && (
							<Grid container xs={10} item style={{ marginBottom: 50 }}>
								<Grid container item>
									<Typography>
										If you have shopped with us before, please enter your
										details below. If you are a new customer, please proceed to
										the Billing section.
									</Typography>
									<Grid xs={12} item>
										<Typography>Username or email *</Typography>
										<TextField
											onChange={handleChangeInput}
											value={account.username}
											className={classes.input}
											variant="outlined"
											id="username"
											name="username"
										/>
									</Grid>
									<Grid xs={12} item>
										<Typography>Password *</Typography>
										<OutlinedInput
											value={account.password}
											onChange={handleChangeInput}
											type={showPassword ? "text" : "password"}
											className={classes.input}
											id="password"
											name="password"
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={toggleShowPassword}
														onMouseDown={handleMouseDownPassword}
														edge="end"
													>
														{showPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											}
										/>
									</Grid>
									<FormControlLabel
										control={
											<Checkbox
												checked={rememberMe}
												name="checkedB"
												color="primary"
												onChange={onChangeRememberMe}
											/>
										}
										label="Remember me"
									/>
									<Login
										style={{ marginTop: 10 }}
										onClick={handleSubmitLogin}
										disabled={loading}
										className={classes.loginbtn}
									>
										{loading ? (
											<CircularProgress size={24} color="secondary" />
										) : (
											"Log In"
										)}
									</Login>
								</Grid>
								<Typography>Lost your password?</Typography>
							</Grid>
						)}
						<Grid container xs={10} item className={classes.paper}>
							<Grid
								style={{ flexGrow: 1, padding: 10 }}
								xs
								container
								item
								justifyContent={"flex-start"}
							>
								Have a coupon?
							</Grid>
							<Grid item container xs justifyContent={"flex-end"}>
								<Button
									variant="text"
									className={classes.button}
									onClick={handleChangeOpen}
									value={open}
								>
									Click here to enter your code
								</Button>
							</Grid>
						</Grid>
						{errorMess && (
							<Grid container xs={10} item className={classes.paper}>
								<Grid
									style={{ flexGrow: 1, padding: 10 }}
									xs
									container
									item
									justifyContent={"flex-start"}
								>
									{messErr}
								</Grid>
							</Grid>
						)}
						{open && (
							<Grid container xs={10} item style={{ marginBottom: 50 }}>
								<Grid container item>
									<form style={{ width: "100%" }} noValidate autoComplete="off">
										<Typography>
											If you have a coupon code, please apply it below.
										</Typography>
										<TextField
											className={classes.input}
											value={coupon}
											onChange={onChangeCoupon}
											placeholder="Coupon code"
											variant="outlined"
										/>
										<ApplyCoupon
											style={{ marginTop: 10 }}
											onClick={submitCoupon}
										>
											Apply Coupon
										</ApplyCoupon>
									</form>
								</Grid>
							</Grid>
						)}
						{errorCheckOut && (
							<Grid container xs={10} item className={classes.paper}>
								<Grid
									style={{ flexGrow: 1, padding: 10 }}
									xs
									container
									item
									justifyContent={"flex-start"}
								>
									<span
										style={{ fontWeight: 700, fonrSize: 28, marginRight: 5 }}
									>
										Error :
									</span>
									{messErrCheckOut}
								</Grid>
							</Grid>
						)}
						<Grid container xs={10} item spacing={3}>
							<Grid xs={12} md={6} xl={6} item>
								<Typography variant="h4" style={{ fontWeight: 300 }}>
									BILLING DETAILS
								</Typography>
								<Grid container item spacing={1} className={classes.top}>
									<Grid xs={12} md={6} xl={6} item>
										<Typography>First name *</Typography>
										<TextField
											className={classes.input}
											variant="outlined"
											value={fname}
											onChange={onChangefName}
										/>
									</Grid>
									<Grid xs={12} md={6} xl={6} item>
										<Typography>Last name *</Typography>
										<TextField
											className={classes.input}
											variant="outlined"
											value={lname}
											onChange={onChangelName}
										/>
									</Grid>
								</Grid>
								<Grid container item className={classes.top}>
									<Typography>Company name (optional)</Typography>
									<TextField className={classes.input} variant="outlined" />
								</Grid>
								<Grid container item className={classes.top}>
									<Typography>Country / Region *</Typography>
									<TextField
										disabled
										value="Vietnam"
										className={classes.input}
										variant="outlined"
									/>
								</Grid>
								<Grid container item className={classes.top}>
									<Typography>Street address *</Typography>
									<TextField
										className={classes.input}
										variant="outlined"
										value={street}
										onChange={onChangeStreet}
									/>
								</Grid>
								<Grid container item className={classes.top}>
									<Typography>Postcode / ZIP (optional)</Typography>
									<TextField className={classes.input} variant="outlined" />
								</Grid>
								<Grid container item className={classes.top}>
									<Typography>Town / City *</Typography>
									<TextField
										className={classes.input}
										variant="outlined"
										value={town_city}
										onChange={onChangeCity}
									/>
								</Grid>
								<Grid container item className={classes.top}>
									<Typography>Phone *</Typography>
									<TextField
										className={classes.input}
										variant="outlined"
										value={phone}
										onChange={onChangePhone}
									/>
								</Grid>
								<Grid container item className={classes.top}>
									<Typography>Email address *</Typography>
									<TextField
										className={classes.input}
										variant="outlined"
										value={email}
										onChange={onChangeEmail}
									/>
								</Grid>
							</Grid>
							<Grid xs={12} md={6} xl={6} item>
								<Typography variant="h4" style={{ fontWeight: 300 }}>
									ADDITIONAL INFORMATION
								</Typography>
								<Grid container item className={classes.top} spacing={1}>
									<Typography>Order notes (optional)</Typography>
									<TextareaAutosize
										className={classes.input}
										maxRows={4}
										style={{ height: 100, padding: 20 }}
										aria-label="maximum height"
										placeholder="Notes about your order, e.g specials notes for delivery"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid container xs={10} item spacing={3} style={{ marginTop: 20 }}>
							<Grid xs={12} item>
								<Typography
									variant="h4"
									style={{ fontWeight: 300, marginBottom: 20 }}
								>
									YOUR ORDER
								</Typography>
								<Grid container item spacing={3} className={classes.menu}>
									<Grid xs={8} item>
										<Typography style={{ fontWeight: 700 }}>Product</Typography>
									</Grid>
									<Grid xs={4} item>
										<Typography style={{ fontWeight: 700 }}>
											Subtotal
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							{cartStore.map((product) => (
								<Grid xs={12} item key={product.id}>
									<Grid container item spacing={3} className={classes.menu}>
										<Grid xs={8} item>
											<span style={{ fontSize: 18 }}>{product.name}</span>
											<span
												style={{
													fontWeight: 700,
													marginLeft: 10,
													fontSize: 18,
												}}
											>
												x {product.amount}
											</span>
										</Grid>
										<Grid xs={4} item>
											<span style={{ fontSize: 18 }}>
												€{Math.round(product.amount * product.price)}
											</span>
										</Grid>
									</Grid>
								</Grid>
							))}
							<Grid xs={12} item>
								<Grid container item spacing={3} className={classes.menu}>
									<Grid xs={8} item>
										<span style={{ fontSize: 18, fontWeight: 700 }}>
											Subtotal
										</span>
									</Grid>
									<Grid xs={4} item>
										<span style={{ fontSize: 18 }}>
											€{Math.round(subTotal)}
										</span>
									</Grid>
								</Grid>
							</Grid>
							<Grid xs={12} item>
								<Grid container item spacing={3} className={classes.menu}>
									<Grid xs={8} item>
										<span style={{ fontSize: 18, fontWeight: 700 }}>Total</span>
									</Grid>
									<Grid xs={4} item>
										<span style={{ fontSize: 18, fontWeight: 700 }}>
											€{Math.round(subTotal)}
										</span>
									</Grid>
								</Grid>
							</Grid>
							<PlaceOrder
								style={{ marginTop: 30 }}
								onClick={handleSubmitPlaceOrder}
							>
								Place Order
							</PlaceOrder>
						</Grid>
					</Grid>
				</>
			)}
		</Container>
	);
}
const Container = styled.div`
	margin-top: 5vh;
	font-family: "Roboto Condensed", sans-serif;
	width: 100%;
`;

const ApplyCoupon = styled.button`
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

const Login = styled.button`
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

const PlaceOrder = styled.button`
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
