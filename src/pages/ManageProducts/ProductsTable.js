import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  Divider,
  Grid,
  makeStyles,
  Popover,
  Typography,
} from "@material-ui/core";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllProductAsync, getProductByIdAsync } from "redux/manageProduct/actions";
import productService from "services/productService";
import removeIcon from "assets/icons/removeIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "rgba(24, 176, 266, 0.2)",
    },
  },
  chipStatus: {
    color: "green",
    border: "solid 2px green",
  },
  chipVote: {
    fontSize: 16,
    fontWeight: 700,
    color: "#d8a91c",
    border: "solid 2px yellow",
  },
  showmore: {
    width: 100,
    height: 24,
    fontfamily: "Inter",
    fontSize: 12,
    fontWeight: 700,
    textAlign: "left",
    color: "#6E6893",
    textTransform: "capitalize",
    padding: theme.spacing(1),
    justifyContent: "center",
  },
  viewMoreItem: {
    width: "134px",
    padding: theme.spacing(0.5),
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F2F0F9",
      borderRadius: "4px",
    },
  },
}));

export default function ProductsTable({ data, fetching }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState('');
  const [fetchingDelete, setFetchingDelete] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState();

  const rows = data;

  const handleToggleDialog = (id) => {
    setOpen(!open)
    setDeleteId(id)
  };

  const handleDeleteProduct = async (id) => {
    setFetchingDelete(true);
    setError(false);
    try {
      const response = await productService.deleteProduct(id);
      if (response && response.status >= 200 && response.status < 300) {
        setFetchingDelete(false);
      }
    } catch (error) {
      setFetchingDelete(false);
      setError(true);
      setErrMsg("Error!")
    }
    dispatch(fetchAllProductAsync());
    setOpen(!open)
  };

  const handleNavigate = (uri, id) => {
    dispatch(getProductByIdAsync(id));
    navigate(uri);
  };

  const columns = [
    { field: "name", headerName: "Product Name", width: 250 },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: false,
      renderCell: (params) => <Typography>$ {params.row.price}</Typography>,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      editable: false,
      renderCell: (params) => (
        <Typography>{params.row.category.name}</Typography>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      alignItems: "center",
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (
          <Chip
            icon={<DoneIcon style={{ color: "green" }} />}
            label={params.value}
            className={classes.chipStatus}
            variant="outlined"
          />
        );
      },
    },
    {
      field: "vote",
      headerName: "Vote",
      width: 100,
      editable: false,
      renderCell: (params) => {
        return (
          <Chip
            label={`${params.row.vote}`}
            className={classes.chipVote}
            variant="outlined"
            icon={<StarBorderIcon style={{ color: "#d8a91c" }} />}
          />
        );
      },
    },
    {
      field: "description",
      headerName: "Descriptions",
      width: 200,
      description: "This column has a value getter and is not sortable.",
      sortable: false,
    },
    {
      field: "options",
      headerName: "Options",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <PopupState variant="popover" popupId="demo-popup-popover">
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
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Box p={1}>
                  <Typography
                    className={classes.viewMoreItem}
                    onClick={() => handleNavigate(`/admin/manage-prods-details/edit/${params.row.id}`, params.row.id)}
                  >
                    Edit
                  </Typography>
                  <Typography
                    className={classes.viewMoreItem}
                    onClick={() =>
                      navigate(`/admin/manage-prods-details/${params.row.id}`)
                    }
                  >
                    View Product
                  </Typography>
                  <Divider light />
                  <Typography
                    className={classes.viewMoreItem}
                    color="secondary"
                    onClick={() => handleToggleDialog(params.row.id)}
                  >
                    Delete
                  </Typography>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
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
              > Do you want delete product?</Typography>
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
                    onClick={() => handleDeleteProduct(deleteId)}
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