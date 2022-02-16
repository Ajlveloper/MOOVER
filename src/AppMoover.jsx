import React, { useReducer, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import NavBar from "./components/NavBar/NavBar";
import OrderMoover from "./components/OrderMoover/OrderMoover";
import ViewPackaje from "./components/ViewPackaje/ViewPackaje";
import "./AppMover.css";
import { ShowContext } from "./hooks/ShowContext";
import Contacto from "./components/Contacto/Contacto";
import { reducerMessage } from "./reducerMessage";

const init = () => {
  return JSON.parse(localStorage.getItem('Orden'));
}

const AppMoover = () => {
  const [show, setShow] = useState(false);

  const [message, dispatch] = useReducer(reducerMessage, [], init)
  return (
    <ShowContext.Provider 
    value={{
      show,
      setShow,
      message,
      dispatch
    }}
    >
      <div className="app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/order-moover" element={<OrderMoover />} />
          <Route exact path="/view-packaje" element={<ViewPackaje />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </ShowContext.Provider>
  );
};

export default AppMoover;
