import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
  Box,
  Button,
  Divider,
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
import { deleteProduct } from "redux/manageProduct/action";

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
    color: "yellow",
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

export default function ProductsTable({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirect = (uri) => {
    navigate(uri);
  };
  const rows = data;

  const columns = [
    { field: "title", headerName: "Product Name", width: 250 },
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
        <Typography>{params.row.category.title}</Typography>
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
            icon={<StarBorderIcon style={{ color: "yellow" }} />}
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
                    onClick={() =>
                      handleRedirect(
                        `/admin/manage-prods-details/edit/${params.row.id}`
                      )
                    }
                  >
                    Edit
                  </Typography>
                  <Typography
                    className={classes.viewMoreItem}
                    onClick={() =>
                      handleRedirect(
                        `/admin/manage-prods-details/${params.row.id}`
                      )
                    }
                  >
                    View Product
                  </Typography>
                  <Divider light />
                  <Typography
                    className={classes.viewMoreItem}
                    color="secondary"
                    onClick={() => dispatch(deleteProduct(params.row.id))}
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
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        className={classes.root}
      />
    </div>
  );
}
