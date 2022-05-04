import React, { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import useInput from "hooks/input.hooks";
import { useCheckbox } from "hooks/input.hooks";
import { useDispatch, useSelector } from "react-redux";
import { cartClear } from "redux/cart/actions";
import { PlaceOrder, useStyles, Container } from "./Constants";
import NothingCard from "./NothingCard";
import { TextField } from "@material-ui/core";
import Coupon from "./Coupon";
import Login from "./Login";


export default function Checkout() {
	const classes = useStyles();

	const dispatch = useDispatch();

	// products cart
<<<<<<< HEAD
	const cartStore = useSelector((state) => state.cartReducer.carts);
	const [isEmpty, setIsEmpty] = useState(true);
=======
	const { carts } = useSelector((state) => state.cartReducer);
	const { value: isEmpty, setValue: setIsEmpty } = useCheckbox(true);

>>>>>>> master

	useEffect(() => {
		if (carts.length > 0) {
			setIsEmpty(false);
		} else {
			setIsEmpty(true);
		}
	}, [carts]);

<<<<<<< HEAD
	const subTotal = cartStore.reduce((prev, item) => {
=======
	const subTotal = carts.reduce((prev, item) => {
>>>>>>> master
		return prev + item.amount * item.price;
	}, 0);



	// checkout
	const { value: fname, onChange: onChangefName } = useInput("");
	const { value: lname, onChange: onChangelName } = useInput("");
	const { value: street, onChange: onChangeStreet } = useInput("");
	const { value: town_city, onChange: onChangeCity } = useInput("");
	const { value: phone, onChange: onChangePhone } = useInput("");
	const { value: email, onChange: onChangeEmail } = useInput("");
	const { value: messErrCheckOut, setValue: setIsErrorCouponCheckOut } = useInput("");
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
			setIsErrorCouponCheckOut("Please required fields.");
		} else {
			dispatch(cartClear());
		}
	};
  
	return (
		<Container>
			{isEmpty ? (
				<NothingCard />
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
						<Login />
						<Coupon />					
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
							{carts.map((product) => (
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