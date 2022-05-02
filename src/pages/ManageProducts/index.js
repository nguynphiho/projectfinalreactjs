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
import { productRemaining } from "redux/manageProduct/selector";
import {
  fetchAllProductAsync,
  searchFilter,
  voteFilter,
  statusFilter,
  categoryFilter,
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
	addBtn: {
		padding: 7,
	},
	searchContainer: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},

	formControl: {
		margin: theme.spacing(1, 0),
		width: "100%",
	},
}));

const breadCrumbsList = {
	list: [{ name: "Manage Products", path: "" }],
	active: "Product List",
};

const exportSelectItem = [
	{ name: "*.csv", value: "csv" },
	{ name: "*.excel", value: "excel" },
	{ name: "*.pdf", value: "pfd" },
];

const voteSelectItem = [
	{ name: "1 star", value: 1 },
	{ name: "2 stars", value: 2 },
	{ name: "3 stars", value: 3 },
	{ name: "4 stars", value: 4 },
	{ name: "5 stars", value: 5 },
];

function ManageProducts() {
  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { value: category, setValue: setCategory } = useInput("");
  const { value: status, setValue: setStatus } = useInput("");
  const { value: vote, setValue: setVote } = useInput("");
  const { value: exportType, onChange: onChangeExport } = useInput("");

  const { fetching, product } = useSelector(
    (state) => state.productReducer
  );
  const { categories } = useSelector((state) => state.categoryReducer);
  const { statuses } = useSelector((state) => state.statusReducer);

  useEffect(() => {
    dispatch(fetchAllProductAsync());
    dispatch(requestCategories());
    dispatch(requestStatuses());
  }, [dispatch]);

	const products = useSelector(productRemaining);
	console.log({ products });

	useEffect(() => {
		dispatch(fetchAllProductAsync());
	}, []);

	const handleSearchFilter = (e) => {
		dispatch(searchFilter(e.target.value));
	};

	const handleVoteFilter = (e) => {
		setVote(e.target.value);
		dispatch(voteFilter(vote));
	};

  const handleCategoryFilter = (e) => {

  }

  const handleStatusFilter = (e) => {
    
  }
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
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <Select
                value={category}
                displayEmpty
                onChange={(e) => handleCategoryFilter(e)}
              >
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.title}>
                    {category.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <Select
                value={vote}
                displayEmpty
                onChange={(e) => handleVoteFilter(e)}
              >
                <MenuItem value="">
                  <em>Select Vote</em>
                </MenuItem>
                {voteSelectItem.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <Select
                value={status}
                displayEmpty
                onChange={(e) => handleStatusFilter(e)}
              >
                <MenuItem value="">
                  <em>Select Status</em>
                </MenuItem>
                {Object.entries(statuses).map((item) => (
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
            <TextField
              id="outlined-basic"
              placeholder="Search..."
              variant="outlined"
              size="small"
              onChange={(e) => handleSearchFilter(e)}
            />
          </Grid>
          <Grid item>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <Select
                value={exportType}
                displayEmpty
                onChange={onChangeExport}
                placeholder="Export"
              >
                <MenuItem value="">
                  <em>Export</em>
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
            <Button
              variant="contained"
              color="secondary"
              className={classes.addBtn}
              onClick={() => navigate("/admin/add-product")}
            >
              + Add new product
            </Button>
          </Grid>
        </Grid>
        <Divider />
        {fetching && (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: 20 }}
          >
            <Grid item>
              {" "}
              <Typography>Loding Table....</Typography>{" "}
            </Grid>
            <Grid item>
              {" "}
              <CircularProgress />{" "}
            </Grid>
          </Grid>
        )}
        {!fetching && products && <ProductsTable data={products} />}
      </div>
    </div>
  );
}

export default ManageProducts;
