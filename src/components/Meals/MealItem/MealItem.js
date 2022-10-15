import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      type: props.type,
      cuisine: props.cuisine,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          Cuisine - {props.cuisine} <br></br> Type - {props.type} <br></br>
          Availability - {props.available}
        </div>
        <div className={classes.price}>{`₹${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
