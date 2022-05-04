import { Button, Grid, makeStyles } from "@material-ui/core";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import React, { useEffect } from "react";
import CustomTitle from "./CustomTitle";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "redux/manageProduct/selector";
import { getProductByIdAsync } from "redux/manageProduct/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "70px",
    padding: theme.spacing(0, 2),
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
    fontSize: "40px",
    fontWeight: 700,
    fontFamily: "Poppins",
    color: "grey",
    textShadow: "1px 3px 5px rgba(0, 0, 0, 0.3)",
  },
  formContainer: {
    marginTop: theme.spacing(3),
    border: "solid 2px grey",
    borderRadius: 20,
    padding: theme.spacing(2),
  },

  imgContainer: {
    width: 250,
    height: 250,
    borderRadius: 10,
    backgroundColor: "blue",
    overflow: "hidden",

    "& img": {
      width: 250,
      height: 250,
      objectFit: "cover",
    },
  },

  btnContainer: {
    marginTop: theme.spacing(3),
    position: "relative",
    overflow: "hidden",

    '& input[type="file"]': {
      fontSize: 100,
      position: "absolute",
      opacity: 0,
    },
  },
}));

const breadCrumbsList = {
  list: [
    { name: "Manage Products", path: "" },
    { name: "Product List", path: "" },
  ],
  active: "Product Detail",
};

function ProductDetail() {
  const defaultImage =
    "https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-6.jpg";

  const classes = useStyles();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByIdAsync(params.id))
  }, [dispatch, params.id])

  const productSelected = useSelector(selectedProduct)

  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.title}>
          Product Detail
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
      {!productSelected ? (
        <Grid container className={classes.formContainer}>
          Loading...
        </Grid>
      ) : (
        <Grid container className={classes.formContainer}>
          <Grid
            container
            item
            sm={12}
            md={3}
            lg={3}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item>
              <div className={classes.imgContainer}>
                <img
                  src={
                    !productSelected.image
                      ? defaultImage
                      : "http://127.0.0.1:8887/" + productSelected.image
                  }
                  alt="Product"
                />
              </div>
            </Grid>
          </Grid>
          <Grid item sm={6} md={3} lg={3}>
            <CustomTitle title="Product Name" name={productSelected.name} />
            <CustomTitle title="Price" name={"$ " + productSelected.price} />
            <CustomTitle
              title="Category"
              name={productSelected.category.name}
            />
            <CustomTitle
              title="Status"
              name={
                productSelected.status
              }
            />
          </Grid>
          <Grid item sm={6} md={3} lg={3}>
            <CustomTitle title="Vote" name={productSelected.vote + " star"} />
            <CustomTitle
              title="Created date"
              name={new Date(productSelected.createdDate).toLocaleString()}
            />
            <CustomTitle
              title="Updated date"
              name={new Date(productSelected.updatedDate).toLocaleString()}
            />
            <CustomTitle title="Quantity" name={productSelected.quantity} />
          </Grid>
          <Grid item sm={12} md={3} lg={3}>
            <CustomTitle
              title="Descriptions"
              desc={productSelected.description}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default ProductDetail;
