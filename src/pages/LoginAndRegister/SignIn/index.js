import {
  Avatar,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import useInput, { useCheckbox } from "hooks/input.hooks";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import requestSigin from "redux/signin/actions";
import { Alert } from "@material-ui/lab";
import authenticationService from "services/authenticationService";
import { SIGNIN_RESET } from "redux/signin/constants";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
    width: "100%",
  },
  avatar: {
    backgroundColor: "#1bbd7e",
  },
  submit: {
    margin: theme.spacing(4, 0),
  },
  field: {
    margin: theme.spacing(2, 0),
  },
  disabled: {
    backgroundColor: "#3f51b5 !important",
  },
}));

const Login = ({ toggle, close }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { loading, user, error, messageError } = useSelector(
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
  const { value: isError, setValue: setIsError } = useCheckbox(false);
  const { value: message, setValue: setMessage } = useInput("");

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
      navigate("/");
    }
  }, [user]);

  const handleChangeInput = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
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

  const handleForgotPassword = () => {
    close("/forgot-password");
  }

  return (
    <Grid container direction="column" className={classes.content}>
      <Grid item container direction="column" alignItems="center">
        <Avatar className={classes.avatar}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1" gutterBottom>
          Sign In
        </Typography>
      </Grid>
      <Grid item>
        <OutlinedInput
          id="username"
          name="username"
          placeholder="Username"
          autoComplete="username"
          fullWidth
          required
          autoFocus
          margin="dense"
          value={account.username}
          onChange={handleChangeInput}
          className={classes.field}
        />
        <OutlinedInput
          id="password"
          name="password"
          placeholder="Password"
          fullWidth
          required
          margin="dense"
          autoComplete="current-password"
          value={account.password}
          onChange={handleChangeInput}
          type={showPassword ? "text" : "password"}
          className={classes.field}
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
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={onChangeRememberMe}
              color="primary"
            />
          }
          label="Remember me"
        />
        {isError
          ? isError && (
              <Alert severity="error">{message}</Alert>
            )
          : error && <Alert severity="error">{messageError}</Alert>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          disabled={loading}
          className={clsx(classes.submit, { [classes.disabled]: loading })}
        >
          {loading ? (
            <CircularProgress size={24} color="secondary" />
          ) : (
            "Log In"
          )}
        </Button>
      </Grid>
      <Grid item container justifyContent="space-between">
        <Typography gutterBottom>
          <Link to="/forgot-password" onClick={handleForgotPassword}>Forgot password</Link>
        </Typography>
        <Typography gutterBottom>
          Don&apos;t have an account?{" "}
          <Link to="#" onClick={(e) => toggle(e, "signup")}>
            Sign up
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
