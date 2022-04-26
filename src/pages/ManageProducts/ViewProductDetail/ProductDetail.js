import { Button, Grid, makeStyles } from "@material-ui/core";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import React, { useEffect } from "react";
import CustomTitle from "./CustomTitle";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { viewProductRequest } from "redux/manageProduct/productView/actions";
import { requestStatuses } from "redux/manageProduct/productStatus/actions";

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
  hiddenImage: {
    display: "none",
  },
  showImage: {
    display: "flex",
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
  const classes = useStyles();

  const params = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { productSelected } = useSelector((state) => state.viewProductReducer);
  const { statuses } = useSelector((state) => state.statusReducer);

  useEffect(() => {
    dispatch(requestStatuses());
    dispatch(viewProductRequest(parseInt(params.id)));
  }, [dispatch, params.id]);

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
            xs={12}
            sm={12}
            md={3}
            lg={3}
            justifyContent="center"
            alignItems="center"
            className={
              !productSelected.image ? classes.hiddenImage : classes.showImage
            }
          >
            <div className={classes.imgContainer}>
              <img
                src={
                  !productSelected.image
                    ? ""
                    : "http://127.0.0.1:8887/" + productSelected.image.replaceAll("\\", "/")
                }
                alt="Product"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={!productSelected.image ? 4 : 3}
            lg={!productSelected.image ? 4 : 3}
          >
            <CustomTitle title="Product Name" name={productSelected.title} />
            <CustomTitle title="Price" name={"$ " + productSelected.price} />
            <CustomTitle
              title="Category"
              name={productSelected.category.title}
            />
            <CustomTitle
              title="Status"
              name={
                Object.entries(statuses).find(
                  (status) => status[0] === productSelected.status
                )[1]
              }
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={!productSelected.image ? 4 : 3}
            lg={!productSelected.image ? 4 : 3}
          >
            <CustomTitle title="Vote" name={productSelected.vote + " star"} />
            <CustomTitle
              title="Create date"
              name={productSelected.createdDate}
            />
            <CustomTitle
              title="Update date"
              name={productSelected.updatedDate}
            />
            <CustomTitle title="Amount" name={productSelected.amount} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={!productSelected.image ? 4 : 3}
            lg={!productSelected.image ? 4 : 3}
          >
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
