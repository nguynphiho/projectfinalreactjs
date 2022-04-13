import React from 'react'
import {
  Button, Checkbox, Divider,
  Fade, FormControl, FormControlLabel,
  FormGroup, FormLabel, Grid, InputAdornment,
  makeStyles, Paper, Popper, Radio, RadioGroup, TextField
} from '@material-ui/core';
import BreadcrumbsCustom from 'components/BreadcrumbsCustom';
import { useNavigate } from 'react-router-dom';
import UserTable from './UserTable';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
  },

  btn: {
    borderRadius: 25,
    fontWeight: 700,
    padding: theme.spacing(1, 1),
    minWidth: 75,
    marginRight: theme.spacing.apply(2),
  },

  mainTitle: {
    marginTop: theme.spacing(2),
    fontSize: '40px',
    fontWeight: 700,
    fontFamily: 'Poppins',
    color: 'grey',
    textShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)'
  },

  tableContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    border: 'solid 1px grey',
    borderRadius: 10,
  },

  margin: {
    margin: theme.spacing(0, 1),
  },

  btnFilter: {
    padding: theme.spacing(1.5),
  },

  paper: {
    minWidth: 200,
    padding: theme.spacing(2),
    fontSize: 16,
  },

  table: {
    marginTop: theme.spacing(2),
  },

  formControl: {
    marinTop: theme.spacing(6),
  },

  filterContainer: {
  },

  btnCreateUser: {
    alignSelf: 'center',
    padding: theme.spacing(1)
  }

}));

const data = [
  {
    id: 1,
    username: "admin",
    fullname: "Admin",
    email: "admin@mail.com",
    status: "active",
    lastlogin: "10/02/2022",
    role: "ROLE_ADMIN",
    address: "38 Nguyen Nhu Do",
  },
  {
    id: 2,
    username: "admin",
    fullname: "Admin",
    email: "admin@mail.com",
    status: "active",
    lastlogin: "10/02/2022",
    role: "ROLE_ADMIN",
    address: "38 Nguyen Nhu Do",
  },
  {
    id: 3,
    username: "admin",
    fullname: "Admin",
    email: "admin@mail.com",
    status: "active",
    lastlogin: "10/02/2022",
    role: "ROLE_ADMIN",
    address: "38 Nguyen Nhu Do",
  },
  {
    id: 4,
    username: "admin",
    fullname: "Admin",
    email: "admin@mail.com",
    status: "active",
    lastlogin: "10/02/2022",
    role: "ROLE_ADMIN",
    address: "38 Nguyen Nhu Do",
  },
  {
    id: 5,
    username: "admin",
    fullname: "Admin",
    email: "admin@mail.com",
    status: "active",
    lastlogin: "10/02/2022",
    role: "ROLE_ADMIN",
    address: "38 Nguyen Nhu Do",
  },
  {
    id: 6,
    username: "admin",
    fullname: "Admin",
    email: "admin@mail.com",
    status: "active",
    lastlogin: "10/02/2022",
    role: "ROLE_ADMIN",
    address: "38 Nguyen Nhu Do",
  },
]

const breadCrumbsList = {
  list: [
    { name: 'Manage Users', path: '/admin/manage-users' },
  ],
  active: 'List All Users'
}

const roles = ['Admin', 'User', 'Editor']

const status = ['Active', 'Inactive']

function ManageUser() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [placement, setPlacement] = React.useState();
  const [openFilter, setOpenFilter] = React.useState(false);
  const [roleRadioValue, setRoleRadioValue] = React.useState('');
  const [statusRadioValue, setStatusRadioValue] = React.useState('');

  const handleChangeRadio = (event) => {
    const value = event.target.value
    if (value === 'Admin' || value === 'Editor' || value === 'User') {
      setRoleRadioValue(value);
    }
    if (value === 'Active' || value === 'Inactive') {
      setStatusRadioValue(value)
    }
  };


  const handleOpenFilterOptions = (newPlacement) => (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpenFilter((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleNavigate = (uri) => {
    navigate(uri)
  }

  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.mainTitle}>Users</Grid>
        <Grid item onClick={() => handleNavigate("/admin/manage-users/adduser")}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btn}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <div className={classes.tableContainer}>
        <Grid container>
          <Grid item container alignItems="center" justifyContent="space-between" className={classes.filterContainer}>
            <Grid item>
              <Button
                className={classes.btnFilter}
                variant='outlined'
                color="primary"
                startIcon={<FilterListIcon />}
                onClick={handleOpenFilterOptions('bottom-start')}
              >
                Filter
              </Button>
              <Popper open={openFilter} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <div>
                      <Paper elevation={3} className={classes.paper}>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Roles</FormLabel>
                          <RadioGroup aria-label="gender" name="gender1" value={roleRadioValue} onChange={handleChangeRadio}>
                            {
                              roles.map((item) => (
                                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                              ))
                            }
                          </RadioGroup>
                        </FormControl>
                        <Divider />
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Status</FormLabel>
                          <RadioGroup aria-label="gender" name="gender1" value={statusRadioValue} onChange={handleChangeRadio}>
                            {
                              status.map((item) => (
                                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                              ))
                            }
                          </RadioGroup>
                        </FormControl>
                      </Paper>
                    </div>
                  </Fade>
                )}
              </Popper>
              <TextField
                label="Search"
                className={classes.margin}
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item className={classes.btnCreateUser}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNavigate("/admin/manage-users/adduser")}
              >
                NEW
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.table}>
          <UserTable data={data} />
        </div>
      </div>
    </div>

  )
}

export default ManageUser