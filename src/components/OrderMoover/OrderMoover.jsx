import React, { useState, useContext } from "react";
import { ShowContext } from "../../hooks/ShowContext";
import FormOrder from "./FormOrder/FormOrder";
import NewOrder from "./FormOrder/NewOrder";
import ModalSuccess from "./Modal-Success/ModalSuccess";
import "./OrderMoover.css";

const OrderMoover = () => {
  const [newOrder, setNewOrder] = useState(false);

  const handleNewOrder = () => {
    setNewOrder(!newOrder);
    localStorage.clear()
  };

  const { show } = useContext(ShowContext);  

  return (
    <div className="order-moover">
      <div className="box-left">
        <h2>Solicita un <span className="text-white">MOOVER</span> llenando este formulario.</h2>
      </div>

      <div className="form-order">
       {
         !JSON.parse(localStorage.getItem('Orden')) ? <FormOrder /> : <NewOrder handleNewOrder={handleNewOrder} />
       } 
      </div>
      {show && <ModalSuccess />}
    </div>
  );
};

export default OrderMoover;
