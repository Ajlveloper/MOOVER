import React, { useEffect, useContext, useState } from "react";
import { getMessage } from "../../helpers/fetchOrder";
import { ShowContext } from "../../hooks/ShowContext";
import OrderComplete from "./OrderComplete/OrderComplete";
import OrderProcess from "./OrderProcess/OrderProcess";

const ViewPackaje = () => {
  const [response, setResponse] = useState({}) ;

  const { show } = useContext(ShowContext)


  useEffect(() => {
    getMessage()
      .then((data) => {
        localStorage.setItem("Message", JSON.stringify(data));
        const responseMessage = JSON.parse(localStorage.getItem("Message")) || {};
        setResponse(responseMessage);
      })
      .catch((error) => {
        if(error) return;
      });
  }, []);

  const { estado } = response;
  return !estado ? <OrderProcess /> : <OrderComplete />;
};

export default ViewPackaje;
