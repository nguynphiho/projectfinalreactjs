import {
  Button, Divider, FormControl, FormControlLabel,
  FormLabel, Grid, InputAdornment,
  makeStyles, Paper, Radio, RadioGroup, TextField,
} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import BreadcrumbsCustom from 'components/BreadcrumbsCustom';
import { useInput } from 'hooks/input.hooks';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  fetchAllUserAsync, roleFilter, searchFilter, statusFilter
} from 'redux/manageUser/action';
import { fetchingSelector, usersRemaining } from 'redux/manageUser/selector';
import UserTable from './UserTable';

const useStyles = makeStyles((theme) => ({
  container: {
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


const breadCrumbsList = {
  list: [
    { name: 'Manage Users', path: '/admin/manage-users' },
  ],
  active: 'List All Users'
}

const roles = [
  { value: 'ALL_ROLE', name: 'All Roles' },
  { value: 'ROLE_ADMIN', name: 'Admin' },
  { value: 'ROLE_USER', name: 'User' },
  { value: 'ROLE_EDITOR', name: 'Editor' },
  { value: 'ROLE_MARKETOR', name: 'Marketor' },
]

const status = [
  { value: 'allstatus', name: 'All Stutus' },
  { value: 'active', name: 'Active' },
  { value: 'inactive', name: 'In-Active' },
]

function ManageUser() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [roleRadioValue, setRoleRadioValue] = React.useState('ALL_ROLE');
  const [statusRadioValue, setStatusRadioValue] = React.useState('allstatus');
  const { value: searchText, onChange: onChangeSearchText } = useInput('');

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleNavigate = (uri) => {
    navigate(uri)
  }

  const handleChangeRadio = (event) => {
    const value = event.target.value
    if (value === 'ROLE_ADMIN' || value === 'ROLE_USER'
      || value === 'ROLE_EDITOR' || value === 'ROLE_MARKETOR' || value === 'ALL_ROLE') {
      setRoleRadioValue(value);
    }
    if (value === 'active' || value === 'inactive' || value === 'allstatus') {
      setStatusRadioValue(value)
    }
  };

  React.useEffect(() => {
    dispatch(searchFilter(searchText));
    dispatch(roleFilter(roleRadioValue));
    dispatch(statusFilter(statusRadioValue));
  }, [searchText, roleRadioValue, statusRadioValue, dispatch])

  React.useEffect(() => {
    dispatch(fetchAllUserAsync())
  }, [dispatch]);

  const users = useSelector(usersRemaining);
  const fetching = useSelector(fetchingSelector)

  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.mainTitle}>Users</Grid>
        <Grid item onClick={() => handleNavigate("/admin")}>
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
                onClick={handleOpenPopover}
              >
                Filter
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <div>
                  <Paper elevation={3} className={classes.paper}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Roles</FormLabel>
                      <RadioGroup aria-label="gender" name="gender1" value={roleRadioValue} onChange={handleChangeRadio}>
                        {
                          roles.map((item) => (
                            <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.name} />
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
                            <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.name} />
                          ))
                        }
                      </RadioGroup>
                    </FormControl>
                  </Paper>
                </div>
              </Popover>
              <TextField
                label="Search"
                value={searchText}
                onChange={onChangeSearchText}
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
          <UserTable data={users} fetching={fetching} />
        </div>
      </div>
    </div>

  )
}

export default ManageUser