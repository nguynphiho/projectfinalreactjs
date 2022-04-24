import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import useInput, { useCheckbox } from "hooks/input.hooks";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { CHANGE_PASSWORD_RESET } from "redux/authentication/changePassword/constants";
import requestChangePassword from "redux/authentication/changePassword/actions";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
    width: "100%",
  },
  avatar: {
    backgroundColor: "#1bbd7e",
    margin: theme.spacing(2, 0),
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
  ".PrivateNotchedOutline-root-112": {
    top: 0,
  },
}));

const ChangePassword = ({ close, emailStore }) => {
  const classes = useStyles();

  const { loading, success, error, messageError } = useSelector(
    (state) => state.changePasswordReducer
  );
  const dispatch = useDispatch();

  const {
    value: password,
    onChange: onChangePassword,
    reset: resetPassword,
  } = useInput("");

  const {
    value: confirmPassword,
    onChange: onChangeConfirmPassword,
    reset: resetConfirmPassword,
  } = useInput("");

  const { value: showPassword1, setValue: setShowPassword1 } =
    useCheckbox(false);
  const { value: showPassword2, setValue: setShowPassword2 } =
    useCheckbox(false);
  const { value: isError, setValue: setIsError } = useCheckbox(false);
  const { value: message, setValue: setMessage } = useInput("");

  useEffect(() => {
    if (success) {
      resetPassword();
      resetConfirmPassword();
      dispatch({ type: CHANGE_PASSWORD_RESET });
      close("/login");
    }
  }, [success]);

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    setIsError(false);
    if (
      !password ||
      !confirmPassword ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0
    ) {
      setIsError(true);
      setMessage("Please input code.");
    }
    if (password !== confirmPassword) {
      setIsError(true);
      setMessage("Password not match.");
    } else {
      const data = {
        email: emailStore,
        password,
        confirmPassword,
      };
      dispatch(requestChangePassword(data));
    }
  };

  return (
    <Grid container direction="column" className={classes.content}>
      <Grid item container direction="column" alignItems="center">
        <Avatar className={classes.avatar}>
          <EmailOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1" gutterBottom>
          Enter verify code we sent to
        </Typography>
        <Typography variant="h6" component="h2" color="primary" gutterBottom>
          {emailStore}
        </Typography>
      </Grid>
      <Grid item>
        <OutlinedInput
          id="password"
          name="password"
          placeholder="Enter password"
          fullWidth
          required
          margin="dense"
          autoComplete="password"
          value={password}
          onChange={onChangePassword}
          type={showPassword1 ? "text" : "password"}
          className={classes.field}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword1}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword1 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <OutlinedInput
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Enter confirm password"
          fullWidth
          required
          margin="dense"
          autoComplete="current-password"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          type={showPassword2 ? "text" : "password"}
          className={classes.field}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword2}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword2 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {isError
          ? isError && <Alert severity="error">{message}</Alert>
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
          {loading ? <CircularProgress size={24} color="secondary" /> : "Send"}
        </Button>
      </Grid>
      <Typography>
        <Link to="#" onClick={() => close("/login")}>
          Sign in
        </Link>
      </Typography>
    </Grid>
  );
};

export default ChangePassword;
