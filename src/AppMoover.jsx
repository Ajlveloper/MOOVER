import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import NavBar from "./components/NavBar/NavBar";
import OrderMoover from "./components/OrderMoover/OrderMoover";
import ViewPackaje from "./components/ViewPackaje/ViewPackaje";
import "./AppMover.css";
import { ShowContext } from "./hooks/ShowContext";
import Contacto from "./components/Contacto/Contacto";

const AppMoover = () => {
  const [show, setShow] = useState(false);
  return (
    <ShowContext.Provider 
    value={{
      show,
      setShow
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
