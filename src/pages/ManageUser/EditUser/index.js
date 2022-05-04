import {
  Button, FormControl, Grid, makeStyles, MenuItem,
  TextField, Typography, CircularProgress, Snackbar
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import BreadcrumbsCustom from 'components/BreadcrumbsCustom';
import { useAvatar, useInput } from 'hooks/input.hooks';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserByIdAsync } from 'redux/manageUser/action';
import { selectedUser } from 'redux/manageUser/selector';
import { userService } from 'services/userService';

const useStyles = makeStyles((theme) => ({
  container: {
  },

  mainTitle: {
    marginTop: theme.spacing(2),
    fontSize: '40px',
    fontWeight: 700,
    fontFamily: 'Poppins',
    color: 'grey',
    textShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)'
  },

  btn: {
    fontWeight: 900,
    padding: '10px 30px',
    borderRadius: '15px',
    minWidth: '100px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      minWidth: '80px',
    },
  },

  formControl: {
    minWidth: '120px',
  },

  brand: {
    marginTop: '40px',
    color: '#1565D8',
    fontSize: '20px',
    fontWeight: '700',
  },

  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  frame: {
    width: '325px',
    height: '247px',
    borderRadius: '27px',
    '&>img': {
      width: '325px',
      height: '247px',
      objectFit: 'cover',
    },

    overflow: 'hidden',
  },

  buttonChangeAvatar: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },

  chooseFileBtn: {
    backgroundColor: '#1565D8',
    color: 'white',
    fontWeight: 700,
    padding: '10px 30px',
    borderRadius: '15px',
    position: 'relative',
    overflow: 'hidden',
  },

  fileInput: {
    transform: 'scale(3)',
    position: 'absolute',
    opacity: 0,
  },

  BtnControl: {
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  field: {
    margin: theme.spacing(2),
  },

}));

const breadCrumbsList = {
  list: [
    { name: 'Manage Users', path: '/admin/manage-users' },
  ],
  active: 'Add New User'
}

const roles = [
  { value: 'ROLE_ADMIN', name: 'Admin' },
  { value: 'ROLE_USER', name: 'User' },
  { value: 'ROLE_EDITOR', name: 'Editor' },
  { value: 'ROLE_MARKETOR', name: 'Marketor' },
]

