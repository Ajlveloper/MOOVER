import React from "react";
import Delivery from "../../../assets/img/Delivery";
import './OrderComplete.css'
const OrderComplete = () => {
  return (
    <div className="content-complete">
      <div className="content-delivery">
        <Delivery className="empty" />
      </div>
      <h2 className="orange title-delivery">
        Su solicitud esta en proceso, en minutos el repartidor llegará a su hogar.
      </h2>
    </div>
  );
};

export default OrderComplete;
