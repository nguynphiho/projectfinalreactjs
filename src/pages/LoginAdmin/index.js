import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useCheckbox } from "../../hooks/input.hooks";
import { IconButton, InputAdornment, OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import requestSigin from "redux/signin/actions";
import { Alert } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import authenticationService from "services/authenticationService";
import { SIGNIN_RESET } from "redux/signin/constants";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  disabled: {
    backgroundColor: "#3f51b5 !important",
  },
  field: {
    margin: theme.spacing(2, 0),
  },
}));

export default function LoginAdmin() {
  const classes = useStyles();
  const navigate = useNavigate();

  const { loading, user, error, messageError } = useSelector(
    (state) => state.signinReducer
  );
  const dispatch = useDispatch();

  const userLocalStore = authenticationService.getUserRemember();
  console.log(userLocalStore);

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

  const handleSubmit = () => {
    if (!account.username || !account.password) {
      setIsError(true);
    } else {
      setIsError(false);
      dispatch(requestSigin(account.username, account.password, rememberMe));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form}>
          <OutlinedInput
            id="username"
            placeholder="Username"
            name="username"
            autoComplete="username"
            fullWidth
            autoFocus
            required
            margin="dense"
            value={account.username}
            onChange={handleChangeInput}
            className={classes.field}
          />
          <OutlinedInput
            fullWidth
            name="password"
            placeholder="Password"
            id="password"
            margin="dense"
            required
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            value={account.password}
            onChange={handleChangeInput}
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
                <Alert severity="error">
                  Please input username or password.
                </Alert>
              )
            : error && <Alert severity="error">{messageError}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={clsx(classes.submit, {
              [classes.disabled]: loading,
            })}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="secondary" />
            ) : (
              "Log In"
            )}
          </Button>
        </div>
      </div>
    </Container>
  );
}
