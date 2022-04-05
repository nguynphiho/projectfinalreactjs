import React, { useState,useEffect } from 'react'
import { makeStyles, Box, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components/macro';
import { TextField,  CircularProgress } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import useInput from 'hooks/input.hooks';
import { useCheckbox } from 'hooks/input.hooks';
import { useDispatch, useSelector } from "react-redux";
import requestSigin from "redux/signin/actions";
import authenticationService from "services/authenticationService";
import { SIGNIN_RESET } from "redux/signin/constants";

const useStyles = makeStyles((theme => ({
  root:{
    flexGrow: 1,
    marginTop: 20,
  },
  bodybox:{
    backgroundImage: `url("https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/title-area-img-1.jpg")`,
    backgroundRepeat: 'no-repeat',
    padding:'140px 0',
    textAlign:'center',
    height: '100%',
    justifyContent: 'center',
    alignItems:'center',
  },
  text: {
    fontSize: '3rem',
    '@media (min-width:900px)': {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4.5rem',
    },
    fontWeight: 300,
    fontFamily: '"Roboto Condensed", sans-serif !important',
  },
  paper: {
    border: '0.1px solid #000222',
    padding: 37,
    marginBottom: 50,
  },
  papersm: {
    border: '0.1px solid #000222',
    padding: 10,
    marginBottom: 30,
  },
  input: {
    marginTop: 10,
    width: '100%',
  },
  top: {
    marginTop: 10,
  },
  button: {
    color: '#333',
    fontFamily: '"Roboto Condensed", sans-serif !important',
    fontSize: 16,
    fontWeight: 500,
  },
  menu: {
    borderBottom: '1px solid #333'
  },
})));
export default function Checkout() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [open , setOpen] = useState(false);
  const {value: coupon , onChange: onChangeCoupon} = useInput('');
  const [messErr, setMessErr] = useState('');
  const { value: errorMess, setValue: setError } = useCheckbox(false);

  const { value: isError, setValue: setIsError } = useCheckbox(false);
  const { value: message, setValue: setMessage } = useInput("");

  const [loginOpen , setloginOpen] = useState(false);
  const handleChangeloginOpen = () => {
    setloginOpen(!loginOpen);
  };

  const submitCoupon = async (e) => {
    setError(false);
    if(!coupon || coupon.trim().length === 0)
    {
        setError(true);
        setOpen(!open);
        setMessErr('Please enter a coupon code.');
        e.preventDefault();
    }
    else
    {
        setError(true);
        setOpen(!open);
        setMessErr('Coupon "' +coupon+ '" does not exist!');
        e.preventDefault();
    }
  }

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeOpen = () => {
    setOpen(!open);
  };
  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const products = [
  {
    id: 1, name: "Assam Beta",qty: 2 ,price: 50,
  },
  {
    id: 2, name: "Bera Bera",qty: 2 ,price: 60,
  },
  {
    id: 3, name: "Gun powder",qty: 1 ,price: 90,
  },
]
const { loading,user, error, messageError } = useSelector(
    (state) => state.signinReducer
  );
  const dispatch = useDispatch();

  const userLocalStore = authenticationService.getUserRemember();

  const [account, setAccount] = useState({
    username: userLocalStore ? userLocalStore.username : "",
    password: userLocalStore ? userLocalStore.password : "",
  });

  const {
    value: rememberMe,
    onChange: onChangeRememberMe,
    reset: resetRememberMe,
  } = useCheckbox(false);

  const { value: showPassword, setValue: setShowPassword } = useCheckbox(false);

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
  }, [account.password, account.username, dispatch, rememberMe, resetRememberMe, user]);

  const handleChangeInput = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
  return (
    <Container>
        <Grid xs item container>
            <Grid xs={12} item container style={{ marginBottom : 30}}>
                <Grid xs={12} item style={{ maxHeight :  400 , height: '100%'}}>
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
            style={{ marginTop: 100}}
                >
                {isError
                    ? isError && (
                        <Grid container xs={10} item className={classes.paper} >
                            <Grid style={{ flexGrow: 1, padding: 10 }} xs container item justifyContent={"flex-start"}>
                                <span style={{ fontWeight: 700,fonrSize: 28,marginRight: 5}}>Error :</span>
                                {message}
                            </Grid>
                        </Grid>
                        )
                    : error && (
                        <Grid container xs={10} item className={classes.paper} >
                            <Grid style={{ flexGrow: 1, padding: 10 }} xs container item justifyContent={"flex-start"}>
                                <span style={{ fontWeight: 700,fonrSize: 28,marginRight: 5}}>Error :</span>
                                {messageError}
                            </Grid>
                        </Grid>
                        )
                }
                {
                    !user ?                 
                    (<Grid container xs={10} item className={classes.paper} >
                        <Grid style={{ flexGrow: 1, padding: 10 }} container item xs justifyContent={"flex-start"}>
                            Returning customer?
                        </Grid>
                        <Grid item container xs justifyContent={"flex-end"}>
                            <Button onClick={handleChangeloginOpen} value={loginOpen} variant="text" className={classes.button}>Click here to login</Button>
                        </Grid>
                    </Grid>)
                    : null
                }
                {
                    loginOpen && 
                    <Grid container xs={10} item style={{marginBottom: 50}}> 
                            <Grid container item>
                                <Typography>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</Typography>
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
                                    style={{ marginTop: 10}} 
                                    onClick={handleSubmitLogin}
                                    disabled={loading}
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
                }
                <Grid container xs={10} item className={classes.paper} >
                    <Grid style={{ flexGrow: 1, padding: 10 }} xs container item justifyContent={"flex-start"}>
                        Have a coupon?
                    </Grid>
                    <Grid item container xs justifyContent={"flex-end"}>
                        <Button variant="text" className={classes.button} onClick={handleChangeOpen} value={open}>Click here to enter your code</Button>
                    </Grid>
                </Grid>
                {
                    errorMess && 
                    (
                        <Grid container xs={10} item className={classes.paper} >
                            <Grid style={{ flexGrow: 1, padding: 10 }} xs container item justifyContent={"flex-start"}>
                                {messErr}
                            </Grid>
                        </Grid>
                    )
                }
                {open && 
                    (
                    <Grid container xs={10} item style={{marginBottom: 50}}> 
                            <Grid container item>
                            <form style={{ width: '100%'}} noValidate autoComplete="off">
                                    <Typography>If you have a coupon code, please apply it below.</Typography>
                                    <TextField className={classes.input} value={coupon} onChange={onChangeCoupon} placeholder="Coupon code" variant="outlined" />
                                    <ApplyCoupon style={{ marginTop: 10}} onClick={submitCoupon}>Apply Coupon</ApplyCoupon>
                            </form>
                            </Grid>
                    </Grid>
                    )
                }
                <Grid container xs={10} item spacing={3}>
                    <Grid xs={12} md={6} xl={6} item>
                        <Typography variant='h4' style={{ fontWeight: 300}}>BILLING DETAILS</Typography>
                        <Grid container item spacing={1} className={classes.top}>
                            <Grid xs={12} md={6} xl={6} item>
                                <Typography>First name *</Typography>
                                <TextField className={classes.input} variant="outlined" />
                            </Grid>
                            <Grid xs={12} md={6} xl={6} item>
                                <Typography>Last name *</Typography>
                                <TextField className={classes.input} variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid container item className={classes.top}>
                            <Typography>Company name (optional)</Typography>
                            <TextField className={classes.input} variant="outlined" />
                        </Grid>
                        <Grid container item className={classes.top}>
                            <Typography>Country / Region *</Typography>
                            <TextField disabled value="Vietnam" className={classes.input} variant="outlined" />
                        </Grid>
                        <Grid container item className={classes.top}>
                            <Typography>Street address *</Typography>
                            <TextField className={classes.input} variant="outlined" />
                        </Grid>
                        <Grid container item className={classes.top}>
                            <Typography>Postcode / ZIP (optional)</Typography>
                            <TextField className={classes.input} variant="outlined" />
                        </Grid>
                        <Grid container item className={classes.top}>
                            <Typography>Town / City *</Typography>
                            <TextField className={classes.input} variant="outlined" />
                        </Grid>
                        <Grid container item className={classes.top}>
                            <Typography>Phone *</Typography>
                            <TextField className={classes.input} variant="outlined" />
                        </Grid>
                        <Grid container item className={classes.top}>
                            <Typography>Email address *</Typography>
                            <TextField className={classes.input} variant="outlined" />
                        </Grid>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Create an account?"
                        />
                        {checked && 
                        (
                           <Grid xs={12} item>
                                <Grid xs={6} item className={classes.top}>
                                    <Typography>Create account password *</Typography>
                                    <FormControl className={clsx(classes.margin, classes.input)} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChangePassword('password')}
                                            endAdornment={(
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            )}
                                            labelWidth={70}
                                        />
                                    </FormControl>
                                </Grid>
                           </Grid>
                        )
                        }
                    </Grid>
                    <Grid xs={12} md={6} xl={6} item>
                        <Typography variant='h4' style={{ fontWeight: 300}}>ADDITIONAL INFORMATION</Typography>
                        <Grid container item className={classes.top} spacing={1}>
                            <Typography>Order notes (optional)</Typography>
                            <TextareaAutosize
                                className={classes.input}
                                maxRows={4}
                                style={{ height: 100, padding: 20}}
                                aria-label="maximum height"
                                placeholder="Notes about your order, e.g specials notes for delivery"
                                />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={10} item spacing={3} style={{ marginTop: 20 }}>
                    <Grid xs={12} item>
                        <Typography variant='h4' style={{ fontWeight: 300,marginBottom: 20}}>YOUR ORDER</Typography>
                        <Grid container item spacing={3} className={classes.menu}>
                            <Grid xs={8} item>
                                <Typography style={{ fontWeight: 700}}>Product</Typography>
                            </Grid>
                            <Grid xs={4} item>
                                <Typography style={{ fontWeight: 700}}>Subtotal</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    {products.map((product) =>
                    <Grid xs={12} item key={product.id}>
                        <Grid container item spacing={3} className={classes.menu}>
                            <Grid xs={8} item>
                                <span style={{ fontSize : 18}}>{product.name}</span>
                                <span style={{ fontWeight: 700, marginLeft: 10, fontSize: 18}}>x {product.qty}</span>
                            </Grid>
                            <Grid xs={4} item>
                                <span style={{ fontSize: 18}}>€{product.price * product.qty}.00</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    )}
                    <Grid xs={12} item>
                        <Grid container item spacing={3} className={classes.menu}>
                            <Grid xs={8} item>
                                <span style={{ fontSize : 18,fontWeight: 700}}>Subtotal</span>
                            </Grid>
                            <Grid xs={4} item>
                                <span style={{ fontSize: 18}}>€{products.reduce((total ,product)=>total+(product.qty*product.price),0)}.00</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} item>
                        <Grid container item spacing={3} className={classes.menu}>
                            <Grid xs={8} item>
                                <span style={{ fontSize : 18,fontWeight: 700}}>Total</span>
                            </Grid>
                            <Grid xs={4} item>
                                <span style={{ fontSize: 18,fontWeight: 700}}>€{products.reduce((total ,product)=>total+(product.qty*product.price),0)}.00</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} item className={classes.papersm} style={{ marginTop: 30}}>
                        <Grid style={{ flexGrow: 1, padding: 10 }} xs container item>
                        Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.
                        </Grid>
                    </Grid>
                    <PlaceOrder>Place Order</PlaceOrder>  
                </Grid>
            </Grid>
    </Container>
  )
}
const Container = styled.div`
  margin-top: 5vh;
  font-family: 'Roboto Condensed', sans-serif;
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
    letter-spacing: .08em;
    text-transform: uppercase;
    vertical-align: middle;
    fontFamily: '"Roboto Condensed", sans-serif !important';
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
    letter-spacing: .08em;
    text-transform: uppercase;
    vertical-align: middle;
    fontFamily: '"Roboto Condensed", sans-serif !important';
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
    letter-spacing: .08em;
    text-transform: uppercase;
    fontFamily: '"Roboto Condensed", sans-serif !important';
`;