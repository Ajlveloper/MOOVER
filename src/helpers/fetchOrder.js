import axios from "axios";

export const getMessage = async () => {
  try {
    const order = JSON.parse(localStorage.getItem("Orden")) || {};
    const { data } = await axios.get(`api/order/${order?.uid}`);
    return data;
  } catch (error) {
    // Cuando aparezca este error, no implica que sea malo, porque hay que recordar que estaría la promesa en un status reject
    throw new Error('Error en el mensaje');
  }
};