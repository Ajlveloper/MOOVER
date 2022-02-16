import React from "react";
import FormOrder from "./FormOrder/FormOrder";
import "./OrderMoover.css";

const OrderMoover = () => {
  return (
    <div className="order-moover">
      <div className="box-left">
        <h2>Solicita un <span className="text-white">MOOVER</span> llenando este formulario.</h2>
      </div>

      <div className="form-order">
        <FormOrder />
      </div>
    </div>
  );
};

export default OrderMoover;
