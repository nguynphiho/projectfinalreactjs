import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import { useState } from "react";

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

const Signup = () => {
  const classes = useStyles();

  const [term, setTerm] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleTerm = (e) => {
    setTerm(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(account));
    setAccount({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
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
          <PersonAddOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1">
          Sign Up
        </Typography>
      </Grid>
      <Grid item>
        <form noValidate>
          <TextField
            label="Email"
            id="email"
            name="email"
            value={account.email}
            onChange={handleChange}
            placeholder="Enter email"
            fullWidth
            required
            autoFocus
            margin="dense"
            autoComplete="email"
          />
          <TextField
            label="Username"
            id="username"
            name="username"
            value={account.username}
            onChange={handleChange}
            placeholder="Enter username"
            fullWidth
            required
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
          <TextField
            type="password"
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            value={account.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            fullWidth
            required
            margin="dense"
          />
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row name="gender" value={account.gender} onChange={handleChange}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox checked={term} onChange={handleTerm} color="primary" />
            }
            label="I accept the terms add conditions."
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
