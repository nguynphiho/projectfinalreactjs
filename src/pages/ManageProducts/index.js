import React, { useEffect } from "react";
import {
  Button,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import ProductsTable from "./ProductsTable";
import { useNavigate } from "react-router-dom";
import { useInput } from "hooks/input.hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductAsync,
  filterProductRequest,
} from "redux/manageProduct/actions";
import { requestCategories } from "redux/manageProduct/category/actions";
import { requestStatuses } from "redux/manageProduct/productStatus/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "70px",
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
    fontSize: "40px",
    fontWeight: 700,
    fontFamily: "Poppins",
    color: "grey",
    textShadow: "1px 3px 5px rgba(0, 0, 0, 0.3)",
  },
  tableContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    border: "solid 1px grey",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "grey",
    marginBottom: 20,
  },
  selectContainer: {
    marginBottom: 10,
  },
  button: {
    padding: theme.spacing(1),
  },
  searchContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1, 0),
    width: "100%",
  },
  formControlSelectExport: {
    margin: theme.spacing(1, 0),
    width: "130px",
  },
}));

const breadCrumbsList = {
  list: [{ name: "Manage Products", path: "" }],
  active: "Product List",
};

const exportSelectItem = [
  { name: "*.csv", value: "csv" },
  { name: "*.excel", value: "excel" },
  { name: "*.pdf", value: "pdf" },
];

const voteSelectItem = [
  { name: "1 sao", value: 1 },
  { name: "2 sao", value: 2 },
  { name: "3 sao", value: 3 },
  { name: "4 sao", value: 4 },
  { name: "5 sao", value: 5 },
];

function ManageProducts() {
  const urlExport = "http://localhost:8080/api/test/products/export/";

  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    value: category,
    onChange: onChangeCategory,
    reset: resetCategory,
  } = useInput("");
  const {
    value: vote,
    onChange: onChangeVote,
    reset: resetVote,
  } = useInput("");
  const {
    value: status,
    onChange: onChangeStatus,
    reset: resetStatus,
  } = useInput("");
  const {
    value: search,
    onChange: onChangeSearch,
    reset: resetSearch,
  } = useInput("");
  const {
    value: exportType,
    onChange: onChangeExport,
    reset: resetExport,
  } = useInput("");

  const { fetching, products } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoryReducer);
  const { statuses } = useSelector((state) => state.statusReducer);

  useEffect(() => {
    dispatch(filterProductRequest(category, vote, status, search, []));
  }, [dispatch, category, vote, status, search]);

  useEffect(() => {
    dispatch(fetchAllProductAsync());
    dispatch(requestCategories());
    dispatch(requestStatuses());
  }, [dispatch]);

  const handleReset = () => {
    resetCategory();
    resetVote();
    resetStatus();
    resetSearch();
    resetExport();
  };

  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.mainTitle}>
          Products
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btn}
            onClick={() => navigate("/admin/manage-prods")}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <div className={classes.tableContainer}>
        <Typography className={classes.title}>Search & Filter</Typography>
        <Grid container spacing={4} className={classes.selectContainer}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <Select value={category} displayEmpty onChange={onChangeCategory}>
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                {!!categories &&
                  categories.length > 0 &&
                  categories.map((category) => (
                    <MenuItem key={category.id} value={category.title}>
                      {category.title}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <Select value={vote} displayEmpty onChange={onChangeVote}>
                <MenuItem value="">
                  <em>Select Vote</em>
                </MenuItem>
                {!!voteSelectItem &&
                  voteSelectItem.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <Select value={status} displayEmpty onChange={onChangeStatus}>
                <MenuItem value="">
                  <em>Select Status</em>
                </MenuItem>
                {!!statuses &&
                  Object.entries(statuses).map((item) => (
                    <MenuItem key={item[0]} value={item[0]}>
                      {item[1]}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          className={classes.searchContainer}
          alignItems="center"
          justifyContent="flex-end"
          spacing={3}
        >
          <Grid item>
            <Button
              variant="contained"
              onClick={handleReset}
              className={classes.button}
            >
              Reset filter
            </Button>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              placeholder="Search..."
              variant="outlined"
              size="small"
              value={search}
              onChange={onChangeSearch}
            />
          </Grid>
          <Grid item>
            <FormControl
              variant="outlined"
              className={classes.formControlSelectExport}
              size="small"
            >
              <Select value={exportType} displayEmpty onChange={onChangeExport}>
                <MenuItem value="">
                  <em>Export type</em>
                </MenuItem>
                {exportSelectItem.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.button}>
              <a href={urlExport + exportType}>Export</a>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => navigate("/admin/add-product")}
            >
              + Add new product
            </Button>
          </Grid>
        </Grid>
        <Divider />
        {fetching ? (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: 20 }}
          >
            <Grid item>
              <Typography>Loading Table....</Typography>
            </Grid>
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        ) : (
          products && <ProductsTable data={products} />
        )}
      </div>
    </div>
  );
}

export default ManageProducts;
