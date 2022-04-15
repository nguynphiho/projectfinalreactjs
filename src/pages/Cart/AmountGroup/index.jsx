import useInput from "hooks/input.hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartUpdate } from "redux/cart/actions";
import "./style.scss";

function AmountGroup (props) {
	const { value, id } = props;

	const { value: amount, setValue: setAmount } = useInput(value);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			cartUpdate({
				id: id,
				amount: amount,
			})
		);
	}, [amount]);

	function handleIncrease () {
		setAmount((prevState) => prevState + 1);
	}

	function handleDecrease () {
		setAmount(amount - 1);
		if (amount <= 1) {
			setAmount(1);
		}
	}

	function handleChangeInput (e) {
		setAmount(Number(e.target.value));
	}

	function handleBlurInput () {
		if (amount < 1) {
			setAmount(1);
		}
	}
  
	return (
		<div className="amount__group">
			<input
				type="number"
				value={amount}
				onChange={handleChangeInput}
				onBlur={handleBlurInput}
			/>
			<div className="amount__group__count">
				<span onClick={handleIncrease}>+</span>
				<span onClick={handleDecrease}>-</span>
			</div>
		</div>
	);
}

export default AmountGroup;
