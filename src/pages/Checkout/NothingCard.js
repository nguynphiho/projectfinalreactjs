import { PlaceOrder, useStyles } from "./Constants";
import { Grid, Typography } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

export default function NothingCard() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ marginTop: 100 }}
>
    <Grid container xs={10} item className={classes.paper}>
        <Grid style={{ flexGrow: 1, padding: 10 }} xs container item>
            <span style={{ fontWeight: 300 }}>
                Checkout is not available whilst your cart is empty.
            </span>
        </Grid>
    </Grid>
    <Grid container xs={10} item className={classes.paper}>
        <Grid
            style={{ flexGrow: 1, padding: 10 }}
            xs
            container
            item
            justifyContent="center"
        >
            <Typography variant="h5">
                Your cart is currently empty.
            </Typography>
        </Grid>
    </Grid>
    <Grid
        style={{ flexGrow: 1 }}
        xs
        container
        item
        justifyContent="center"
    >
        <PlaceOrder onClick={() => navigate("/products")}>
            RETURN TO SHOP
        </PlaceOrder>
    </Grid>
    </Grid>
  )
}
