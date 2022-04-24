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
import { VERIFY_CODE_RESET } from "redux/authentication/verifyCode/constants";
import requestVerifyCode from "redux/authentication/verifyCode/actions";

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

const VerifyCode = ({ toggle, close, emailStore }) => {
  const classes = useStyles();

  const { loading, success, error, messageError } = useSelector(
    (state) => state.verifyCodeReducer
  );
  const dispatch = useDispatch();

  const {
    value: code,
    onChange: onChangeCode,
    reset: resetCode,
  } = useInput("");
  const { value: isError, setValue: setIsError } = useCheckbox(false);
  const { value: message, setValue: setMessage } = useInput("");

  useEffect(() => {
    if (success) {
      resetCode();
      dispatch({ type: VERIFY_CODE_RESET });
      toggle(null, "change password");
    }
  }, [success]);

  const handleSubmit = (e) => {
    setIsError(false);
    if (!code || code.trim().length === 0) {
      setIsError(true);
      setMessage("Please input code.");
    } else {
      const data = {
        email: emailStore,
        code,
      };
      dispatch(requestVerifyCode(data));
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
      <Grid
        item
        container
        alignItems="center"
        spacing={2}
        className={classes.group}
      >
        <Grid item xs={8}>
          <CustomInput
            id="code"
            name="code"
            placeholder="Enter verify code"
            autoComplete="code"
            required
            autoFocus
            margin="dense"
            value={code}
            onChange={onChangeCode}
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

export default VerifyCode;
