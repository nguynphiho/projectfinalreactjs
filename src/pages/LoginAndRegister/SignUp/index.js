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
import { Alert } from "@material-ui/lab";
import clsx from "clsx";
import useInput, { useCheckbox } from "hooks/input.hooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import requestSigup from "redux/signup/actions";
import { SIGNUP_RESET } from "redux/signup/constants";

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
    marginTop: theme.spacing(2),
  },
  term: {
    marginTop: theme.spacing(2),
  },
  disabled: {
    backgroundColor: "#3f51b5 !important",
  },
}));

const Signup = ({ toggle }) => {
  const classes = useStyles();

  const { loading, success, error, messageError } = useSelector(
    (state) => state.signupReducer
  );
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {
    value: term,
    onChange: onChangeTerm,
    reset: resetTerm,
  } = useCheckbox(false);
  const { value: isError, setValue: setIsError } = useCheckbox(false);
  const { value: message, setValue: setMessage } = useInput("");

  useEffect(() => {
    if (success) {
      setAccount({ username: "", password: "" });
      resetTerm(false);
      dispatch({ type: SIGNUP_RESET });
      toggle(null, "signin");
    }
  }, [success]);

  const handleChangeInput = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleChangeTerm = (e) => {
    onChangeTerm(e);
  };

  const handleSubmit = async () => {
    setIsError(false);
    if (
      !account.email ||
      !account.username ||
      !account.fullName ||
      !account.password ||
      !account.confirmPassword ||
      !account.gender ||
      !term ||
      account.email.trim().length === 0 ||
      account.username.trim().length === 0 ||
      account.fullName.trim().length === 0 ||
      account.password.trim().length === 0 ||
      account.confirmPassword.trim().length === 0
    ) {
      setIsError(true);
      setMessage("Please input all fields.");
    } else if (account.password !== account.confirmPassword) {
      setIsError(true);
      setMessage("Passwords do not match.");
    } else {
      dispatch(requestSigup(account));
    }
  };

  return (
    <Grid container direction="column" className={classes.content}>
      <Grid item container direction="column" alignItems="center">
        <Avatar className={classes.avatar}>
          <PersonAddOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1" gutterBottom>
          Sign Up
        </Typography>
      </Grid>
      <Grid item>
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
          label="FullName"
          id="fullName"
          name="fullName"
          value={account.fullName}
          onChange={handleChangeInput}
          placeholder="Enter full name"
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
          <RadioGroup
            row
            name="gender"
            value={account.gender}
            onChange={handleChangeInput}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={term}
              onChange={handleChangeTerm}
              color="primary"
            />
          }
          label="I accept the terms add conditions."
          className={classes.term}
        />
        {isError
          ? isError && <Alert severity="error">{message}</Alert>
          : error && <Alert severity="error">{messageError}</Alert>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          className={clsx(classes.submit, { [classes.disabled]: loading })}
          onClick={handleSubmit}
        >
          {loading ? (
            <CircularProgress size={24} color="secondary" />
          ) : (
            "Sign Up"
          )}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Signup;
