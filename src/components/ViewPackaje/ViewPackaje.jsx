import axios from "axios";
import React from "react";
import OrderComplete from "./OrderComplete/OrderComplete";
import OrderProcess from "./OrderProcess/OrderProcess";

const ViewPackaje = () => {

  const getMessage = async () => {
    const order = JSON.parse(localStorage.getItem("Orden"));
    const { data } = await axios.get(`api/order/${order.uid}`);
    return data;
  }
  getMessage().then(data => localStorage.setItem('Message', JSON.stringify(data))).catch(err => console.log(err));

  const message = JSON.parse(localStorage.getItem("Orden"));
  return !message?.estado ? <OrderProcess /> : <OrderComplete />;
};

export default ViewPackaje;
