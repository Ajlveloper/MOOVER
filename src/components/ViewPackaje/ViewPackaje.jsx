import React from 'react'
import OrderComplete from './OrderComplete/OrderComplete'
import OrderProcess from './OrderProcess/OrderProcess'

const ViewPackaje = () => {

  const order = JSON.parse(localStorage.getItem('Orden')) || {};

  console.log(order);
  return (

      !order.estado
      ?  (
        <OrderProcess />
      )
      : (
        <OrderComplete />
      )
  )}

export default ViewPackaje