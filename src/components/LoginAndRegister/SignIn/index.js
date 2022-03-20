import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
    width: "100%",
  },
  avatar: {
    backgroundColor: "#1bbd7e",
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
}));

const Login = ({ toggle }) => {
  const classes = useStyles();
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(account));
    setAccount({ username: "", password: "" });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      className={classes.content}
    >
      <Grid item container direction="column" alignItems="center">
        <Avatar className={classes.avatar}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1">
          Sign In
        </Typography>
      </Grid>
      <Grid item>
        <form noValidate>
          <TextField
            label="Username"
            id="username"
            name="username"
            value={account.username}
            onChange={handleChange}
            placeholder="Username"
            fullWidth
            required
            autoFocus
            margin="dense"
          />
          <TextField
            type="password"
            label="Password"
            id="password"
            name="password"
            value={account.password}
            onChange={handleChange}
            placeholder="Password"
            fullWidth
            required
            margin="dense"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={handleRememberMe}
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
            className={classes.submit}
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </form>
      </Grid>
      <Grid item>
        <Typography>
          <Link href="#">Forgot password</Link>
        </Typography>
        <Typography>
          Do you have account?
          <Link href="#" onClick={(e) => toggle(e, "signup")}>
            Sign up
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
