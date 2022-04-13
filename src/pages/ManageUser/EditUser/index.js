import {
    Button, FormControl, Grid, makeStyles, MenuItem, TextField, Typography,
  } from '@material-ui/core';
  import Alert from '@material-ui/lab/Alert';
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useAvatar, useCheckbox, useInput } from 'hooks/input.hooks';
  import BreadcrumbsCustom from 'components/BreadcrumbsCustom';
  
  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: '60px',
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
    {
      label: 'Marketer',
      value: 'ROLE_MAKETER',
    },
    {
      label: 'Admin',
      value: 'ROLE_ADIM',
    },
    {
      label: 'Editor',
      value: 'ROLE_EDITOR',
    },
    {
      label: 'User',
      value: 'ROLE_USER',
    },
  ];
  
  function EditUser() {
    const classes = useStyles();
    const navigate = useNavigate();
  
    const { value: email, onChange: onChangeEmail } = useInput();
    const { value: password, onChange: onChangePassword } = useInput();
    const { value: repassword, onChange: onChangeRepassword } = useInput();
    const { value: name, onChange: onChangeName } = useInput();
    const { value: username, onChange: onChangeUsername } = useInput();
    const { value: address, onChange: onChangeaAddress } = useInput();
    const { value: role, onChange: onChangeRole } = useInput('ROLE_USER');
    const { value: avatar, onChange: onChangeAvatar } = useAvatar();
    const { value: errorMess, setValue: setError } = useCheckbox(false);
    const { value: isSubmit, setValue: setSubmit } = useCheckbox(false);
    const [messErr, setMessErr] = useState('');
  
    const submit = async () => {
      setError(false);
      if (!email || !password || !name || !username
         || !address || !role || !avatar) {
        setError(true);
        setMessErr('Please input all label');
        if (password !== repassword) {
          setError(true);
          setMessErr('Passwords do not match.');
        }
      } else {
        setSubmit(true);
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
                  value={email}
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
                  value={password}
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
                  value={repassword}
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
                    value={role}
                    onChange={onChangeRole}
                    InputLabelProps={{ shrink: false }}
                    margin="normal"
                    variant="outlined"
                  >
                    {roles.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </div>
  
            </Grid>
            <Grid item sm={12} md={6} ld={6}>
              <div className={classes.field}>
                <Typography gutterBottom>Name*</Typography>
                <TextField
                  value={name}
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
                  value={username}
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
                  value={address}
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
                <img src={avatar ? avatar.preview : null} alt="Avatar" />
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
            {errorMess && <Alert severity="error">{messErr}</Alert>}
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
              <Button
                type="submit"
                onClick={submit}
                disabled={isSubmit}
                variant="contained"
                className={classes.btn}
                style={{ marginLeft: '50px', backgroundColor: '#1565D8' }}
              >
                ADD
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default EditUser;
  