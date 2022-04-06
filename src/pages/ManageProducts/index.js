import React, {useEffect, useState} from 'react';
import { 
  Button, Divider, FormControl, Grid, makeStyles,
  MenuItem, Select, TextField, Typography, CircularProgress
} from '@material-ui/core';
import BreadcrumbsCustom from 'components/BreadcrumbsCustom';
import ProductsTable from './ProductsTable';
import { useNavigate } from 'react-router-dom';
import { useInput } from 'hooks/input.hooks';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchAllProductAsync, searchFilter, voteFilter, statusFilter, categoryFilter
} from 'redux/manageProduct/action';
import { fetchingFilterSelector, productRemaining } from 'redux/manageProduct/selector';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '70px',
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
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: 'grey',
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
    width: '100%',
  },

}))

const breadCrumbsList = {
  list: [
    { name: 'Manage Products', path: '' },
  ],
  active: 'Product List'
}

const categorySelectItem = [
  { name: "Tea", value: 'tea' },
  { name: "Coffee", value: 'coffee' },
  { name: "soda", value: 'soda' },
]

const exportSelectItem = [
  { name: "*.csv", value: "csv" },
  { name: "*.excel", value: "excel" },
  { name: "*.pdf", value: "pfd" },
]

const voteSelectItem = [
  { name: "1 sao", value: 1 },
  { name: "2 sao", value: 2 },
  { name: "3 sao", value: 3 },
  { name: "4 sao", value: 4 },
  { name: "5 sao", value: 5 },
]

const statusListItem = [
  {value: 'onsale', name: 'On Sale'},
  {value: 'outofstock', name: 'Out Of Stock'},
  {value: 'bestseller', name: 'Best Seller'},
  {value: 'featured', name: 'Featured'},
  {value: 'favorite', name: 'Favorite'},
];

const data = [
  { id: 1, name: "Black Tea", price: 2.24, category: 'Tea', status: 'sale', vote: 3, description: 'this is black tea good for heathy' },
  { id: 2, name: "Honey Tea", price: 1.24, category: 'Tea', status: 'sale', vote: 3, description: 'this is black tea good for heathy' },
  { id: 3, name: "Mint Tea", price: 4.24, category: 'Tea', status: 'sale', vote: 3, description: 'this is black tea good for heathy' },
  { id: 4, name: "Fruits Tea", price: 5.24, category: 'Tea', status: 'sale', vote: 3, description: 'this is black tea good for heathy' },
  { id: 5, name: "Milk Tea", price: 6.24, category: 'Tea', status: 'sale', vote: 3, description: 'this is black tea good for heathy' },
];

function ManageProducts() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [vote, setVote] = useState("")
  
  const {value: exportType, onChange: onChangeExport} = useInput("")

  const handleNavigate = (url) => {
    navigate(url)
  }

  const  fetching  = useSelector(fetchingFilterSelector);
  console.log({fetching});

  const products = useSelector(productRemaining);
  console.log({products})

  // fetching products
  useEffect(()=>{
    dispatch(fetchAllProductAsync())
  },[]);

  const handleSearchFilter = (e) => {
    dispatch(searchFilter(e.target.value))
  }

  const handleVoteFilter = (e) => {
    setVote(e.target.value)
    dispatch(voteFilter(vote))
  }

  const handleCategoryFilter = (e) => {
    setCategory(e.target.value)
    dispatch(categoryFilter(category))
  }

  const handleStatusFilter = (e) => {
    setStatus(e.target.value)
    dispatch(statusFilter(status))
  }


  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.mainTitle}>Products</Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btn}
            onClick={() => handleNavigate("/admin/manage-prods")}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <div className={classes.tableContainer}>
        <Typography className={classes.title}>Search & Filter</Typography>
        <Grid container spacing={4} className={classes.selectContainer}>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <FormControl variant="outlined" className={classes.formControl} size="small" >
              <Select
                value={category}
                displayEmpty
                onChange={(e) => handleCategoryFilter(e)}
              >
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                {
                  categorySelectItem.map((item) => (
                    <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <FormControl variant="outlined" className={classes.formControl} size="small" >
              <Select
                value={vote}
                displayEmpty
                onChange={(e) => handleVoteFilter(e)}
              >
                <MenuItem value="">
                  <em>Select Vote</em>
                </MenuItem>
                {
                  voteSelectItem.map((item) => (
                    <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <FormControl variant="outlined" className={classes.formControl} size="small" >
              <Select
                value={status}
                displayEmpty
                onChange={(e) => handleStatusFilter(e)}
              >
                <MenuItem value="">
                  <em>Select Status</em>
                </MenuItem>
                {
                  statusListItem.map((item) => (
                    <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Divider />
        <Grid container className={classes.searchContainer} alignItems='center' justifyContent='flex-end' spacing={3}>
          <Grid item >
            <TextField 
              id="outlined-basic"
              placeholder='Search...'
              variant="outlined" size="small" 
              onChange={(e) => handleSearchFilter(e)}
            />
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl} size="small" >
              <Select
                value={exportType}
                displayEmpty
                onChange={onChangeExport}
                placeholder="Export"
              >
                <MenuItem value="">
                  <em>Export</em>
                </MenuItem>
                {
                  exportSelectItem.map((item) => (
                    <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.addBtn}
              onClick={() => handleNavigate("/admin/addproduct")}
            >+ Add new product</Button>
          </Grid>
        </Grid>
        <Divider />
        {/* {
          fetching && 
          <Grid container justifyContent="center" alignItems="center" style={{marginTop: 20}}>
            <Grid item> <Typography>Loding Table....</Typography> </Grid>
            <Grid item> <CircularProgress /> </Grid>
          </Grid>
        }
        {
          !fetching && products && 
          <ProductsTable data={products}/>
        } */}
        <ProductsTable data={data}/>
      </div>
    </div >
  )
}

export default ManageProducts