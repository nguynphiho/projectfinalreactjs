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
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useCheckbox } from "hooks/input.hooks";
import clsx from "clsx";

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
    margin: theme.spacing(2, 0)
  },
  disabled: {
    backgroundColor: '#3f51b5 !important',
  },
}));

const Login = ({ toggle }) => {
  const classes = useStyles();

  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const { value: rememberMe, onChange: onChangeRememberMe } = useCheckbox(false);
  const { value: showPassword, setValue: setShowPassword } = useCheckbox(false);
  const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);

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
    e.preventDefault();
    if (!account.username || !account.password) {
      console.log("Please input username or password.");
    } else {
      setSubmit(true);
      console.log(JSON.stringify(account));
      setAccount({ username: "", password: "" });
      console.log("Login successfull.");
    }
  };

  return (
    <Grid
      container
      direction="column" 
      className={classes.content}
    >
      <Grid item container direction="column" alignItems="center">
        <Avatar className={classes.avatar}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1" gutterBottom>
          Sign In
        </Typography>
      </Grid>
      <Grid item>
        <form noValidate>
          <OutlinedInput
            id="username"
            name="username"
            value={account.username}
            onChange={handleChangeInput}
            placeholder="Username"
						autoComplete="username"
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
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            fullWidth
            required
            margin="dense"
						autoComplete="current-password"
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            disabled={isSubmit}
            className={clsx(classes.submit, {[classes.disabled]: isSubmit})}
          >
            {isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Log In'}
          </Button>
        </form>
      </Grid>
      <Grid item container justifyContent="space-between">
        <Typography gutterBottom>
          <Link href="#">Forgot password</Link>
        </Typography>
        <Typography gutterBottom>
          Don&apos;t have an account? {' '}
          <Link href="#" onClick={(e) => toggle(e, "signup")}>
            Sign up
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
