import useInput from "hooks/input.hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartUpdateRequest } from "redux/manageCart/actions";
import "./style.scss";

function QuantityGroup({ id, quantity }) {
  const dispatch = useDispatch();

  const { value, setValue } = useInput(quantity);

  useEffect(() => {
    dispatch(
      cartUpdateRequest({
        id,
        quantity: value,
      })
    );
  }, [value]);

  function handleIncrease() {
    setValue((prevState) => prevState + 1);
  }

  function handleDecrease() {
    if (value > 1) {
      setValue((prevState) => prevState - 1);
    }
  }

  function handleChangeInput(e) {
    if (Number(e.target.value) > 0) {
      setValue(Number(e.target.value));
    } else {
      setValue(1);
    }
  }

  return (
    <div className="quantity__group">
      <input type="number" value={value} onChange={handleChangeInput} />
      <div className="quantity__group__count">
        <span onClick={handleIncrease}>+</span>
        <span onClick={handleDecrease}>-</span>
      </div>
    </div>
  );
}

export default QuantityGroup;
