import {
	Button, Divider,
	FormControl,
	Grid,
	makeStyles,
	MenuItem,
	Select,
	TextField,
	Typography
} from "@material-ui/core";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import { useInput } from "hooks/input.hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	categoryFilter, fetchAllProductAsync,
	searchFilter, statusFilter, voteFilter
} from "redux/manageProduct/actions";
import {
	fetchingSelector,
	productRemaining
} from "redux/manageProduct/selector";
import ProductsTable from "./ProductsTable";

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

const categorySelectItem = [
	{name: 'Fresh Tea', value: 'freshtea'},
	{name: 'Honey Tea', value: 'honeytea'},
	{name: 'Black Tea', value: 'blacktea'},
	{name: 'Fruit Tea', value: 'fruittea'},
	{name: 'Milk Tea', value: 'milktea'},
];


const statusSelectItem = [
	{name: 'Best Seller', value: 'bestseller'},
	{name: 'Favourite', value: 'favourite'},
	{name: 'Featured', value: 'featured'},
	{name: 'On sale', value: 'onsale'},
];

function ManageProducts() {
	const classes = useStyles();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { value: searchText, onChange: onChangeSearchText } = useInput('');
	const { value: category, onChange: onChangeCategory } = useInput('');
	const { value: status, onChange: onChangeStatus } = useInput('');
	const { value: vote, onChange: onChangeVote } = useInput('');
	const { value: exportType, onChange: onChangeExport } = useInput('');

	const handleNavigate = (uri) => {
		navigate(uri);
	};

	useEffect(() => {
		dispatch(fetchAllProductAsync());
	}, [dispatch]);

  const fetching = useSelector(fetchingSelector)

  const products = useSelector(productRemaining);

  useEffect(() => {
    dispatch(categoryFilter(category));
	dispatch(searchFilter(searchText));
	dispatch(voteFilter(vote));
	dispatch(statusFilter(status))
  }, [dispatch, category, status, vote, searchText])

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
						onClick={() => handleNavigate("/admin")}
					>
						Back
					</Button>
				</Grid>
			</Grid>
			<div className={classes.tableContainer}>
				<Typography className={classes.title}>Search &amp; Filter</Typography>
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
								onChange={onChangeCategory}
							>
								<MenuItem value="">
									<em>Select Category</em>
								</MenuItem>
								{categorySelectItem.map((item) => (
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
								value={vote}
								displayEmpty
								onChange={onChangeVote}
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
								onChange={onChangeStatus}
							>
								<MenuItem value="">
									<em>Select Status</em>
								</MenuItem>
								{statusSelectItem.map((item) => (
									<MenuItem key={item.value} value={item.value}>
										{item.name}
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
              				value={searchText}
							id="outlined-basic"
							placeholder="Search..."
							variant="outlined"
							size="small"
							onChange={onChangeSearchText}
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
							onClick={() => handleNavigate("/admin/addproduct")}
						>
							+ Add new product
						</Button>
					</Grid>
				</Grid>
				<Divider />
				<ProductsTable data={products} fetching={fetching} />
			</div>
		</div>
	);
}

export default ManageProducts;
