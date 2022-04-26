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
import { cartClear, cartFetchRequest } from "redux/manageCart/actions";
import { userProfileRequest } from "redux/userProfile/actions";

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

  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.userProfileReducer);
  const { carts, totalCost } = useSelector((state) => state.cartReducer);

  const user = authenticationService.currentUserValue;

  const {
    value: fullName,
    onChange: onChangeFullName,
    setValue: setFullName,
  } = useInput(userProfile ? userProfile.fullName : "");
  const {
    value: street,
    onChange: onChangeStreet,
    setValue: setStreet,
  } = useInput("");
  const {
    value: town_city,
    onChange: onChangeCity,
    setValue: setCity,
  } = useInput("");
  const {
    value: phone,
    onChange: onChangePhone,
    setValue: setPhone,
  } = useInput("");
  const {
    value: email,
    onChange: onChangeEmail,
    setValue: setEmail,
  } = useInput("");
  const { value: code, onChange: onChangeCode } = useInput("");
  const { value: note, onChange: onChangeNote } = useInput("");
  const { value: messErrCheckOut, setValue: setMessErrCheckOut } = useInput("");
  const { value: errorCheckout, setValue: setErrorCheckout } =
    useCheckbox(false);

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { path: "/checkout" } });
    } else {
      dispatch(cartFetchRequest());
      dispatch(userProfileRequest());
    }
  }, [user, navigate, dispatch]);

  useEffect(() => {
    if (!!userProfile) {
      setFullName(userProfile.fullName);
      setStreet(userProfile.address);
      setCity(userProfile.city);
      setPhone(userProfile.phoneNumber);
      setEmail(userProfile.email);
    }
  }, [userProfile]);

  const handleSubmitPlaceOrder = (e) => {
    setErrorCheckout(false);
    if (
      !fullName ||
      !street ||
      !town_city ||
      !phone ||
      !email ||
      fullName.trim().length === 0 ||
      street.trim().length === 0 ||
      town_city.trim().length === 0 ||
      phone.trim().length === 0 ||
      email.trim().length === 0
    ) {
      setErrorCheckout(true);
      setMessErrCheckOut("Please required fields.");
    } else {
      dispatch(cartClear());
    }
  };

  return (
    <Container>
      {!!carts && carts.length === 0 ? (
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
            {errorCheckout && (
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
                <Grid container item className={classes.top}>
                  <Typography>Full name *</Typography>
                  <TextField
                    className={classes.input}
                    variant="outlined"
                    value={fullName}
                    onChange={onChangeFullName}
                    placeholder="Full name"
                  />
                </Grid>
                <Grid container item className={classes.top}>
                  <Typography>Country *</Typography>
                  <TextField
                    disabled
                    value="Vietnam"
                    className={classes.input}
                    variant="outlined"
                    placeholder="Country"
                  />
                </Grid>
                <Grid container item className={classes.top}>
                  <Typography>Street address *</Typography>
                  <TextField
                    className={classes.input}
                    variant="outlined"
                    value={street}
                    onChange={onChangeStreet}
                    placeholder="Street"
                  />
                </Grid>
                <Grid container item className={classes.top}>
                  <Typography>Postcode / ZIP</Typography>
                  <TextField
                    className={classes.input}
                    variant="outlined"
                    value={code}
                    onChange={onChangeCode}
                    placeholder="Code"
                  />
                </Grid>
                <Grid container item className={classes.top}>
                  <Typography>Town / City *</Typography>
                  <TextField
                    className={classes.input}
                    variant="outlined"
                    value={town_city}
                    onChange={onChangeCity}
                    placeholder="City"
                  />
                </Grid>
                <Grid container item className={classes.top}>
                  <Typography>Phone *</Typography>
                  <TextField
                    className={classes.input}
                    variant="outlined"
                    value={phone}
                    onChange={onChangePhone}
                    placeholder="Phone"
                  />
                </Grid>
                <Grid container item className={classes.top}>
                  <Typography>Email address *</Typography>
                  <TextField
                    className={classes.input}
                    variant="outlined"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="Email"
                  />
                </Grid>
              </Grid>
              <Grid xs={12} md={6} xl={6} item>
                <Typography variant="h4" style={{ fontWeight: 300 }}>
                  ADDITIONAL INFORMATION
                </Typography>
                <Grid container item className={classes.top} spacing={1}>
                  <Typography>Order notes</Typography>
                  <TextareaAutosize
                    className={classes.input}
                    maxRows={4}
                    style={{ height: 100, padding: 20 }}
                    aria-label="maximum height"
                    placeholder="Notes about your order, e.g specials notes for delivery"
                    value={note}
                    onChange={onChangeNote}
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
              {!!carts &&
                carts.map((cart) => (
                  <Grid xs={12} item key={cart.id}>
                    <Grid container item spacing={3} className={classes.menu}>
                      <Grid xs={8} item>
                        <span style={{ fontSize: 18 }}>
                          {cart.product.title}
                        </span>
                        <span
                          style={{
                            fontWeight: 700,
                            marginLeft: 10,
                            fontSize: 18,
                          }}
                        >
                          x {cart.quantity}
                        </span>
                      </Grid>
                      <Grid xs={4} item>
                        <span style={{ fontSize: 18 }}>
                          $ {Math.round(cart.quantity * cart.product.price)}
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
                      $ {Math.round(totalCost)}
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
                      $ {Math.round(totalCost)}
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
  font-family: '"Roboto Condensed", sans-serif !important';
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
