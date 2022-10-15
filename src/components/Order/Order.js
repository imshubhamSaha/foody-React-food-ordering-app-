import React, { useState } from "react";
import Modal from "../UI/Modal";
import OrderItems from "./OrderItems";
import classes from "./Order.module.css";
import { orderData } from "../../data";

const Order = (props) => {
  const [defaultFil, setDefaultFil] = useState("30 days order");
  const [value, setValue] = useState(defaultFil);
  const [searchVal, setSearchVal] = useState("");

  const filterHandler = (e) => {
    setDefaultFil(e.target.value);
    setValue(e.target.value);
  };

  const orderItems = (
    <ul className={classes["order-items"]}>
      {value !== "all-orders"
        ? orderData
            .filter((item) =>
              value !== "30 days order"
                ? item.type === value || item.cuisine.trim() === value
                : Math.round(
                    Math.abs(new Date() - item.orderDate) /
                      (1000 * 60 * 60 * 24)
                  ) <= 30
            )
            .map((item) => {
              return (
                <OrderItems
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                  type={item.type}
                  cuisine={item.cuisine}
                  orderDate={item.orderDate}
                />
              );
            })
        : orderData.map((item) => {
            return (
              <OrderItems
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                type={item.type}
                cuisine={item.cuisine}
                orderDate={item.orderDate}
              />
            );
          })}
    </ul>
  );

  return (
    <Modal onHideOrder={props.onHideOrder}>
      <div className={classes.summary}>Order History</div>
      {/* <div className={classes.search}>
        <input
          type="text"
          placeholder="Search for a dish you ordered"
          onChange={searchHandler}
        ></input>
      </div> */}
      <div className={classes["expenses-filter"]}>
        <div className={classes["expenses-filter__control"]}>
          <label>Filter by</label>
          <select value={defaultFil} onChange={filterHandler}>
            <option value="30 days order">Last 30 days order</option>
            <option value="all-orders">All orders</option>
            <option value="North-Indian">North-Indian</option>
            <option value="South-Indian">South-Indian</option>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
          </select>
        </div>
      </div>
      {orderItems}
      <div className={classes.total}></div>
      <div className={classes.actions}>
        <button onClick={props.onClick}>Back To Cart</button>
      </div>
    </Modal>
  );
};

export default Order;
