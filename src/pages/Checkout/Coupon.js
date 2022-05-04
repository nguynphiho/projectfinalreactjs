import React, { useState } from "react";
import useInput from "hooks/input.hooks";
import { useCheckbox } from "hooks/input.hooks";
import { Grid, Button, Typography, TextField } from "@material-ui/core";
import { useStyles, ApplyCoupon } from "./Constants";


export default function Coupon() {
    // coupon
    const classes = useStyles();
    const [isCouponOpen, setCouponOpen] = useState(false);
    const { value: coupon, onChange: onChangeCoupon } = useInput("");
    const [ isErrorCoupon, setIsErrorCoupon] = useState("");
    const { value: errorMess, setValue: setError } = useCheckbox(false);
    
    // submit coupon
	const submitCoupon = async (e) => {
		setError(false);
		if (!coupon || coupon.trim().length === 0) {
			setError(true);
			setCouponOpen(!isCouponOpen);
			setIsErrorCoupon("Please enter a coupon code.");
			e.preventDefault();
		} else {
			setError(true);
			setCouponOpen(!isCouponOpen);
			setIsErrorCoupon('Coupon "' + coupon + '" does not exist!');
			e.preventDefault();
		}
	};

    // Check open
	const handleChangeCouponOpen = () => {
		setCouponOpen(!isCouponOpen);
	};
    return (
    <>
        <Grid container xs={10} item className={classes.paper}>
            <Grid
                style={{ flexGrow: 1, padding: 10 }}
                xs
                container
                item
                justifyContent={"flex-start"}
            >
                Have a coupon?
            </Grid>
            <Grid item container xs justifyContent={"flex-end"}>
                <Button
                    variant="text"
                    className={classes.button}
                    onClick={handleChangeCouponOpen}
                    value={isCouponOpen}
                >
                    Click here to enter your code
                </Button>
            </Grid>
        </Grid>
        {isErrorCoupon && (
        <Grid container xs={10} item className={classes.paper}>
            <Grid
                style={{ flexGrow: 1, padding: 10 }}
                xs
                container
                item
                justifyContent={"flex-start"}
            >
                {isErrorCoupon}
            </Grid>
        </Grid>
        )}
        {isCouponOpen && (
            <Grid container xs={10} item style={{ marginBottom: 50 }}>
                <Grid container item>
                    <form style={{ width: "100%" }} noValidate autoComplete="off">
                        <Typography>
                            If you have a coupon code, please apply it below.
                        </Typography>
                        <TextField
                            className={classes.input}
                            value={coupon}
                            onChange={onChangeCoupon}
                            placeholder="Coupon code"
                            variant="outlined"
                        />
                        <ApplyCoupon
                            style={{ marginTop: 10 }}
                            onClick={submitCoupon}
                        >
                            Apply Coupon
                        </ApplyCoupon>
                    </form>
                </Grid>
            </Grid>
        )}
    </>
    )
}
