import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Box, Button, Divider, makeStyles, Popover, Typography, Chip, Grid, CircularProgress, Dialog } from '@material-ui/core';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import removeIcon from "assets/icons/removeIcon.png";
import { userService } from 'services/userService';
import { fetchAllUserAsync, getUserByIdAsync } from 'redux/manageUser/action';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: 'rgba(24, 176, 266, 0.2)',
    }
  },

  showmore: {
    width: 100,
    height: 24,
    fontfamily: 'Inter',
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'left',
    color: '#6E6893',
    textTransform: 'capitalize',
    padding: theme.spacing(1),
    justifyContent: 'center',
  },

  viewMoreItem: {
    width: '134px',
    padding: theme.spacing(0.5),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F2F0F9',
      borderRadius: '4px',
    },
  },

  active: {
    width: 75,
    height: 20,
    borderRadius: 10,
    fontfamily: 'Inter',
    fontSize: 12,
    textTransform: 'capitalize',
    fontWeight: 500,
    textAlign: 'left',
    background: '#E6E6F2',
    color: 'green',
  },

  inactive: {
    width: 75,
    height: 20,
    borderRadius: 10,
    fontfamily: 'Inter',
    textTransform: 'capitalize',
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'left',
    background: '#F2F0F9',
    color: '#6E6893',
  },

}));

export default function ProductsTable({data, fetching}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState('');
  const [fetchingDelete, setFetchingDelete] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState();

  const handleRedirect = (uri, id) => {
    dispatch(getUserByIdAsync(id));
    navigate(uri)
  }

  const handleToggleDialog = (id) => {
    setOpen(!open)
    setDeleteId(id)
  };

  const handleDeleteUser = async (id) => {
    setFetchingDelete(true);
    setError(false);
    try {
      const response = await userService.deleteUser(id);
      if (response && response.status >= 200 && response.status < 300) {
        setFetchingDelete(false);
      }
    } catch (error) {
      setFetchingDelete(false);
      setError(true);
      setErrMsg("Error!")
    }
    dispatch(fetchAllUserAsync());
    setOpen(!open)
  };
  const rows = data;
   
  const columns = [
    { field: 'username', headerName: 'UserName', width: 100 },
    {
      field: 'fullname',
      headerName: 'fullName',
      width: 200,
      editable: false,
    },

    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: false,
    },

    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      editable: false,
      renderCell: (params) => (
        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Button
            className={params.row.status === 'active' ? classes.active : classes.inactive}
            startIcon={<FiberManualRecordIcon style={{ fontSize: 'small' }} />}
          >
            {params.row.status=== 'active' ? 'Active' : 'Inactive'}
          </Button>
          <Typography>Last Login: {new Date(params.row.lastlogin).toLocaleDateString()}</Typography>
        </Grid>
      ),
    },
    {
      field: 'role',
      headerName: 'Role', 
      alignItems: 'center',
      width: 150,
      editable: false,
    },

    {
      field: 'address',
      headerName: 'Address',
      alignItems: 'center',
      width: 250,
      editable: false,
    },

    {
      field: 'options',
      headerName: 'Options',
      width: 150,
      sortable: false,
      renderCell: (params) => <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button
              endIcon={<MoreHorizIcon />}
              className={classes.showmore}
              {...bindTrigger(popupState)}
            >
              View more
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Box p={1}>
                <Typography 
                  className={classes.viewMoreItem}
                  onClick={() => handleRedirect(`/admin/manage-user/edit/${params.row.id}`, params.row.id)}
                >
                  Edit
                </Typography>
                <Typography
                  className={classes.viewMoreItem}
                  onClick={() => handleRedirect(`/admin/manage-users/profile/${params.row.id}`, params.row.id )}
                >
                  View Profile
                </Typography>
                <Divider light />
                <Typography 
                  className={classes.viewMoreItem}
                  color="secondary"
                  onClick={()=> handleToggleDialog(params.row.id)}
                >
                  Delete
                </Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    },
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        className={classes.root}
        loading={fetching}
      />
      <Dialog onClose={handleToggleDialog} aria-labelledby="simple-dialog-title" open={open}>
        <div>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ width: 300, height: 250, borderRadius: 6 }}
          >
            <Grid item>
              <img src={removeIcon} alt="" />
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontSize: 18,
                  margin: '20px 0px',
                }}
              > Do you want delete user?</Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={handleToggleDialog}>Cancel</Button>
              {
                !fetchingDelete ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{
                      marginLeft: 20,
                      width: 100,
                      height: 40,
                    }}
                    onClick={() => handleDeleteUser(deleteId)}
                  >
                    Delete
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled
                    style={{
                      marginLeft: 20,
                      width: 100,
                      height: 40,
                    }}
                  >
                    <CircularProgress color="secondary" size={24} />
                  </Button>
                )
              }
            </Grid>
            <Grid item>
              {error && (
                <Typography style={{color: 'red'}}> {errMsg}</Typography>
              )}
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
