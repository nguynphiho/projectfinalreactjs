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
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { requestCategories } from "redux/category/actions";
import { requestStatuses } from "redux/productStatus/actions";
import { addProduct } from "redux/productAdd/actions";

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

// const categoryListItem = [
//   { value: "traditionaltea", name: "Traditional Tea" },
//   { value: "royaltea", name: "Royal Tea" },
//   { value: "freshgreentea", name: "Fresh Green Tea" },
//   { value: "matcha", name: "Green Tea" },
// ];

// const statusListItem = [
//   { value: "onsale", name: "On Sale" },
//   { value: "outofstock", name: "Out Of Stock" },
//   { value: "bestseller", name: "Best Seller" },
//   { value: "featured", name: "Featured" },
//   { value: "favorite", name: "Favorite" },
// ];

function AddNewProduct() {
  const defaultImage =
    "https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-6.jpg";

  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { productAdded } = useSelector(
    (state) => state.productAddReducer
  );
  const { categories } = useSelector((state) => state.categoryReducer);
  const { statuses } = useSelector((state) => state.statusReducer);

  const { value: error, setValue: setError } = useCheckbox(false);

  const {
    value: image,
    onChange: onChangeImage,
    setValue: setImage,
  } = useAvatar(false);
  const {
    value: title,
    onChange: onChangeTitle,
    reset: resetTitle,
  } = useInput("");
  const {
    value: price,
    onChange: onChangePrice,
    reset: resetPrice,
  } = useInput("");
  const {
    value: category,
    onChange: onChangeCategory,
    reset: resetCategory,
  } = useInput("");
  const {
    value: status,
    onChange: onChangeStatus,
    reset: resetStatus,
  } = useInput("");
  const {
    value: amount,
    onChange: onChangeAmount,
    reset: resetAmount,
  } = useInput("");
  const {
    value: description,
    onChange: onChangeDescription,
    reset: resetDescription,
  } = useInput("");

  useEffect(() => {
    dispatch(requestCategories());
    dispatch(requestStatuses());
  }, [dispatch]);

  useEffect(() => {
    setImage(false);
    resetTitle();
    resetPrice();
    resetCategory();
    resetStatus();
    resetAmount();
    resetDescription();
  }, [productAdded]);

  const handleSaveProduct = () => {
    if (
      !image ||
      !title ||
      !price ||
      !category ||
      !status ||
      !amount ||
      !description
    ) {
      setError(true);
    } else {
      const product = {
        title,
        price,
        category,
        status,
        amount,
        description,
      };
      dispatch(addProduct(product, image));
    }
  };

  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.title}>
          Create New Product
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
              <img src={!image ? defaultImage : image.preview} alt="Product" />
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
              required
            />

            <Typography className={classes.fieldName}>Price*:</Typography>
            <TextField
              value={price}
              onChange={onChangePrice}
              className={classes.textField}
              placeholder="Price"
              size="small"
              variant="outlined"
              required
            />
            <Typography className={classes.fieldName}>Category*:</Typography>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <Select value={category} displayEmpty onChange={onChangeCategory}>
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
              <Select value={status} displayEmpty onChange={onChangeStatus}>
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
              required
            />
            <Typography className={classes.fieldName}>Description*:</Typography>
            <TextField
              multiline
              value={description}
              onChange={onChangeDescription}
              rows={9}
              placeholder="Product Description"
              variant="outlined"
              required
            />
          </form>
        </Grid>
      </Grid>
      {error && (
        <Grid style={{ marginTop: "10px" }}>
          <Alert severity="error">Fill out all field, please!!!</Alert>
        </Grid>
      )}
      <Grid style={{ marginTop: "20px" }}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.btn}
          onClick={handleSaveProduct}
        >
          Save
        </Button>
      </Grid>
    </div>
  );
}

export default AddNewProduct;
