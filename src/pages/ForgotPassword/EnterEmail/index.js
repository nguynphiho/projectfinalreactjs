import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  Link,
  makeStyles,
  OutlinedInput,
  styled,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import useInput, { useCheckbox } from "hooks/input.hooks";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import requestForgotPassword from "redux/authentication/forgotPassword/actions";
import { FORGOT_PASSWORD_RESET } from "redux/authentication/forgotPassword/constants";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
    width: "100%",
  },
  avatar: {
    backgroundColor: "#1bbd7e",
    margin: theme.spacing(2, 0),
  },
  group: {
    margin: theme.spacing(2, 0),
  },
  disabled: {
    backgroundColor: "#3f51b5 !important",
  },
  ".PrivateNotchedOutline-root-112": {
    top: 0,
  },
}));

const CustomInput = styled(OutlinedInput)({
  "& fieldset": {
    top: 0,
  },
});

const EnterEmail = ({ toggle, close, setEmailStore }) => {
  const classes = useStyles();

  const { loading, success, error, messageError } = useSelector(
    (state) => state.forgotPasswordReducer
  );
  const dispatch = useDispatch();

  const {
    value: email,
    onChange: onChangeEmail,
    reset: resetEmail,
  } = useInput("");
  const { value: isError, setValue: setIsError } = useCheckbox(false);
  const { value: message, setValue: setMessage } = useInput("");

  useEffect(() => {
    if (success) {
      resetEmail();
      dispatch({ type: FORGOT_PASSWORD_RESET });
      setEmailStore(email);
      toggle(null, "verify code");
    }
  }, [success]);

  const handleSubmit = (e) => {
    setIsError(false);
    if (!email || email.trim().length === 0) {
      setIsError(true);
      setMessage("Please input email.");
    } else {
      dispatch(requestForgotPassword(email));
    }
  };

  return (
    <Grid container direction="column" className={classes.content}>
      <Grid item container direction="column" alignItems="center">
        <Avatar className={classes.avatar}>
          <EmailOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1" gutterBottom>
          Please give us your email
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        spacing={2}
        className={classes.group}
      >
        <Grid item xs={8}>
          <CustomInput
            id="email"
            name="email"
            placeholder="Enter email"
            autoComplete="email"
            required
            autoFocus
            margin="dense"
            value={email}
            onChange={onChangeEmail}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={handleSubmit}
            disabled={loading}
            className={clsx({ [classes.disabled]: loading })}
          >
            {loading ? (
              <CircularProgress size={24} color="secondary" />
            ) : (
              "Send"
            )}
          </Button>
        </Grid>
        {isError
          ? isError && <Alert severity="error">{message}</Alert>
          : error && <Alert severity="error">{messageError}</Alert>}
      </Grid>
      <Typography>
        <Link to="#" onClick={() => close("/login")}>
          Sign in
        </Link>
      </Typography>
    </Grid>
  );
};

export default EnterEmail;
