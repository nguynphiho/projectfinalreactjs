import { Button, Grid, makeStyles } from '@material-ui/core';
import BreadcrumbsCustom from 'components/BreadcrumbsCustom';
import React, { useEffect } from 'react';
import CustomTitle from './CustomTitle';
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { viewProduct } from 'redux/manageProduct/action'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '70px',
    padding: theme.spacing(0, 2)
  },
  btn: {
    borderRadius: 25,
    fontWeight: 700,
    padding: theme.spacing(1, 1),
    minWidth: 75,
    marginRight: theme.spacing.apply(2),
  },
  title: {
    marginTop: theme.spacing(2),
    fontSize: '40px',
    fontWeight: 700,
    fontFamily: 'Poppins',
    color: 'grey',
    textShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)'
  },
  formContainer: {
    marginTop: theme.spacing(3),
    border: 'solid 2px grey',
    borderRadius: 20,
    padding: theme.spacing(2)
  },

  imgContainer: {
    width: 250,
    height: 250,
    borderRadius: 10,
    backgroundColor: 'blue',
    overflow: 'hidden',

    '& img': {
      width: 250,
      height: 250,
      objectFit: 'cover',
    }
  },

  btnContainer: {
    marginTop: theme.spacing(3),
    position: 'relative',
    overflow: 'hidden',

    '& input[type="file"]': {
      fontSize: 100,
      position: 'absolute',
      opacity: 0,
    }
  },
}))
const breadCrumbsList = {
  list: [
    { name: 'Manage Products', path: '' },
    { name: 'Product List', path: '' },
  ],
  active: 'Product Detail'
}

function ProductDetail() {
  const classes = useStyles();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleNavigate = (url) => {
    navigate(url)
  }

  useEffect(()=>{
    dispatch(viewProduct(params.id))
  },[dispatch, params.id])

  const product = useSelector((state) => state.productReducer.productSelected)
  console.log({product})
  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.title}>Product Detail</Grid>
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

      <Grid container className={classes.formContainer}>
        <Grid
          container
          item
          sm={12} md={3} lg={3}
          justifyContent="center"
          alignItems='center'
          direction='column'
        >
          <Grid item>
            <div className={classes.imgContainer}>
              <img src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-6.jpg" alt="" />
            </div>
          </Grid>
        </Grid>
        <Grid item sm={6} md={3} lg={3}>
          <CustomTitle title="Product Name" name="Black Tea" />
          <CustomTitle title="Price" name="$1.232" />
          <CustomTitle title="Category" name="tea" />
          <CustomTitle title="Status" name="Black Tea" />
        </Grid>

        <Grid item sm={6} md={3} lg={3}>
          <CustomTitle title="Vote" name="3 SAO" />
          <CustomTitle title="Create date" name="10/02/2022" />
          <CustomTitle title="Update date" name="10/03/2022" />
          <CustomTitle title="Amount" name="10" />
        </Grid>

        <Grid item sm={12} md={3} lg={3}>
          <CustomTitle title="Descriptions" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" />
        </Grid>
      </Grid>

    </div>
  )
}

export default ProductDetail;