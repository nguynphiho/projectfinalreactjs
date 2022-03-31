import React from 'react';
import { Button, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import BreadcrumbsCustom from 'components/BreadcrumbsCustom';
import SelectInputCustom from './components/SelectInputCustom';
import ProductsTable from './components/ProductsTable';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '70px',
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
  }

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

function ManageProducts() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <div className={classes.tableContainer}>
        <Typography className={classes.title}>Search & Filter</Typography>
        <Grid container spacing={4} className={classes.selectContainer}>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <SelectInputCustom empty="Selected by category" listItem={categorySelectItem} />
          </Grid>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <SelectInputCustom empty="Selected by price" listItem={categorySelectItem} />
          </Grid>
          <Grid item sm={12} md={4} lg={4} xl={4}>
            <SelectInputCustom empty="Selected by Status" listItem={categorySelectItem} />
          </Grid>
        </Grid>
        <Divider />
        <Grid container className={classes.searchContainer} alignItems='center' justifyContent='flex-end' spacing={3}>
          <Grid item >
            <TextField id="outlined-basic" placeholder='Search...' variant="outlined" size="small" />
          </Grid>
          <Grid item>
            <SelectInputCustom empty="Export File" listItem={categorySelectItem} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" className={classes.addBtn}>+ Add new product</Button>
          </Grid>
        </Grid>
        <Divider />
        <ProductsTable />
    </div>
    </div >
  )
}

export default ManageProducts