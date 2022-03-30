import React, { useState } from "react";
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
// import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useCheckbox } from "../../hooks/input.hooks";
import { IconButton, InputAdornment, OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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
    margin: theme.spacing(2, 0)
  },
}));

export default function LoginAdmin() {
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
						fullWidth
						id="email"
            placeholder="Username"
						name="email"
						autoComplete="username"
						autoFocus
            margin="dense"
						value={account.email}
						onChange={handleChangeInput}
            className={classes.field}
					/>
					<OutlinedInput
						fullWidth
						name="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
						id="password"
            margin="dense"
						autoComplete="current-password"
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
								value="remember"
								color="primary"
							/>
						}
						label="Remember me"
					/>
					{/* {error && <Alert severity="error">{messErr}</Alert>} */}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={clsx(classes.submit, {
							[classes.disabled]: isSubmit,
						})}
						onClick={handleSubmit}
						disabled={isSubmit}
					>
						{isSubmit ? <CircularProgress size={24} color="secondary" /> : 'Log In'}
					</Button>
				</div>
			</div>
		</Container>
	);
}
