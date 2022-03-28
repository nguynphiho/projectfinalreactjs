import {
  Avatar,
  Button,
  Checkbox,
  CircularProgress,
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
import clsx from "clsx";
import { useCheckbox } from "hooks/input.hooks";
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
  gender: {
    marginTop: theme.spacing(2)
  },
  term: {
    marginTop: theme.spacing(2)
  },
  disabled: {
    backgroundColor: '#3f51b5 !important',
  },
}));

const Signup = () => {
  const classes = useStyles();

  const [account, setAccount] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { value: term, onChange: onChangeTerm } = useCheckbox(false);
  const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);

  const handleChangeInput = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleChangeTerm = (e) => {
    onChangeTerm(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!account.email || !account.username || !account.password || !account.confirmPassword || !account.gender || !term) {
      console.log("Please enter all fields.");
    } else {
      setSubmit(true);
      console.log(JSON.stringify(account));
      setAccount({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
      });
      console.log("Signup successfull.");
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
          <PersonAddOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1" gutterBottom>
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
            onChange={handleChangeInput}
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
            onChange={handleChangeInput}
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
            onChange={handleChangeInput}
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
            onChange={handleChangeInput}
            placeholder="Confirm Password"
            fullWidth
            required
            margin="dense"
          />
          <FormControl component="fieldset" required className={classes.gender}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row name="gender" value={account.gender} onChange={handleChangeInput}>
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
              <Checkbox checked={term} onChange={handleChangeTerm} color="primary" />
            }
            label="I accept the terms add conditions."
            className={classes.term}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmit}
            className={clsx(classes.submit, {[classes.disabled]: isSubmit})}
            onClick={handleSubmit}
          >
            {isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Sign Up'} 
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
