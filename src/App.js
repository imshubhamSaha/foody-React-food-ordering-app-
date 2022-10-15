import React, { useState } from "react";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import { orderData } from "./data";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderIsShown, setOrderIsShown] = useState(false);

  const showOrderHandler = (data) => {
    setCartIsShown(false);
    setOrderIsShown(true);
    data.items.map((item) => {
      item.id = Math.floor((1 + Math.random()) * 100);
      item.orderDate = new Date();
      orderData.push(item);
    });

    console.log(orderData);
    console.log("Ordering....");
  };

  const hideOrderHandler = () => {
    setOrderIsShown(false);
    setCartIsShown(true);
  };

  const closeOrderHandler = () => {
    setOrderIsShown(false);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onHideCart={hideCartHandler} onShowOrder={showOrderHandler} />
      )}
      {orderIsShown && (
        <Order onClick={hideOrderHandler} onHideOrder={closeOrderHandler} />
      )}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
