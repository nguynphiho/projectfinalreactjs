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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAvatar, useInput } from "hooks/input.hooks";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { updateProduct, viewProduct } from "redux/manageProduct/action";

const useStyles = makeStyles((theme) => ({
  container: {
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
const categoryListItem = [
  { value: "traditionaltea", name: "Traditional Tea" },
  { value: "royaltea", name: "Royal Tea" },
  { value: "freshgreentea", name: "Fresh Green Tea" },
  { value: "matcha", name: "Green Tea" },
];

const statusListItem = [
  { value: "onsale", name: "On Sale" },
  { value: "outofstock", name: "Out Of Stock" },
  { value: "bestseller", name: "Best Seller" },
  { value: "featured", name: "Featured" },
  { value: "favorite", name: "Favorite" },
];

function EditProduct() {
  const defaultImage =
    "https://verdure.qodeinteractive.com/wp-content/uploads/2018/03/h4-img-6.jpg";
  const classes = useStyles();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const { value: image, onChange: onChangeImage } = useAvatar();
  const { value: name, onChange: onChangeName } = useInput();
  const { value: price, onChange: onChangePrice } = useInput();
  const { value: amount, onChange: onChangeAmount } = useInput();
  const { value: category, onChange: onChangeCategory } = useInput("");
  const { value: status, onChange: onChangeStatus } = useInput("");
  const { value: desc, onChange: onChangeDesc } = useInput();

  useEffect(() => {
    dispatch(viewProduct(params.id));
  }, []);

  const productStore = useSelector(
    (state) => state.productReducer.productSelected
  );
  const handleNavigate = (url) => {
    navigate(url);
  };

  const product = {
    id: null,
    image: image ? image.preview : null,
    name,
    price,
    status,
    amount,
    category,
    desc,
    ...productStore,
  };
  console.log(product);

  const handleUpdate = () => {
    if (!(image || name || price || amount || category || status || desc)) {
      setError(true);
    } else {
      dispatch(updateProduct(product));
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
                <input type={"file"} onChange={onChangeImage} />
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
              value={product.name}
              onChange={onChangeName}
              className={classes.textField}
              placeholder="Product Name"
              size="small"
              variant="outlined"
            />

            <Typography className={classes.fieldName}>Price*:</Typography>
            <TextField
              value={product.price}
              onChange={onChangePrice}
              className={classes.textField}
              placeholder="Price"
              size="small"
              variant="outlined"
            />

            <Typography className={classes.fieldName}>category*:</Typography>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <Select
                value={product.category}
                displayEmpty
                onChange={onChangeCategory}
                label="Age"
              >
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                {categoryListItem.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.name}
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
                value={product.status}
                displayEmpty
                onChange={onChangeStatus}
                label="Age"
              >
                <MenuItem value="">
                  <em>Select Status</em>
                </MenuItem>
                {statusListItem.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.name}
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
              value={product.amount}
              onChange={onChangeAmount}
              className={classes.textField}
              placeholder="Amount"
              size="small"
              variant="outlined"
            />

            <Typography className={classes.fieldName}>Amount*:</Typography>
            <TextField
              multiline
              value={product.desc}
              onChange={onChangeDesc}
              rows={9}
              placeholder="Product Description"
              variant="outlined"
            />
          </form>
        </Grid>
      </Grid>

      {error && (
        <Grid style={{ marginTop: "10px" }}>
          <Alert severity="error">Fill out all field, please!!!</Alert>
        </Grid>
      )}

      <Grid style={{ marginTop: "40px" }}>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.btn}
          onClick={() => handleUpdate()}
        >
          Update
        </Button>
      </Grid>
    </div>
  );
}

export default EditProduct;
