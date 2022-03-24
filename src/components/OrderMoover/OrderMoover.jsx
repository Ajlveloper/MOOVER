import React, { useState, useContext, useEffect } from "react";
import { ShowContext } from "../../hooks/ShowContext";
import FormOrder from "./FormOrder/FormOrder";
import NewOrder from "./FormOrder/NewOrder";
import ModalSuccess from "./Modal-Success/ModalSuccess";
import "./OrderMoover.css";

const OrderMoover = () => {
  const [newOrder, setNewOrder] = useState(false);

  const handleNewOrder = () => {
    setNewOrder(!newOrder);
    localStorage.clear();
  };

  const { show } = useContext(ShowContext);

  const order = JSON.parse(localStorage.getItem('Orden')) || null;
  return (
    <div className="order-moover">
      <div className="box-left">
        <h2>
          Solicita un <span className="text-white">MOOVER</span> llenando este
          formulario.
        </h2>
      </div>

      <div className="form-order">
        {order ? (
          <NewOrder handleNewOrder={handleNewOrder} />
          ) : (
          <FormOrder setNewOrder={setNewOrder} />
        )}
      </div>
      {show && <ModalSuccess />}
    </div>
  );
};

export default OrderMoover;
