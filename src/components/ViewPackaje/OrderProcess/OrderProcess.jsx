import React from "react";
import Empty from "../../../assets/img/Empty";
import "./OrderProcess.css";

const OrderProcess = () => {
  return (
    <div className="content-process">
      <div className="content-empty">
        <Empty className="empty" />
      </div>
      <h2 className="orange title-process">Aún no hay niguna orden</h2>
    </div>
  );
};

export default OrderProcess;
