import {
  Button,
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAvatar, useCheckbox, useInput } from "hooks/input.hooks";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { requestCategories } from "redux/manageProduct/category/actions";
import { requestStatuses } from "redux/manageProduct/productStatus/actions";
import {
  updateProduct,
  updateProductImage,
} from "redux/manageProduct/productUpdate/actions";
import { viewProductRequest } from "redux/manageProduct/productView/actions";

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
  fieldName: {
    color: "grey",
    fontSize: 16,
    fontFamily: "poppins",
    fontWeight: 600,
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
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1, 0),
      width: "90%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
  },
  formControl: {
    margin: theme.spacing(1, 0),
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const breadCrumbsList = {
  list: [{ name: "Manage Products", path: "" }],
  active: "Create New Product",
};

function EditProduct() {
  const classes = useStyles();

  const navigate = useNavigate();

  const params = useParams();

  const dispatch = useDispatch();

  const { productSelected } = useSelector((state) => state.viewProductReducer);
  const { categories } = useSelector((state) => state.categoryReducer);
  const { statuses } = useSelector((state) => state.statusReducer);

  const { value: image, onChange: onChangeImage } = useAvatar(null);
  const {
    value: title,
    setValue: setTitle,
    onChange: onChangeTitle,
  } = useInput("");
  const {
    value: price,
    setValue: setPrice,
    onChange: onChangePrice,
  } = useInput("");
  const {
    value: category,
    setValue: setCategory,
    onChange: onChangeCategory,
  } = useInput("");
  const {
    value: status,
    setValue: setStatus,
    onChange: onChangeStatus,
  } = useInput("");
  const {
    value: amount,
    setValue: setAmount,
    onChange: onChangeAmount,
  } = useInput("");
  const {
    value: description,
    setValue: setDescription,
    onChange: onChangeDescription,
  } = useInput("");
  const { value: error, setValue: setError } = useCheckbox(false);

  useEffect(() => {
    if (!!productSelected) {
      setTitle(productSelected.title);
      setPrice(productSelected.price);
      setCategory(productSelected.category.title);
      setStatus(productSelected.status);
      setAmount(productSelected.amount);
      setDescription(productSelected.description);
    }
  }, [productSelected]);

  useEffect(() => {
    dispatch(requestCategories());
    dispatch(requestStatuses());
    dispatch(viewProductRequest(parseInt(params.id)));
  }, [dispatch, params.id]);

  const handleUpdate = () => {
    if (!title || !price || !amount || !category || !status || !description) {
      setError(true);
    } else {
      const product = {
        id: productSelected.id,
        title,
        price,
        category,
        status,
        amount,
        description,
      };
      if (!image) {
        dispatch(updateProduct(product));
      } else {
        dispatch(updateProductImage(product, image));
      }
    }
  };

  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.title}>
          Edit Product
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
            md={4}
            lg={4}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item>
              <div className={classes.imgContainer}>
                <img
                  src={
                    !image
                      ? "http://127.0.0.1:8887/" + productSelected.image
                      : image.preview
                  }
                  alt="Product"
                />
              </div>
            </Grid>
            <Grid item>
              <div className={classes.btnContainer}>
                <Button variant="contained" color="primary">
                  Choose Image
                  <input type="file" onChange={onChangeImage} />
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <form className={classes.form}>
              <Typography className={classes.fieldName}>
                Product Name*:
              </Typography>
              <TextField
                value={title}
                onChange={onChangeTitle}
                className={classes.textField}
                placeholder="Product Name"
                size="small"
                variant="outlined"
              />
              <Typography className={classes.fieldName}>Price*:</Typography>
              <TextField
                value={price}
                onChange={onChangePrice}
                className={classes.textField}
                placeholder="Price"
                size="small"
                variant="outlined"
              />
              <Typography className={classes.fieldName}>Category*:</Typography>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                size="small"
              >
                <Select
                  value={category}
                  onChange={onChangeCategory}
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
              <Typography className={classes.fieldName}>Status*:</Typography>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                size="small"
              >
                <Select
                  value={status}
                  onChange={onChangeStatus}
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
            </form>
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <form className={classes.form}>
              <Typography className={classes.fieldName}>Amount*:</Typography>
              <TextField
                type="number"
                value={amount}
                onChange={onChangeAmount}
                className={classes.textField}
                placeholder="Amount"
                size="small"
                variant="outlined"
              />
              <Typography className={classes.fieldName}>
                Description*:
              </Typography>
              <TextField
                multiline
                value={description}
                onChange={onChangeDescription}
                rows={9}
                placeholder="Product Description"
                variant="outlined"
              />
            </form>
          </Grid>
        </Grid>
      )}
      {!!productSelected && error && (
        <Grid style={{ marginTop: "10px" }}>
          <Alert severity="error">Fill out all field, please!!!</Alert>
        </Grid>
      )}
      {!!productSelected && (
        <Grid style={{ marginTop: "40px" }}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Grid>
      )}
    </div>
  );
}

export default EditProduct;