function EditUser() {
  const params = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getUserByIdAsync(params.id))
  }, [dispatch, params.id])

  const user = useSelector(selectedUser)

  const { value: email, onChange: onChangeEmail } = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  const { value: repassword, onChange: onChangeRepassword } = useInput('');
  const { value: fullname, onChange: onChangeName } = useInput('');
  const { value: username, onChange: onChangeUsername } = useInput('');
  const { value: address, onChange: onChangeaAddress } = useInput('');
  const { value: role, onChange: onChangeRole } = useInput('');
  const { value: avatar, onChange: onChangeAvatar } = useAvatar('');

  const [error, setError] = useState(false);
  const [fetching, setFetching] = React.useState(false);
  const [messErr, setMessErr] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const submit = async () => {
    const userUpdate = {
      id: user.id,
      email: email ? email : user.email,
      password: password ? password : user.password,
      fullname: fullname ? fullname : user.fullname,
      username: username ? username : user.username,
      address: address ? address : user.address,
      role: role ? role : user.role,
      status: 'active',
      createdDate: user && user.createdDate,
      updatedDate: new Date(),
      avatar: avatar ? avatar : user.avatar,
    }
    setError(false);
    if (!userUpdate.email || !userUpdate.password || !userUpdate.fullname || !userUpdate.username
      || !userUpdate.address || !userUpdate.role) {
      setError(true);
      setMessErr('Please input all label');
      console.log(userUpdate);
      if (password !== repassword) {
        setError(true);
        setMessErr('Passwords do not match.');
      }
    } else {
      setFetching(true);
      setError(false);
      try {
        const response = await userService.updateUser(userUpdate);
        if (response && response.status >= 200 && response.status < 300) {
          setFetching(false);
          setOpen(true);
        }
      } catch (errors) {
        console.log(errors.Error)
        setError(true)
        setMessErr('Network error')
        setFetching(false);
      }
    }
  };

  const handleRedirect = (uri) => {
    navigate(uri);
  };

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item sm={12} md={12} lg={12}>
          <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
        </Grid>
        <Grid item sm={12} md={12} lg={12} className={classes.mainTitle}>Edit User</Grid>
        <Grid item container sm={12} md={8} lg={8}>
          <Grid item sm={12} md={6} lg={6}>
            <div className={classes.field}>
              <Typography gutterBottom>Email Address*</Typography>
              <TextField
                value={email ? email : user && user.email}
                onChange={onChangeEmail}
                size="small"
                type="text"
                autoComplete="current-password"
                variant="outlined"
                placeholder="Enter email address"
                fullWidth
              />
            </div>
            <div className={classes.field}>
              <Typography gutterBottom>Create password*</Typography>
              <TextField
                disabled={user && user.password}
                value={user && user.password}
                onChange={onChangePassword}
                size="small"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                placeholder="Password"
                fullWidth
              />
            </div>
            <div className={classes.field}>
              <Typography gutterBottom>Repeat password*</Typography>
              <TextField
                value={user && user.password}
                disabled={user && user.password}
                onChange={onChangeRepassword}
                size="small"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                placeholder="Reapeat Password"
                fullWidth
              />
            </div>
            <div className={classes.field}>
              <Typography gutterBottom>Role*</Typography>
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  size="small"
                  select
                  className={classes.textField}
                  value={role ? role : user && user.role}
                  onChange={onChangeRole}
                  InputLabelProps={{ shrink: false }}
                  margin="normal"
                  variant="outlined"
                >
                  {roles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </div>

          </Grid>
          <Grid item sm={12} md={6} ld={6}>
            <div className={classes.field}>
              <Typography gutterBottom>Full Name*</Typography>
              <TextField
                value={fullname ? fullname : user && user.fullname}
                onChange={onChangeName}
                size="small"
                type="text"
                autoComplete="current-password"
                variant="outlined"
                placeholder="Enter name"
                fullWidth
              />
            </div>
            <div className={classes.field}>
              <Typography gutterBottom>User name*</Typography>
              <TextField
                value={username ? username : user && user.username}
                onChange={onChangeUsername}
                size="small"
                type="text"
                autoComplete="current-password"
                variant="outlined"
                placeholder="Enter user name"
                fullWidth
              />
            </div>

            <div className={classes.field}>
              <Typography gutterBottom>Address*</Typography>
              <TextField
                value={address ? address : user && user.address}
                onChange={onChangeaAddress}
                size="small"
                type="text"
                autoComplete="current-password"
                variant="outlined"
                placeholder="Enter Address"
                fullWidth
              />
            </div>
          </Grid>
        </Grid>
        <Grid item sm={12} md={4} lg={4} className={classes.avatarContainer}>
          <div>
            <Typography
              style={{
                color: '#1565D8',
                fontSize: '25px',
                fontWeight: '700',
                alignSelf: 'flex-start',
              }}
              gutterBottom
            >
              Avatar
            </Typography>
            <div className={classes.frame}>
              <img src={!avatar && user ? user.avatar : avatar } alt="Avatar" />
            </div>
          </div>
          <div className={classes.buttonChangeAvatar}>
            <Button
              variant="contained"
              className={classes.chooseFileBtn}
            >
              Edit
              <input type="file" className={classes.fileInput} onChange={onChangeAvatar} />
            </Button>
          </div>
        </Grid>
        <Grid item sm={12} md={8} lg={8}>
          {error && <Alert severity="error">{messErr}</Alert>}
        </Grid>
        <Grid
          item
          container
          sm={12}
          md={12}
          lg={12}
          className={classes.BtnControl}
        >
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
              style={{ backgroundColor: '#EB5569' }}
              onClick={() => handleRedirect('/admin/manage-users')}
            >
              BACK
            </Button>
          </Grid>
          <Grid item>
            {
              !fetching ? (
                <Button
                  type="submit"
                  onClick={submit}
                  variant="contained"
                  className={classes.btn}
                  style={{ marginLeft: '50px', backgroundColor: '#1565D8', width: 100, }}
                >
                  update
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled
                  variant="contained"
                  className={classes.btn}
                  style={{ marginLeft: '50px', backgroundColor: '#1565D8', width: 100, }}
                >
                  <CircularProgress color="secondary" size={24}/>
                </Button>
              )
            }
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Update user successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default EditUser;
