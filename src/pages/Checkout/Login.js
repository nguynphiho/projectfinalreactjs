import React, { useState, useEffect } from "react";
import { Grid, Button, Typography} from '@material-ui/core'
import { TextField, CircularProgress } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useInput from "hooks/input.hooks";
import requestSigin from "redux/authentication/signin/actions";
import authenticationService from "services/authenticationService";
import { SIGNIN_RESET } from "redux/authentication/signin/constants";
import { useCheckbox } from "hooks/input.hooks";
import { useSelector, useDispatch } from "react-redux";
import { useStyles, LoginButton } from "./Constants";

export default function Login() {
    const dispatch = useDispatch();
    const classes = useStyles();
	// login
	const { value: isErrorLogin, setValue: setisErrorLogin } = useCheckbox(false);
	const { value: message, setValue: setMessage } = useInput("");
    const { value: showPassword, setValue: setShowPassword } = useCheckbox(false);

	const [loginOpen, setloginOpen] = useState(false);
	const handleChangeloginOpen = () => {
		setloginOpen(!loginOpen);
	};


	// password
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// login
	const { loading, user, error, messageError } = useSelector(
		(state) => state.signinReducer
	);
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
		setisErrorLogin(false);
		if (
			!account.username ||
			!account.password ||
			account.username.trim().length === 0 ||
			account.password.trim().length === 0
		) {
			setisErrorLogin(true);
			setMessage("Please input username or password.");
		} else {
			dispatch(requestSigin(account));
		}
	};
  return (
    <>
    {isErrorLogin
        ? isErrorLogin && (
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
                <LoginButton
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
                </LoginButton>
            </Grid>
            <Typography>Lost your password?</Typography>
        </Grid>
    )}
    </>
  )
}
