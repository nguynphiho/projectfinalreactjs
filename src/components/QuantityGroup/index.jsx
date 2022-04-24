import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartUpdate } from "redux/addToCart/actions";
import "./style.scss";
function QuantityGroup(props) {
  const { value, id } = props;
  const [quantity, setQuantity] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      cartUpdate({
        id: id,
        quantity: quantity,
      })
    );
  }, [quantity]);

  function handleIncrease() {
    setQuantity((prevState) => prevState + 1);
  }
  function handleDecrease() {
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  }
  function handleChangeInput(e) {
    setQuantity(Number(e.target.value));
  }

  function handleBlurInput() {
    if (quantity < 1) {
      setQuantity(1);
    }
  }
  return (
    <div className="quantity__group">
      <input
        type="number"
        value={quantity}
        onChange={handleChangeInput}
        onBlur={handleBlurInput}
      />
      <div className="quantity__group__count">
        <span onClick={handleIncrease}>+</span>
        <span onClick={handleDecrease}>-</span>
      </div>
    </div>
  );
}

export default QuantityGroup;
