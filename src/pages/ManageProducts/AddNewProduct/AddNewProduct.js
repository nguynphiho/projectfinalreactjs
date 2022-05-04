import {
  Button,
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import BreadcrumbsCustom from "components/BreadcrumbsCustom";
import { useAvatar, useInput } from "hooks/input.hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productService from "services/productService";
import Snackbar from '@material-ui/core/Snackbar';

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
  hiddenImage: {
    visibility: "hidden",
  },
  showImage: {
    visibility: "visible",
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
const categories = [
  { id: 1, name: 'Fresh Tea', value: 'freshtea' },
  { id: 2, name: 'Honey Tea', value: 'honeytea' },
  { id: 3, name: 'Black Tea', value: 'blacktea' },
  { id: 4, name: 'Fruit Tea', value: 'fruittea' },
  { id: 5, name: 'Milk Tea', value: 'milktea' },
];


const statuses = [
  { id: 1, name: 'Best Seller', value: 'bestseller' },
  { id: 2, name: 'Favourite', value: 'favourite' },
  { id: 3, name: 'Featured', value: 'featured' },
  { id: 4, name: 'On sale', value: 'onsale' },
];
function AddNewProduct() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [fetching, setFetching] = useState(false);
  const [open, setOpen] = React.useState(false);

  const { value: image, onChange: onChangeImage } = useAvatar(false);
  const { value: name, onChange: onChangeName } = useInput("");
  const { value: price, onChange: onChangePrice } = useInput("");
  const { value: category, onChange: onChangeCategory } = useInput("");
  const { value: status, onChange: onChangeStatus } = useInput("");
  const { value: quantity, onChange: onChangeQuantity } = useInput("");
  const { value: description, onChange: onChangeDescription } = useInput("");

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSaveProduct = async () => {
    setError(false);
    if (
      !name ||
      !price ||
      !category ||
      !status ||
      !quantity ||
      !description
    ) {
      setError(true);
      setErrMsg("Please fill out all field.")
    } else {
      setFetching(true);
      setError(false);
      const product = {
        name,
        price,
        category: {
          id: Math.trunc(Math.random() * 100),
          name: categories.find((item) => item.value === category).name,
          value: category,
        },
        status,
        quantity,
        description,
        avatar: image,
        vote: 1,
      };
      try {
        const response = await productService.saveProduct(product)
        if (response && response.status >= 200 && response.status < 300) {
          setOpen(true);
          setFetching(false);
        }
      } catch (error) {
        console.log(error);
        setFetching(false);
        setError(true);
        setErrMsg("Error!");
      }
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
          <Grid item className={!image ? classes.hiddenImage : classes.showImage}>
            <div className={classes.imgContainer}>
              <img src={!image ? "" : image} alt="Product" />
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
              value={name}
              onChange={onChangeName}
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
                  <MenuItem key={category.id} value={category.value}>
                    {category.name}
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
                {statuses.map((item) => (
                  <MenuItem key={item.id} value={item.value}>
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
              value={quantity}
              onChange={onChangeQuantity}
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
          <Alert severity="error">{errMsg}</Alert>
        </Grid>
      )}
      <Grid style={{ marginTop: "20px" }}>
        {
          !fetching ? (
            <Button
              variant="outlined"
              color="primary"
              className={classes.btn}
              onClick={handleSaveProduct}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              disabled
              className={classes.btn}
              onClick={handleSaveProduct}
            >
              <CircularProgress color="secondary" size={24} />
            </Button>
          )
        }
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Add product successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AddNewProduct;
