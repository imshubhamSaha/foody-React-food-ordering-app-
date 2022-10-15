import React from "react";
import classes from "./OrderItems.module.css";

const OrderItems = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  const totalAmount = `₹${props.price.toFixed(2) * props.amount} `;

  const currentDate = `${props.orderDate.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;

  const currentTime = `${props.orderDate.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

  return (
    <li className={classes["order-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.cuisine}>{props.cuisine}</div>
        <div className={classes.type}>{props.type}</div>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
          <span>=</span>
          <span>{totalAmount}</span>
        </div>
      </div>
      <div className={classes.action}>
        <span className={classes.date}>OrderDate : {currentDate}</span>
        <div>
          <span className={classes.time}>OrderTime - {currentTime}</span>
        </div>
      </div>
    </li>
  );
};

export default OrderItems;
