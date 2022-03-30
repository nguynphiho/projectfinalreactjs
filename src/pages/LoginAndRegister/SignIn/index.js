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
import { useState } from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import useInput, { useCheckbox } from "hooks/input.hooks";
import clsx from "clsx";
import { Alert } from "@material-ui/lab";
import authenticationService from "services/authentication";
import { OK } from "constants";
import {
  BAD_REQUEST,
  UNAUTHORIZED,
  USER_REMEMBER_LOCAL_STORE,
} from "constants";
import { useNavigate } from "react-router-dom";

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

const Login = ({ toggle }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem(USER_REMEMBER_LOCAL_STORE));
  const [account, setAccount] = useState(
    user
      ? {
          username: user.username,
          password: user.password,
        }
      : {
          username: "",
          password: "",
        }
  );
  const { value: rememberMe, onChange: onChangeRememberMe } =
    useCheckbox(false);
  const { value: showPassword, setValue: setShowPassword } = useCheckbox(false);
  const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);
  const { value: error, setValue: setError } = useCheckbox(false);
  const { value: message, setValue: setMessage } = useInput("");

  const handleChangeInput = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeRememberMe = (e) => {
    onChangeRememberMe(e);
  };

  const handleSubmit = async () => {
    setError(false);
    if (
      !account.username ||
      !account.password ||
      account.username.trim().length === 0 ||
      account.password.trim().length === 0
    ) {
      setError(true);
      setMessage("Please input username or password.");
    } else {
      setSubmit(true);
      try {
        const result = await authenticationService.login(account);
        const { status, data } = result;
        if (status === OK) {
          authenticationService.updateUser(data);
          localStorage.setItem(
            USER_REMEMBER_LOCAL_STORE,
            rememberMe
              ? JSON.stringify({
                  username: account.username,
                  password: account.password,
                })
              : null
          );
          navigate("/");
        }
      } catch (error) {
        setError(true);
        if (
          error.response &&
          (error.response.status === BAD_REQUEST ||
            error.response.status === UNAUTHORIZED)
        ) {
          setMessage("Username or password is incorrect.");
        } else {
          setMessage(error.message);
        }
      }
      setSubmit(false);
    }
  };

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
          value={account.username}
          onChange={handleChangeInput}
          placeholder="Username"
          fullWidth
          required
          autoFocus
          margin="dense"
          className={classes.field}
        />
        <OutlinedInput
          id="password"
          name="password"
          value={account.password}
          onChange={handleChangeInput}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          fullWidth
          required
          margin="dense"
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
              onChange={handleChangeRememberMe}
              color="primary"
            />
          }
          label="Remember me"
        />
        {error && <Alert severity="error">{message}</Alert>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          disabled={isSubmit}
          className={clsx(classes.submit, { [classes.disabled]: isSubmit })}
        >
          {isSubmit ? (
            <CircularProgress size={24} color="secondary" />
          ) : (
            "Log In"
          )}
        </Button>
      </Grid>
      <Grid item container justifyContent="space-between">
        <Typography gutterBottom>
          <Link href="#">Forgot password</Link>
        </Typography>
        <Typography gutterBottom>
          Don&apos;t have an account?{" "}
          <Link href="#" onClick={(e) => toggle(e, "signup")}>
            Sign up
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
