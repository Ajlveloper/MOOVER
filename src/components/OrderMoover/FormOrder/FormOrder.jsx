import React, { useContext, useEffect, useRef, useMemo } from "react";
import { ShowContext } from "../../../hooks/ShowContext";
import useForm from "../../../hooks/useForm";
import ModalSuccess from "../Modal-Success/ModalSuccess";
import "./FormOrder.css";
import axios from "axios";
import Order from "./Order";

const FormOrder = ({ setNewOrder }) => {
  const { handleChangeInput, value, reset, errors } = useForm({
    nombre: "",
    apellido: "",
    correo: "",
    mensaje: "",
    estado: false,
  });

  const { show, setShow } = useContext(ShowContext);

  useEffect(() => {
    return () => {
      if (show) {
        setShow(!show);
        setNewOrder((order) => !order);
      }
    };
  }, []);

  // const valueMemo = useMemo(() => value, [value]);

  // console.log(valueMemo);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("api/order", value);

    localStorage.setItem("Orden", JSON.stringify(data));

    setShow(!show);
    reset();
  };

  return (
    <>
      <Order
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
        errors={errors}
        value={value}
      />
    </>
  );
};

export default FormOrder;
